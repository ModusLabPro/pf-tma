<script setup lang="ts">
import { computed } from 'vue';

import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg?skipsvgo';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';

const props = defineProps<{
  perPage: number;
  totalCount: number;
}>();

const pageCount = computed<number>(() => Math.ceil(props.totalCount / props.perPage));

const currentPage = defineModel<number>({
  default: 1,
});

const increasePage = (): void => {
  if (currentPage.value < pageCount.value) {
    currentPage.value += 1;
  }
};

const decreasePage = (): void => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const middlePagesNumbers = computed<number[]>(() => {
  const pageNumbers: number[] = [];
  if (pageCount.value > 2 && pageCount.value <= 7) {
    for (let i = 3; i <= pageCount.value - 2; i++) {
      pageNumbers.push(i);
    }
  } else if (pageCount.value > 7) {
    if (currentPage.value < 5) {
      pageNumbers.push(3, 4, 5);
    } else if (currentPage.value >= 5 && currentPage.value < pageCount.value - 2) {
      const addedPages = [
        currentPage.value - 1 > 2 ? currentPage.value - 1 : 0,
        currentPage.value > 2 && currentPage.value < pageCount.value - 1 ? currentPage.value : 0,
        currentPage.value + 1 < pageCount.value - 1 ? currentPage.value + 1 : 0,
      ];
      pageNumbers.push(...addedPages.filter(Boolean));
    } else {
      pageNumbers.push(pageCount.value - 4, pageCount.value - 3, pageCount.value - 2);
    }
  }
  return pageNumbers;
});

const jumpToPrevFivePages = (): void => {
  currentPage.value = currentPage.value - 5 > 0 ? currentPage.value - 5 : 1;
};

const jumpToNextFivePages = () => {
  currentPage.value = currentPage.value + 5 <= pageCount.value ? currentPage.value + 5 : pageCount.value;
};
</script>

<template>
  <div v-if="pageCount > 1" class="flex items-center gap-3">
    <button
      :disabled="currentPage === 1"
      class="border-default text-default enabled:hover:bg-default flex items-center justify-center rounded-full border p-[7px] transition-colors duration-200 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      @click="decreasePage"
    >
      <IconCaretLeft class="h-[18px] w-[18px]" />
    </button>
    <div class="flex items-center gap-1">
      <button
        class="text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"
        :class="[currentPage === 1 ? 'bg-default text-white' : 'bg-filling text-subsidiary hover:bg-default hover:text-white']"
        @click="currentPage = 1"
      >
        1
      </button>
      <button
        v-if="pageCount > 1"
        class="text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"
        :class="[currentPage === 2 ? 'bg-default text-white' : 'bg-filling text-subsidiary hover:bg-default hover:text-white']"
        @click="currentPage = 2"
      >
        2
      </button>
      <button
        v-if="pageCount > 7 && middlePagesNumbers[0] - 2 > 1"
        class="text-subsidiary-reg bg-filling text-subsidiary hover:bg-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 hover:text-white"
        @click="jumpToPrevFivePages"
      >
        ...
      </button>
      <template v-for="n in middlePagesNumbers" :key="n">
        <button
          class="text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"
          :class="[currentPage === n ? 'bg-default text-white' : 'bg-filling text-subsidiary hover:bg-default hover:text-white']"
          @click="currentPage = n"
        >
          {{ n }}
        </button>
      </template>
      <button
        v-if="pageCount > 7 && pageCount - 1 - middlePagesNumbers[2] > 1"
        class="text-subsidiary-reg bg-filling text-subsidiary hover:bg-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 hover:text-white"
        @click="jumpToNextFivePages"
      >
        ...
      </button>
      <button
        v-if="pageCount - 1 > 2"
        class="text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"
        :class="[currentPage === pageCount - 1 ? 'bg-default text-white' : 'bg-filling text-subsidiary hover:bg-default hover:text-white']"
        @click="currentPage = pageCount - 1"
      >
        {{ pageCount - 1 }}
      </button>
      <button
        v-if="pageCount > 2"
        class="text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"
        :class="[currentPage === pageCount ? 'bg-default text-white' : 'bg-filling text-subsidiary hover:bg-default hover:text-white']"
        @click="currentPage = pageCount"
      >
        {{ pageCount }}
      </button>
    </div>
    <button
      :disabled="currentPage === pageCount"
      class="border-default text-default enabled:hover:bg-default :disabled:cursor-not-allowed flex cursor-pointer items-center justify-center rounded-full border p-[7px] transition-colors duration-200 enabled:hover:text-white disabled:opacity-50"
      @click="increasePage"
    >
      <IconCaretRight class="h-[18px] w-[18px]" />
    </button>
  </div>
</template>

<style scoped></style>
