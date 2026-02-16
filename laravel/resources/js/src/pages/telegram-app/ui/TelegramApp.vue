<template>
  <div class="telegram-app">
    <div v-if="loading" class="loading">
      <p>Авторизация...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <!-- Шаг: приветствие — имя и email -->
    <div v-else-if="step === 'welcome'" class="welcome-step">
      <Head title="PrimeFoods — Добро пожаловать" />
      <div class="form-card">
        <h2>Добро пожаловать</h2>
        <p class="hint">{{ message || 'Укажите имя и email для продолжения' }}</p>
        <form @submit.prevent="submitWelcome" class="form">
          <input
            v-model="welcomeName"
            type="text"
            placeholder="Имя"
            required
            autocomplete="name"
            class="input"
          />
          <input
            v-model="welcomeEmail"
            type="email"
            placeholder="Email"
            required
            autocomplete="email"
            class="input"
          />
          <p v-if="welcomeError" class="field-error">{{ welcomeError }}</p>
          <button type="submit" class="btn" :disabled="welcomeSending">
            {{ welcomeSending ? 'Сохранение...' : 'Продолжить' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Шаг: подтверждение телефона — кнопка «Поделиться» -->
    <div v-else-if="step === 'phone'" class="phone-step">
      <Head title="PrimeFoods — Подтверждение телефона" />
      <div class="form-card phone-card">
        <h2>Подтверждение телефона</h2>
        <p class="hint">
          Чтобы начать пользоваться приложением, просто отправьте свой номер телефона, нажав на кнопку «Поделиться».
        </p>
        <p class="hint small">
          Откроется чат с ботом — нажмите «Поделиться» и подтвердите отправку номера. Затем нажмите «Открыть приложение» в ответе бота.
        </p>
        <button type="button" class="btn btn-primary" @click="openSharePhone" :disabled="!botUsername">
          Поделиться
        </button>
        <button type="button" class="btn btn-secondary" @click="checkAuthAfterShare" :disabled="checkingAuth">
          {{ checkingAuth ? 'Проверка...' : 'Я отправил контакт' }}
        </button>
      </div>
    </div>

    <!-- Шаг: ввод email (альтернативный вход по коду) -->
    <div v-else-if="step === 'email'" class="email-step">
      <Head title="PrimeFoods — Вход по email" />
      <div class="form-card">
        <h2>Вход или регистрация</h2>
        <p class="hint">{{ message || 'Введите email для входа или регистрации' }}</p>
        <form @submit.prevent="submitEmail" class="form">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            autocomplete="email"
            class="input"
          />
          <p v-if="emailError" class="field-error">{{ emailError }}</p>
          <button type="submit" class="btn" :disabled="emailSending">
            {{ emailSending ? 'Отправка...' : 'Получить код' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Шаг: ввод кода из письма -->
    <div v-else-if="step === 'code'" class="code-step">
      <Head title="PrimeFoods — Код из письма" />
      <div class="form-card">
        <h2>Код отправлен на {{ email }}</h2>
        <p class="hint">Введите код из письма</p>
        <form @submit.prevent="submitCode" class="form">
          <input
            v-model="code"
            type="text"
            inputmode="numeric"
            placeholder="Код"
            maxlength="6"
            class="input"
          />
          <p v-if="codeError" class="field-error">{{ codeError }}</p>
          <button type="submit" class="btn" :disabled="codeSending">
            {{ codeSending ? 'Проверка...' : 'Войти' }}
          </button>
          <button type="button" class="btn-link" @click="step = 'email'; code = ''; codeError = ''">
            Указать другой email
          </button>
        </form>
      </div>
    </div>

    <div v-else class="content">
      <Head title="PrimeFoods" />
      <div class="container">
        <h1>Добро пожаловать в PrimeFoods!</h1>
        <p>Вы успешно авторизованы через Telegram.</p>
        <p class="content-actions">
          <button type="button" class="btn btn-primary" @click="goToApp">
            Перейти в приложение
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import axios from 'axios';

defineOptions({
  layout: false,
});

const loading = ref(true);
const error = ref<string | null>(null);
const step = ref<'auth' | 'welcome' | 'phone' | 'email' | 'code' | 'done'>('auth');
const initData = ref('');
const message = ref('');
const botUsername = ref<string | null>(null);
/** Одноразовый токен входа из ответа webapp-auth (обход cookie в WebView) */
const loginToken = ref<string | null>(null);

const welcomeName = ref('');
const welcomeEmail = ref('');
const welcomeError = ref('');
const welcomeSending = ref(false);

const email = ref('');
const emailError = ref('');
const emailSending = ref(false);
const code = ref('');
const codeError = ref('');
const codeSending = ref(false);
const checkingAuth = ref(false);

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        initData: string;
        initDataUnsafe: unknown;
        openTelegramLink?: (url: string) => void;
      };
    };
  }
}

