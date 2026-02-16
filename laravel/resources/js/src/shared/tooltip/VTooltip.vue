<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import IconTooltip from '@/shared/icons/IconTooltip.svg';
import { useScreenSize } from '@/shared/media-queries';

type Props = {
  value: string;
  class?: string;
};

const props = defineProps<Props>();
const { isDesktop } = useScreenSize();

const triggerRef = ref<HTMLElement | null>(null);

// Общий элемент тултипа
const TOOLTIP_ID = 'shared-vue-tooltip';
let tooltipEl: HTMLDivElement | null = null;
let isOpen = false;
let ignoreOutsideClick = false;

const getOrCreateTooltip = (): HTMLDivElement => {
  let el = document.getElementById(TOOLTIP_ID) as HTMLDivElement | null;

  if (!el) {
    el = document.createElement('div');
    el.id = TOOLTIP_ID;
    el.className = 'v-tooltip p-tooltip';

    const arrow = document.createElement('div');
    arrow.className = 'p-tooltip-arrow';
    el.appendChild(arrow);

    const text = document.createElement('div');
    text.className = 'p-tooltip-text';
    el.appendChild(text);

    document.body.appendChild(el);
  }

  return el;
};

const show = () => {
  console.log('[Tooltip] show() called');
  if (!props.value) return;

  // Скрываем предыдущий тултип, если он был
  hide();

  ignoreOutsideClick = true;
  setTimeout(() => (ignoreOutsideClick = false), 0);

  tooltipEl = getOrCreateTooltip();
  isOpen = true;

  // Обновляем содержимое
  const textEl = tooltipEl.querySelector('.p-tooltip-text');
  if (textEl) textEl.textContent = props.value;

  tooltipEl.className = `v-tooltip p-tooltip ${props.class ?? ''}`.trim();

  const rect = triggerRef.value!.getBoundingClientRect();
  const ARROW_SIZE = 4;
  const gutter = ARROW_SIZE + 1;

  tooltipEl.style.visibility = 'hidden';
  tooltipEl.style.display = 'block';

  requestAnimationFrame(() => {
    if (!tooltipEl || !triggerRef.value) return;

    const tRect = tooltipEl.getBoundingClientRect();
    const triggerCenterX = rect.left + rect.width / 2;

    tooltipEl.style.left = triggerCenterX - tRect.width / 2 + 'px';
    tooltipEl.style.top = rect.bottom + gutter + 'px';

    const arrow = tooltipEl.querySelector('.p-tooltip-arrow') as HTMLElement;
    if (arrow) {
      const arrowLeft = triggerCenterX - parseFloat(tooltipEl.style.left);
      arrow.style.left = `${arrowLeft}px`;
      arrow.style.transform = 'translateX(-50%)';
    }

    tooltipEl.style.visibility = 'visible';
    tooltipEl.classList.add('p-tooltip-active');
  });
};

const hide = () => {
  if (!isOpen) return;
  isOpen = false;
  tooltipEl?.classList.remove('p-tooltip-active');
};

const toggle = () => (isOpen ? hide() : show());

const onClickOutside = (e: Event) => {
  if (ignoreOutsideClick) return;
  const target = e.target as Node;
  if (tooltipEl?.contains(target) || triggerRef.value?.contains(target)) return;
  hide();
};

const onScroll = () => hide();

onMounted(() => {
  const el = triggerRef.value;
  if (!el) return;

  if (isDesktop.value) {
    // Изменённая логика для десктопа
    el.addEventListener('pointerenter', show);
    el.addEventListener('pointerleave', () => {
      // Если тултип содержит курсор, не скрываем его
      if (!tooltipEl?.matches(':hover')) {
        hide();
      }
    });

    // Добавляем обработчики на сам тултип
    const handleTooltipEnter = () => {};
    const handleTooltipLeave = () => hide();

    const tooltip = getOrCreateTooltip();
    tooltip.addEventListener('pointerenter', handleTooltipEnter);
    tooltip.addEventListener('pointerleave', handleTooltipLeave);

    // Удаляем их при размонтировании
    window.addEventListener('beforeunload', () => {
      tooltip.removeEventListener('pointerenter', handleTooltipEnter);
      tooltip.removeEventListener('pointerleave', handleTooltipLeave);
    });

    el.addEventListener('focus', show);
    el.addEventListener('blur', hide);
  } else {
    el.addEventListener('click', toggle);
    document.addEventListener('click', onClickOutside);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('touchmove', onScroll, { passive: true });
  }
});

onBeforeUnmount(() => {
  // Не удаляем tooltipEl, он общий
  hide();
  document.removeEventListener('click', onClickOutside);
  window.removeEventListener('scroll', onScroll, true);
  window.removeEventListener('touchmove', onScroll);
});
</script>

<template>
  <span v-if="isDesktop" ref="triggerRef" class="block h-fit" tabindex="0">
    <IconTooltip class="text-additional hover:text-primary h-4 w-4 transition-colors" />
  </span>

  <button v-else ref="triggerRef" type="button" class="block h-fit">
    <IconTooltip class="text-additional hover:text-primary h-4 w-4 transition-colors" />
  </button>
</template>

<style>
.v-tooltip {
  position: fixed;
  z-index: 3000;

  background: var(--color-filling);
  padding: 8px;
  border-radius: 8px;
  max-width: 244px;

  color: var(--color-text);
  font-size: var(--text-complimentary-reg);
  line-height: var(--text-complimentary-reg--line-height);
  font-weight: var(--text-complimentary-reg--font-weight);

  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;

  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.p-tooltip-active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto; /* Разрешаем взаимодействие с тултипом */
}

.p-tooltip-arrow {
  position: absolute;
  top: -4px;
  width: 0;
  height: 0;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--color-filling);
  border-top: none;
}
</style>
