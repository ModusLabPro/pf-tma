<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { onMounted } from 'vue';

import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { VContainer } from '@/shared/ui/container';

const { props } = usePage<{
  content: string;
  seo_title: Nullable<string>;
  seo_description: Nullable<string>;
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
}>();

onMounted(() => {
  function showError(input: HTMLInputElement, message: string) {
    let error = input.nextElementSibling as HTMLElement | null;

    if (!error || !error.classList.contains('error-message')) {
      error = document.createElement('div');
      error.className = 'error-message text-red-500 text-complimentary-reg mt-1';
      input.insertAdjacentElement('afterend', error);
    }

    error.textContent = message;
    input.classList.add('border-red-500');
  }

  function clearError(input: HTMLInputElement) {
    const error = input.nextElementSibling as HTMLElement | null;
    if (error && error.classList.contains('error-message')) {
      error.remove();
    }
    input.classList.remove('border-red-500');
  }

  const input = document.getElementById('phone') as HTMLInputElement | null;
  const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
  const subscribeForm = document.getElementById('subscribe-form') as HTMLFormElement;

  const modal = document.querySelector<HTMLDivElement>('#modal');
  const closeModalBtn = document.querySelector<HTMLButtonElement>('#close-modal');

  function openModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (modal && closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e: MouseEvent) => {
      if (e.target === modal) closeModal();
    });
  }

  if (input) {
    input.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      let value = target.value.replace(/\D/g, '');

      if (value.startsWith('8')) value = '7' + value.slice(1);
      if (!value.startsWith('7')) value = '7' + value;

      value = value.substring(0, 11);

      let formatted = '+7';
      if (value.length > 1) formatted += ' (' + value.substring(1, 4);
      if (value.length >= 5) formatted += ') ' + value.substring(4, 7);
      if (value.length >= 8) formatted += '-' + value.substring(7, 9);
      if (value.length >= 10) formatted += '-' + value.substring(9, 11);

      target.value = formatted;
      clearError(target);
    });

    input.addEventListener('keypress', (e: KeyboardEvent) => {
      if (!/[0-9]/.test(e.key)) e.preventDefault();
    });
  }

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
      const check = form.querySelector('#check') as HTMLInputElement;
      const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Введите ваше имя');
      } else {
        clearError(nameInput);
      }

      const formData: {
        name: string;
        agreement: boolean;
        email: string;
      } = {
        name: nameInput.value.trim(),
        email: emailInput?.value.trim(),
        agreement: check.checked,
      };

      fetch('/email-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Ошибка отправки');
          form.reset();
          openModal();
        })
        .catch(() => console.log('Ошибка при отправке формы.'));
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
      const phoneInput = form.querySelector('#phone') as HTMLInputElement;
      const check = form.querySelector('#check') as HTMLInputElement;
      const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement | null;
      const commentInput = form.querySelector('#comment') as HTMLInputElement | null;

      let isValid = true;

      if (!nameInput.value.trim()) {
        showError(nameInput, 'Введите ваше имя');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      const digits = phoneInput.value.replace(/\D/g, '');
      if (digits.length !== 11) {
        showError(phoneInput, 'Введите корректный номер телефона');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      if (!check.checked) {
        isValid = false;
      }

      if (isValid) {
        const formData: {
          name: string;
          phone: string;
          agreement: boolean;
          email?: string;
          type: string;
          comment?: string;
        } = {
          name: nameInput.value.trim(),
          phone: phoneInput.value,
          type: 'question_form',
          agreement: check.checked,
        };

        if (emailInput && emailInput.value.trim()) {
          formData.email = emailInput.value.trim();
        }

        if (commentInput && commentInput.value.trim()) {
          formData.comment = commentInput.value.trim();
        }

        fetch('/contactform/call-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            if (!res.ok) throw new Error('Ошибка отправки');
            form.reset();
            openModal();
          })
          .catch(() => console.log('Ошибка при отправке формы.'));
      }
    });
  }
});

