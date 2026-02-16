<script setup lang="ts">
import IconArrowDownFull from '@/shared/icons/IconArrowDownFull.svg';

import { IHistoryNotification } from '../model/privilegeHistoryProps';

defineProps<IHistoryNotification>();

const isFutureDate = (dateStr: string): boolean => {
  const [day, month, year] = dateStr.split('.').map(Number);
  const date = new Date(year, month - 1, day);
  const now = new Date();
  return date > now;
};
</script>

<template>
  <article
    class="bonus-notification bg-input flex cursor-pointer items-center justify-between rounded-2xl p-3 transition-colors duration-200 ease-in hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]"
  >
    <div class="flex items-center gap-2">
      <div class="bonus-notification__arrow-container bg-filling w-fit rounded-full p-2 transition-colors duration-200 ease-in">
        <IconArrowDownFull class="bonus-notification__arrow" :class="{ 'rotate-180': type === 'Списание' }" />
      </div>
      <div>
        <h4 class="bonus-notification__title text-mob-small-medium transition-colors duration-200 ease-in">
          {{ type }}
        </h4>
        <div class="mt-1 flex items-center gap-2">
          <span class="text-subsidiary-reg text-additional">{{ isFutureDate(active_date) ? 'Будет начислено ' : '' }}{{ active_date }}</span>
          <span v-if="end_date" class="bg-default text-subsidiary-reg rounded-lg px-2 py-1 text-white">до {{ end_date }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between text-right">
      <span class="text-mob-small-medium justify-end">{{ type === 'Начисление' ? '+' : '-' }} {{ amount }}</span>
      <p class="text-subsidiary-reg text-additional">{{ isFutureDate(active_date) ? 'В обработке' : status }}</p>
    </div>
  </article>
</template>

<style scoped>
.bonus-notification:hover {
  background: var(--color-white);

  .bonus-notification__arrow-container {
    background: var(--color-default);

    .bonus-notification__arrow {
      color: var(--color-white);
    }
  }

  .bonus-notification__title {
    color: var(--color-default);
  }
}
</style>
