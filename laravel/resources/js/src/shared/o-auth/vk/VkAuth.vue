<script setup lang="ts">
import * as VKID from '@vkid/sdk';
import { onMounted, shallowRef } from 'vue';

const vkButtonContainer = shallowRef<HTMLElement>();

const { handler } = defineProps<{
  custom?: boolean;
  handler: (...args: any[]) => any;
}>();

// const emit = defineEmits<{
//   (event: 'success'): void;
// }>();

function vkidOnSuccess(data: any) {
  handler(data);
}

function vkidOnError(error: any) {
  console.error(error);
}

function loginWithVK() {
  VKID.Auth.login()
    .then(({ code, device_id }) => {
      VKID.Auth.exchangeCode(code, device_id)
        .then(vkidOnSuccess)
        .catch((err) => {
          throw err;
        });
    })
    .catch(vkidOnError);
}

onMounted(() => {
  // В Telegram Mini App (WebView/Web Telegram) VKID-виджет не нужен и даёт лишние CORS-ошибки.
  // Отключаем инициализацию в этом окружении. На обычном сайте VK авторизация остаётся.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isTelegramWebApp = typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp;
  if (isTelegramWebApp) {
    return;
  }

  if (vkButtonContainer.value) {
    try {
      VKID.Config.init({
        app: 53625200,
        redirectUrl: `${import.meta.env.VITE_APP_URL}/auth/vk/callback`,
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE,
        scope: 'vkid.personal_info,email',
      });

      const oneTap = new VKID.OneTap();

      oneTap
        .render({
          container: vkButtonContainer.value,
          fastAuthEnabled: false,
          showAlternativeLogin: true,
          styles: {
            borderRadius: 50,
            height: 52,
          },
        })
        .on(VKID.WidgetEvents.ERROR, vkidOnError)
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
          const code = payload.code;
          const deviceId = payload.device_id;

          VKID.Auth.exchangeCode(code, deviceId).then(vkidOnSuccess).catch(vkidOnError);
        });

      // function vkidOnSuccess(data) {
      //   const url = '/auth/vk/callback';
      //   fetch(url, {
      //     method: 'POST', // Указываем метод
      //     headers: {
      //       'Content-Type': 'application/json', // Тип отправляемых данных
      //     },
      //     body: JSON.stringify(data), // Преобразуем объект в JSON
      //   })
      //     .then((response) => response.json())
      //     .then((resp) => {
      //       if (resp.success) {
      //         emit('success');
      //       }
      //     })
      //     .catch((error) => {
      //       console.error('Ошибка:', error);
      //     });
      // }
      //
      // function vkidOnError(error) {
      //   console.error(error);
      // }
    } catch (e) {
      console.log(e);
    }
  }
});
</script>

<template>
  <div v-if="!custom" ref="vkButtonContainer" />

  <slot v-else :login-with-v-k="loginWithVK" />
</template>

<style scoped></style>