onMounted(() => {
  const headers = document.querySelectorAll<HTMLElement>('.accordion-header');

  headers.forEach((header: HTMLElement) => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling as HTMLElement | null;
      const icon = header.querySelector('.accordion-toggle') as SVGElement | null;

      if (!content || !icon) return;

      const isOpen = content.style.maxHeight;

      document.querySelectorAll<HTMLElement>('.accordion-content').forEach((c) => {
        c.style.maxHeight = '';
        c.classList.remove('open');
      });

      document.querySelectorAll<HTMLElement>('.accordion-header').forEach((h) => {
        const svg = h.querySelector('.accordion-toggle') as SVGElement | null;
        h.classList.remove('active');
        if (svg) svg.classList.remove('rotate');
      });

      if (!isOpen) {
        content.style.maxHeight = `${content.scrollHeight + 50}px`;
        content.classList.add('open');
        header.classList.add('active');
        icon.classList.add('rotate');
      }
    });
  });

  const firstHeader = headers[0];
  const firstContent = firstHeader?.nextElementSibling as HTMLElement | null;
  const firstIcon = firstHeader?.querySelector('.accordion-toggle') as SVGElement | null;

  if (firstHeader && firstContent && firstIcon) {
    firstContent.style.maxHeight = `${firstContent.scrollHeight + 50}px`;
    firstContent.classList.add('open');
    firstHeader.classList.add('active');
    firstIcon.classList.add('rotate');
  }

  const checkbox = document.getElementById('check') as HTMLInputElement | null;
  const box = document.getElementById('checkbox-box') as HTMLElement | null;

  if (checkbox && box) {
    checkbox.addEventListener('change', () => {
      box.classList.toggle('checked', checkbox.checked);
    });
  }

  function toggleActiveCircle(): void {
    const desktopSteps: NodeListOf<HTMLElement> = document.querySelectorAll('.md\\:flex .step');
    const mobileSteps: NodeListOf<HTMLElement> = document.querySelectorAll('.md\\:hidden .step');
    let activeIndex: number = 0;

    function updateActiveStep(): void {
      desktopSteps.forEach((step: HTMLElement, index: number) => {
        const circle: HTMLElement | null = step.querySelector('.circle');
        if (circle) {
          if (index === activeIndex) {
            circle.classList.add('bg-text', 'text-white');
            circle.classList.remove('bg-white');
          } else {
            circle.classList.add('bg-white');
            circle.classList.remove('bg-text', 'text-white');
          }
        }
      });

      mobileSteps.forEach((step: HTMLElement, index: number) => {
        const circle: HTMLElement | null = step.querySelector('.circle');
        if (circle) {
          if (index === activeIndex) {
            circle.classList.add('bg-text', 'text-white');
            circle.classList.remove('bg-white');
          } else {
            circle.classList.add('bg-white');
            circle.classList.remove('bg-text', 'text-white');
          }
        }
      });

      activeIndex = (activeIndex + 1) % desktopSteps.length;
    }

    updateActiveStep();
    setInterval(updateActiveStep, 2000);
  }

  toggleActiveCircle();

  const comm = document.getElementById('comm');
  if (comm) {
    const textarea = document.createElement('textarea');
    textarea.id = 'comment';
    textarea.placeholder = 'Сообщение';
    textarea.className = 'bg-input rounded-20 placeholder:text-additional text-mob-small-reg h-[100px] w-full resize-none p-4 focus:outline-none';
    comm.replaceWith(textarea);
  }
});
</script>

<template>
  <Head v-if="props.seoData">
    <title>{{ props.seoData.seo_title }}</title>
    <meta v-if="props.seoData.seo_description" name="description" :content="props.seoData.seo_description" />
    <meta v-if="props.seoData.seo_keywords" name="keywords" :content="props.seoData.seo_keywords" />
  </Head>
  <VContainer>
    <div class="px-6 sm:px-8" v-html="props.content" />
  </VContainer>
</template>

<style>
.v-button {
  border: 1px solid;
  padding: 3px 3px 3px 24px;
  border-radius: 50px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-mob-small-reg);
  line-height: var(--text-mob-small-reg--line-height);
  font-weight: var(--text-mob-small-reg--font-weight);
  cursor: pointer;
  transition: all 0.3s ease-in;

  .v-button__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 100%;
    background-color: white;
    color: var(--color-text);
    transition: all 0.3s ease-in;
  }

  &.v-button_dark {
    background-color: var(--color-text);
    border-color: var(--color-text);

    &:hover {
      background-color: var(--color-default);
      border-color: var(--color-default);

      .v-button__arrow {
        color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: white;
    }
  }

  &.v-button_light {
    background-color: white;
    border-color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  &.v-button_outline {
    background-color: transparent;
    border-color: var(--color-text);
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: var(--color-default);

      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
      transition: color 0.3s ease-in-out;
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }
}

.v-button:disabled {
  background-color: #cdd4d8;
  border-color: #cdd4d8;
  cursor: not-allowed;

  .v-button__label {
    color: var(--color-additional);
  }

  .v-button__arrow {
    background-color: white;
    color: var(--color-additional);
  }
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-content.open {
  padding: 16px 0;
}

.checkbox-checkmark {
  transition: opacity 0.2s;
  opacity: 0;
}

#checkbox-box.checked .checkbox-checkmark {
  opacity: 1;
}

.accordion-toggle {
  transition: transform 0.3s ease;
}

.accordion-toggle.rotate {
  transform: rotate(45deg);
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e7eaec;
  z-index: 5;
}

@media (max-width: 767px) {
  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 48px;
    left: 24px;
    width: 2px;
    height: 65%;
    background-color: #e7eaec;
    z-index: 0;
  }
}
</style>
