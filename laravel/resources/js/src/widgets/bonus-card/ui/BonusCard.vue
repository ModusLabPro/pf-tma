<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import IconCaretRight from '@/shared/icons/IconCaretRight.svg';

defineProps<{
  cardNumber: string;
  cardLevel: string;
  cashback: string;
  cardBalance: number;
}>();
</script>

<template>
  <div class="bg-default rounded-20 p-4 text-white">
    <h4 class="text-small-medium">Бонусная карта</h4>
    <dl class="mt-6 space-y-2">
      <div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between">
        <dt class="text-full">Номер бонусной карты</dt>
        <dd>{{ cardNumber }}</dd>
      </div>

      <div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between">
        <dt class="text-full">Уровень карты</dt>
        <dd>{{ cardLevel }}</dd>
      </div>

      <div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between">
        <dt class="text-full">CASHBACK</dt>
        <dd class="text-mob-small-bold">{{ cashback }}</dd>
      </div>

      <div class="text-subsidiary-reg sm:text-mob-small-reg flex items-center justify-between">
        <dt class="text-full">Баланс бонусов</dt>
        <dd class="text-default-bold sm:text-heavy-bold">{{ cardBalance }} бонусов</dd>
      </div>
    </dl>
    <div class="text-subsidiary-medium mt-6">
      <Link class="flex items-center justify-end gap-2 text-right" href="/page/privilege-program"
        ><span>Подробней о бонусной программе</span>
        <IconCaretRight width="16px" height="16px" />
      </Link>
    </div>
  </div>
</template>