const authRetryDone = { current: false };

async function doWebAppAuth() {
  const tg = window.Telegram!.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#ffffff');
  tg.setBackgroundColor('#ffffff');
  initData.value = tg.initData || '';

  try {
    const response = await telegramApi.post('/telegram/webapp-auth', { initData: initData.value });
    const data = response?.data;
    if (data && typeof data === 'object' && data.success === true) {
      // Автоматический вход — сразу редирект, без промежуточного экрана
      if (data.login_token) {
        loading.value = true;
        window.location.href = `/telegram/login-by-token?token=${encodeURIComponent(data.login_token)}`;
        return;
      }
      // Фолбэк: если токена нет, показываем экран с кнопкой
      step.value = 'done';
      loading.value = false;
      return;
    }
    if (data && typeof data === 'object') {
      if (data.need_welcome) {
        step.value = 'welcome';
        message.value = data.message || '';
        if (data.bot_username) botUsername.value = data.bot_username;
        // Повторная попытка: при открытии из бота initData иногда появляется с задержкой
        if (!initData.value && !authRetryDone.current) {
          authRetryDone.current = true;
          setTimeout(async () => {
            initData.value = window.Telegram?.WebApp?.initData || '';
            if (initData.value) {
              loading.value = true;
              await doWebAppAuth();
            }
          }, 600);
        }
      } else if (data.need_phone) {
        step.value = 'phone';
        message.value = data.message || '';
        if (data.bot_username) botUsername.value = data.bot_username;
      } else if (data.need_email) {
        step.value = 'email';
        message.value = data.message || '';
      } else {
        error.value = data.error || 'Ошибка авторизации';
      }
    } else {
      error.value = 'Неверный ответ сервера';
    }
  } catch (err: unknown) {
    const ax = err as { response?: { data?: { error?: string; message?: string }; status?: number } };
    const d = ax.response?.data;
    error.value = d?.error || d?.message || 'Ошибка подключения к серверу';
  } finally {
    loading.value = false;
  }
}

async function submitWelcome() {
  welcomeError.value = '';
  if (!welcomeName.value.trim()) {
    welcomeError.value = 'Введите имя';
    return;
  }
  if (!welcomeEmail.value.trim()) {
    welcomeError.value = 'Введите email';
    return;
  }
  welcomeSending.value = true;
  try {
    const { data } = await telegramApi.post('/telegram/register-welcome', {
      initData: initData.value,
      name: welcomeName.value.trim(),
      email: welcomeEmail.value.trim(),
    });
    if (data.success) {
      step.value = 'phone';
      message.value = data.message || '';
      if (data.bot_username) botUsername.value = data.bot_username;
    } else {
      welcomeError.value = data.error || 'Ошибка сохранения';
    }
  } catch (err: unknown) {
    const ax = err as {
      response?: { status?: number; data?: { message?: string; error?: string; errors?: Record<string, string[]> } };
    };
    const d = ax.response?.data;
    if (ax.response?.status === 422 && d?.errors) {
      const first = Object.values(d.errors).flat()[0];
      welcomeError.value = first || d.message || 'Проверьте введённые данные';
    } else {
      welcomeError.value = d?.error || d?.message || 'Ошибка подключения';
    }
  } finally {
    welcomeSending.value = false;
  }
}

function openSharePhone() {
  const bot = botUsername.value?.replace(/^@/, '') || '';
  if (!bot) return;
  const url = `https://t.me/${bot}?start=share_phone`;
  if (window.Telegram?.WebApp?.openTelegramLink) {
    window.Telegram.WebApp.openTelegramLink(url);
  } else {
    window.open(url, '_blank');
  }
}

