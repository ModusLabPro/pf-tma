<script setup lang="ts">
import type { IOrderDetail } from '../model/order';

import { useI18n } from 'vue-i18n';

import { VTooltip } from '@/shared/tooltip';

const { t } = useI18n();

const {
  orderDetail,
  isDeliveryPriceEnabled,
  isIndividual = false,
} = defineProps<{
  orderDetail: IOrderDetail | null;
  isDeliveryPriceEnabled: boolean;
  isIndividual?: boolean;
}>();
</script>

<template>
  <section class="rounded-20 bg-light-gray p-4">
    <h4 class="text-small-medium sm:text-default-medium mb-4 sm:mb-6">Детали заказа</h4>
    <dl class="border-b-filling grid grid-cols-[minmax(0,140px)_1fr] items-center gap-2 border-b border-solid pb-2">
      <dt class="text-subsidiary-medium text-subsidiary py-0.5">Сумма заказа:</dt>
      <dd>
        <span class="inline-flex items-center gap-2">
          <span class="text-mob-small-medium">{{ orderDetail?.cart_sum }} руб</span>
          <VTooltip value="Итоговая сумма заказа формируется после сборки заказа на складе" :hide-delay="5000" />
        </span>
      </dd>
      <dt class="text-subsidiary-medium text-subsidiary py-0.5">Вес заказа:</dt>
      <dd>
        <span class="inline-flex items-center gap-2">
          <span class="text-mob-small-medium">{{ orderDetail?.weight }} кг</span>
          <VTooltip value="Итоговый вес заказа формируется после сборки заказа на складе" />
        </span>
      </dd>
    </dl>
    <dl class="border-b-filling grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2 border-b border-solid py-2">
      <dt class="text-subsidiary-medium text-subsidiary py-0.5">Доставка:</dt>
      <dd class="text-mob-small-medium">
        <template v-if="!isIndividual">
          <span class="inline-flex items-center gap-2">
            <template v-if="isDeliveryPriceEnabled">
              <template v-if="!orderDetail?.delivery_price">
                <span class="text-ready-green">Бесплатно</span>
              </template>
              <template v-else> {{ orderDetail?.delivery_price }} руб </template>
            </template>
            <span v-else class="text-additional">нет данных</span>
            <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
          </span>
        </template>
        <template v-else>
          <span class="flex items-start gap-1">
            <span class="block w-min">Рассчитывается индивидуально</span>
            <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
          </span>
        </template>
      </dd>
      <template v-if="orderDetail?.personal_discount">
        <dt class="text-subsidiary-medium text-subsidiary py-0.5">Моя скидка:</dt>
        <dd class="text-mob-small-medium">- {{ orderDetail?.personal_discount }} руб</dd>
      </template>
      <template v-if="orderDetail?.second_item_discount">
        <dt class="text-subsidiary-medium text-subsidiary py-0.5">Скидка на второй товар:</dt>
        <dd class="text-mob-small-medium">- {{ orderDetail.second_item_discount }} руб</dd>
      </template>
      <template v-if="orderDetail?.promocode_discount">
        <dt class="text-subsidiary-medium text-subsidiary py-0.5">Промокод:</dt>
        <dd class="text-mob-small-medium">- {{ orderDetail?.promocode_discount }} руб</dd>
      </template>
    </dl>
    <div class="my-6 flex flex-col gap-0.5">
      <span v-if="orderDetail" class="text-default-medium flex items-center gap-2">
        <span>Итого:</span>
        <span>{{ t('cart.goods', orderDetail.quantity!) }} на {{ orderDetail.price_final }} руб</span>
      </span>
      <span v-if="!isDeliveryPriceEnabled || isIndividual" class="text-subsidiary-medium flex items-center gap-1 text-[#867F7F]">
        Стоимость без учета доставки<VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа"
      /></span>
    </div>
    <slot name="footer" />
  </section>
</template>

<style scoped></style>
