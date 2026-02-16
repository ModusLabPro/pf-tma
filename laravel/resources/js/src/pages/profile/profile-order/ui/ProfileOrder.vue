<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { format } from 'date-fns';
import { useI18n } from 'vue-i18n';

import { ProfileLayout } from '@/app/layouts';
import CartProductCard from '@/entities/cart/ui/CartProductCard.vue';
import { IProfileOrderProps } from '@/pages/profile/profile-order/model/profileOrderProps';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import { phoneFormat } from '@/shared/lib/helpers/phoneFormat';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';

defineOptions({
  layout: ProfileLayout,
});

defineProps<IProfileOrderProps>();

const { t } = useI18n();
</script>

<template>
  <div class="flex w-full flex-col gap-6 max-md:p-6 md:gap-8">
    <Link :href="route('user.profile.orders_history')" class="text-subsidiary-reg flex items-center gap-2">
      <IconCaretLeft class="h-5 w-5" />
      <span>Вернуться к истории заказов</span>
    </Link>
    <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <h3 class="text-default-bold">
          Заказ <span class="text-default-medium">{{ order.id }}</span>
        </h3>
        <div class="text-mob-small-medium">
          <span class="text-subsidiary-medium text-additional">от: </span>
          {{ order.created_at }}
        </div>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row">
        <Link
          v-if="order.status === 'Ожидает оплаты' && order.payment_link"
          :href="order.payment_link"
          class="bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex w-fit cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
        >
          <span>Оплатить заказ</span>
          <IconCaretRight class="h-5 w-5" />
        </Link>
        <div
          class="text-mob-small-medium w-fit rounded-lg px-3 py-2"
          :class="{
            'bg-full': order.status === 'В обработке' || order.status === 'Новый' || order.status === 'Ожидает оплаты',
            'bg-[#CEE9F9]':
              order.status === 'Оплачен' ||
              order.status === 'В работе/в сборке' ||
              order.status === 'Подтвержден' ||
              order.status === 'Отправлен/в пути',
            'bg-push-green': order.status === 'Выполнен' || order.status === 'Готов к выдаче',
            'bg-[#ED1C241A]': order.status === 'Отменён',
          }"
        >
          <span class="text-subsidiary-medium text-additional">Статус заказа: </span>
          <span>{{ order.status }}</span>
        </div>
      </div>
    </div>
    <section>
      <h3 class="text-small-medium">Содержание заказа</h3>
      <div class="mt-4">
        <CartProductCard
          v-for="item in order.formatedItems"
          :key="item.id"
          :item="{
            ...item,
            is_available: true,
            total_price: +item.price,
            gift_items: item.gift_items.map((gift) => ({ ...gift, is_available: true, total_price: gift.price })),
          }"
        >
          <template #addToCart>
            <div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2">{{ item.quantity }} шт</div>
          </template>
        </CartProductCard>
      </div>
    </section>
    <section class="flex flex-col gap-4">
      <h3 class="text-small-medium">Данные заказа</h3>
      <div class="rounded-20 bg-light-gray flex flex-col gap-4 p-3 md:p-4">
        <div class="flex flex-col gap-2">
          <p class="text-mob-small-reg">Доставка по адресу</p>
          <dl class="flex flex-col gap-2 max-xl:flex-wrap max-md:gap-x-4 sm:flex-row sm:items-center md:justify-between">
            <div
              class="grid grid-cols-[auto_1fr] items-baseline gap-2"
              :class="!!order.order_data.delivery_zone_name ? 'xl:basis-1/3' : 'xl:basis-1/2'"
            >
              <dt class="text-subsidiary-medium text-additional">Город:</dt>
              <dd class="text-mob-small-medium">{{ order.order_data.city }}</dd>
            </div>
            <div
              class="grid grid-cols-[auto_1fr] items-baseline gap-2"
              :class="!!order.order_data.delivery_zone_name ? 'xl:basis-1/3' : 'w-full break-all'"
            >
              <dt class="text-subsidiary-medium text-additional">Улица и дом:</dt>
              <dd class="text-mob-small-medium">{{ order.order_data.address }}</dd>
            </div>
            <div v-if="!!order.order_data.delivery_zone_name" class="grid grid-cols-[auto_1fr] items-baseline gap-2 xl:basis-1/3">
              <dt class="text-subsidiary-medium text-additional">Зона доставки:</dt>
              <dd class="flex items-center gap-2">
                <span class="text-mob-small-medium text-nowrap">{{ order.order_data.delivery_zone_name }}</span>
                <span v-if="!!order.order_data.delivery_zone_description" class="text-complimentary-reg text-additional">{{
                  order.order_data.delivery_zone_description
                }}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-mob-small-reg">Получатель</p>
          <dl class="flex flex-col gap-2 max-xl:flex-wrap max-md:gap-x-4 sm:flex-row sm:items-center md:justify-between">
            <div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3">
              <dt class="text-subsidiary-medium text-additional">ФИО:</dt>
              <dd class="text-mob-small-medium">{{ order.order_data.user_fio }}</dd>
            </div>
            <div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3">
              <dt class="text-subsidiary-medium text-additional">E-mail:</dt>
              <dd class="text-mob-small-medium">{{ order.order_data.email }}</dd>
            </div>
            <div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3">
              <dt class="text-subsidiary-medium text-additional">Телефон:</dt>
              <dd class="text-mob-small-medium">{{ phoneFormat(order.order_data.phone) }}</dd>
            </div>
          </dl>
        </div>
        <div v-if="order.comment" class="flex flex-col gap-2">
          <p class="text-mob-small-reg">Комментарий</p>
          <p class="text-mob-small-reg">{{ order.comment }}</p>
        </div>
      </div>
      <div>
        <h5 class="text-mob-small-reg">Детали доставки</h5>
        <dl class="border-b-filling flex flex-col gap-2 border-b py-2">
          <div class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Срок доставки:</dt>
            <dd class="text-mob-small-medium">
              <span class="flex items-center gap-1">
                <span>{{ order.delivery_date ? format(order.delivery_date, 'dd.MM.yyyy') : '-' }}</span>
              </span>
            </dd>
          </div>
          <div class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Доставка:</dt>
            <dd class="text-mob-small-medium">{{ order.delivery_price }} руб</dd>
          </div>
        </dl>
        <dl class="border-b-filling flex flex-col gap-2 border-b py-2">
          <div class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Cумма заказа:</dt>
            <dd class="text-mob-small-medium">
              <span class="inline-flex items-center gap-1"> {{ order.order_price }} руб </span>
            </dd>
          </div>
          <div v-if="order.price_final_1c" class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Итоговая сумма заказа:</dt>
            <dd class="text-mob-small-medium">{{ order.price_final_1c }} руб</dd>
          </div>
          <div class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Вес заказа:</dt>
            <dd class="text-mob-small-medium">{{ order.order_weight }} кг</dd>
          </div>
        </dl>
        <dl
          v-if="!!Number(order.promocode_discount) || !!Number(order.second_item_discount) || !!Number(order.bonus_spent)"
          class="border-b-filling flex flex-col gap-2 border-b py-2"
        >
          <div v-if="false" class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Моя скидка:</dt>
            <dd class="text-mob-small-medium">- 0 руб</dd>
          </div>
          <div v-if="!!Number(order.second_item_discount)" class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-subsidiary py-0.5">Скидка на второй товар:</dt>
            <dd class="text-mob-small-medium">- {{ order.second_item_discount }} руб</dd>
          </div>
          <div v-if="Number(order.bonus_spent)" class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Бонусные баллы:</dt>
            <dd class="text-mob-small-medium">- {{ Number(order.bonus_spent) }} руб</dd>
          </div>
          <div v-if="!!Number(order.promocode_discount)" class="grid grid-cols-[140px_1fr] items-center">
            <dt class="text-subsidiary-medium text-additional">Промокод:</dt>
            <dd class="text-mob-small-medium">- {{ order.promocode_discount }} руб</dd>
          </div>
        </dl>
      </div>
      <p class="text-default-medium inline-flex items-center gap-1">
        {{ t('profile.delivery_total') }} {{ t('profile.delivery_description', order.items.length) }} {{ order.price_final }} руб
        <VTooltip value="Итоговая сумма заказа формируется после сборки заказа на складе" />
      </p>
    </section>
    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-8">
      <Link :href="route('user.profile.orders_history')">
        <VButton label="История заказов" variant="outline" class="w-full" />
      </Link>
      <VButton
        label="Повторить заказ"
        @click="
          router.post(
            route('cart.retryOrder', order.id),
            {
              order_id: order.id,
            },
            {
              preserveScroll: false,
            },
          )
        "
      />
    </div>
  </div>
</template>

<style scoped></style>