function goToApp() {
  // Вход по токену в ссылке — не зависит от cookie в WebView Telegram
  if (loginToken.value) {
    window.location.href = `/telegram/login-by-token?token=${encodeURIComponent(loginToken.value)}`;
  } else {
    window.location.href = '/menu';
  }
}

async function checkAuthAfterShare() {
  checkingAuth.value = true;
  message.value = '';
  try {
    const response = await telegramApi.post('/telegram/webapp-auth', { initData: initData.value });
    const data = response?.data;
    if (data && typeof data === 'object' && data.success === true) {
      // Автоматический вход — сразу редирект
      if (data.login_token) {
        loading.value = true;
        step.value = 'auth';
        window.location.href = `/telegram/login-by-token?token=${encodeURIComponent(data.login_token)}`;
        return;
      }
      step.value = 'done';
      return;
    }
    if (data && typeof data === 'object' && data.need_phone) {
      message.value = 'Контакт ещё не получен. Отправьте номер в чате с ботом и нажмите «Открыть приложение» в ответе бота.';
    } else {
      message.value = (data && typeof data === 'object' && data.message) ? data.message : 'Попробуйте ещё раз.';
    }
  } catch {
    message.value = 'Ошибка проверки. Попробуйте снова открыть приложение.';
  } finally {
    checkingAuth.value = false;
  }
}

async function submitEmail() {
  emailError.value = '';
  if (!email.value.trim()) {
    emailError.value = 'Введите email';
    return;
  }
  emailSending.value = true;
  try {
    const { data } = await telegramApi.post('/telegram/send-email-code', {
      initData: initData.value,
      email: email.value.trim(),
    });
    if (data.success) {
      step.value = 'code';
      code.value = '';
      codeError.value = '';
    } else {
      emailError.value = data.error || 'Не удалось отправить код';
    }
  } catch (err: unknown) {
    const ax = err as { response?: { data?: { error?: string } } };
    emailError.value = ax.response?.data?.error || 'Ошибка отправки';
  } finally {
    emailSending.value = false;
  }
}

async function submitCode() {
  codeError.value = '';
  const trimmed = code.value.replace(/\D/g, '');
  if (trimmed.length !== 6) {
    codeError.value = 'Введите 6-значный код';
    return;
  }
  codeSending.value = true;
  try {
    const { data } = await telegramApi.post('/telegram/confirm-email-link', {
      initData: initData.value,
      email: email.value.trim(),
      code: trimmed,
    });
    if (data.success) {
      router.reload({ only: ['auth'] });
    } else {
      codeError.value = data.error || 'Неверный код';
    }
  } catch (err: unknown) {
    const ax = err as { response?: { data?: { error?: string } } };
    codeError.value = ax.response?.data?.error || 'Ошибка проверки кода';
  } finally {
    codeSending.value = false;
  }
}

// Запрос к API TMA с отправкой cookie (сессия)
const telegramApi = axios.create({
  withCredentials: true,
  headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
});

onMounted(() => {
  if (!window.Telegram?.WebApp) {
    error.value = 'Это приложение доступно только в Telegram';
    loading.value = false;
    return;
  }
  // Небольшая задержка, чтобы Telegram успел подставить initData при открытии из бота
  setTimeout(() => {
    doWebAppAuth();
  }, 400);
});
</script>

<style scoped>
.telegram-app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.loading,
.error {
  text-align: center;
}

.loading p,
.error p {
  font-size: 18px;
  margin: 0;
}

.error p {
  color: #dc3545;
}

.form-card {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.form-card h2 {
  font-size: 20px;
  margin: 0 0 8px;
}

.hint {
  color: #666;
  font-size: 14px;
  margin: 0 0 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input {
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.field-error {
  color: #dc3545;
  font-size: 14px;
  margin: 0;
}

.btn {
  padding: 12px 20px;
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-primary {
  background: #2481cc;
  margin-bottom: 12px;
}

.btn-secondary {
  background: #6c757d;
  color: #fff;
}

.phone-card .hint.small {
  font-size: 13px;
  margin-bottom: 16px;
}

.btn-link {
  background: none;
  border: none;
  color: #0d6efd;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 0;
}

.content {
  width: 100%;
  max-width: 600px;
}

.container {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  color: #666;
}

.content-actions {
  margin-top: 24px;
}
</style>
