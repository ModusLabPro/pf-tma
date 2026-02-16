<script setup lang="ts">
import { VTooltip } from '@/shared/tooltip';

defineProps<{
  quantity: 'Много' | 'Мало' | 'Под заказ';
}>();
</script>

<template>
  <div v-if="quantity === 'Много'" class="flex items-center gap-0.5 text-[#867F7F]">
    <div class="h-2 w-2 rounded-full bg-[#0A9570]"></div>
    <div class="h-2 w-2 rounded-full bg-[#0A9570]"></div>
    <div class="h-2 w-2 rounded-full bg-[#0A9570]"></div>
    <div class="h-2 w-2 rounded-full bg-[#0A9570]"></div>
    <div class="text-subsidiary-reg md:text-mob-small-medium ml-0.5">{{ quantity }}</div>
    <div>
      <VTooltip value="В наличии на складе" />
    </div>
  </div>
  <div v-else-if="quantity === 'Мало'" class="flex items-center gap-0.5 text-[#867F7F]">
    <div class="h-2 w-2 rounded-full bg-[#f49f04]"></div>
    <div class="h-2 w-2 rounded-full bg-[#f49f04]"></div>
    <div class="h-2 w-2 rounded-full bg-[#f49f04]"></div>
    <div class="bg-filling h-2 w-2 rounded-full"></div>
    <div class="text-subsidiary-reg md:text-mob-small-medium ml-0.5">{{ quantity }}</div>
    <div>
      <VTooltip value="На складе ограниченное количество" />
    </div>
  </div>
  <div v-else class="flex items-center gap-0.5">
    <div class="text-subsidiary-reg md:text-mob-small-medium text-[#e20000]">{{ quantity }}</div>
    <div>
      <VTooltip value="Доступно под заказ. Уточните детали у менеджера" />
    </div>
  </div>
</template>

<style scoped></style>
