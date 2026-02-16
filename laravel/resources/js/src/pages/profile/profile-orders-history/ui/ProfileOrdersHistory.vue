<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { format } from 'date-fns';
import { computed, ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { ProfileLayout } from '@/app/layouts';
import { IUserOrder } from '@/pages/profile/profile-orders-history/model';
import IconArrowsDownUp from '@/shared/icons/IconArrowsDownUp.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import Button from '@/shared/ui/volt/Button.vue';

defineOptions({ layout: ProfileLayout });

const props = defineProps<{ userOrders: IUserOrder[] }>();

const { t } = useI18n();

const form = useForm({
  sort_by: route().queryParams?.sort_by ?? 'created_at',
  sort_dir: route().queryParams?.sort_dir ?? 'asc',
});

const currentSortBy = computed(() => form.sort_by);
const currentSortDir = computed(() => form.sort_dir);

const sortBy = (field: 'created_at' | 'status' | 'code') => {
  if (form.sort_by === field) {
    form.sort_dir = form.sort_dir === 'desc' ? 'asc' : 'desc';
  } else {
    form.sort_by = field;
    form.sort_dir = 'asc';
  }

  form.get(route('user.profile.orders_history'), {
    preserveState: true,
    replace: true,
    preserveScroll: true,
  });
};

const pageContent = useTemplateRef('orders-history');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const currentPage = ref<number>(1);
const perPage: number = 4;

const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.userOrders.slice(start, end);
});

const { isMobile } = useScreenSize();
</script>

<template>
  <div ref="orders-history" class="w-full max-md:p-6">
    <section class="flex items-center justify-between">
      <h1 class="text-default-bold">История заказов</h1>
      <div v-if="userOrders.length > 0 && !isMobile" class="text-mob-small-medium flex items-center gap-2">
        <p class="text-mob-small-reg text-additional">Сортировка:</p>
        <button
          class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out"
          :class="{ 'text-default': currentSortBy === 'created_at' }"
          @click="sortBy('created_at')"
        >
          <span>по дате</span>
          <IconArrowsDownUp v-if="currentSortBy === 'created_at'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
        <button class="flex cursor-pointer items-center" :class="{ 'text-default': currentSortBy === 'status' }" @click="sortBy('status')">
          <span>по статусу</span>
          <IconArrowsDownUp v-if="currentSortBy === 'status'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
        <button class="flex cursor-pointer items-center" :class="{ 'text-default': currentSortBy === 'code' }" @click="sortBy('code')">
          <span>по номеру заказа</span>
          <IconArrowsDownUp v-if="currentSortBy === 'code'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
      </div>
    </section>
    <section v-if="userOrders.length > 0" class="mt-8 flex flex-col gap-2">
      <article
        v-for="order in paginatedOrders"
        :key="order.id"
        class="rounded-20 bg-light-gray flex flex-col gap-2 p-3 transition-colors duration-200 ease-in hover:bg-white hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4"
      >
        <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <div class="flex items-center gap-6">
            <h3 class="text-mob-small-bold md:text-default-bold">
              Заказ <span class="text-mob-small-medium md:text-default-medium">{{ order.id }}</span>
            </h3>
            <div v-if="!isMobile" class="text-mob-small-medium">
              <span class="text-subsidiary-medium text-additional">от: </span>
              {{ order.created_at }}
            </div>
          </div>
          <div v-if="!isMobile" class="flex items-center gap-2">
            <Link
              v-if="order.status === 'Ожидает оплаты' && order.payment_link"
              :href="order.payment_link"
              class="bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
            >
              <span>Оплатить заказ</span>
              <IconCaretRight class="h-5 w-5" />
            </Link>
            <div
              class="text-mob-small-medium rounded-lg px-3 py-2"
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
          <div v-else class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="text-mob-small-medium">
                <span class="text-subsidiary-medium text-additional">от: </span>
                {{ order.created_at }}
              </div>
              <Link
                v-if="order.status === 'Ожидает оплаты' && order.payment_link"
                :href="order.payment_link"
                class="bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
              >
                <span>Оплатить заказ</span>
                <IconCaretRight class="h-5 w-5" />
              </Link>
            </div>
            <div>
              <div
                class="text-mob-small-medium w-full rounded-lg px-3 py-2"
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
        </div>
        <div class="border-b-filling grid border-b pb-2 md:grid-cols-2">
          <dl class="border-b-filling flex flex-col gap-0.5 max-lg:border-b max-lg:pb-2 md:gap-2">
            <div class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Сумма заказа:</dt>
              <dd class="text-mob-small-medium">{{ order.order_price }} руб</dd>
            </div>
            <div v-if="!!Number(order.order_sale)" class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Скидка по промокоду:</dt>
              <dd class="text-mob-small-medium">{{ order.order_sale }} руб</dd>
            </div>
            <div v-if="order.price_final_1c" class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Итоговая сумма заказа:</dt>
              <dd class="text-mob-small-medium">{{ order.price_final_1c }} руб</dd>
            </div>
            <div class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Вес заказа:</dt>
              <dd class="text-mob-small-medium flex items-center gap-0.5">
                <span>{{ order.order_weight }} кг</span>
                <VTooltip value="Итоговый вес заказа формируется после сборки заказа на складе" />
              </dd>
            </div>
            <div class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Количество товаров:</dt>
              <dd class="text-mob-small-medium">{{ order.product_count }}</dd>
            </div>
          </dl>
          <dl class="flex flex-col gap-0.5 max-lg:pt-2 md:gap-2">
            <div class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Дата доставки:</dt>
              <dd class="text-mob-small-medium">{{ format(order.delivery_date, 'dd.MM.yyyy') }}</dd>
            </div>
            <div class="grid grid-cols-[140px_1fr] items-center">
              <dt class="text-subsidiary-medium text-additional">Стоимость доставки:</dt>
              <dd class="text-mob-small-medium flex items-center gap-0.5">
                <span>{{ order.delivery_price }} руб</span>
                <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
              </dd>
            </div>
          </dl>
        </div>
        <footer class="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <p class="text-small-medium md:text-default-medium">
            <span class="inline-flex items-center gap-1">
              {{ t('profile.delivery_total') }} {{ t('profile.delivery_description', order.product_count) }} {{ order.price_final }} руб
              <VTooltip value="Итоговая сумма заказа формируется после сборки заказа на складе" />
            </span>
          </p>
          <div class="flex items-center gap-6">
            <Button
              label="Повторить заказ"
              variant="outlined"
              rounded
              size="small"
              @click="
                router.post(
                  route('cart.retryOrder', order.id),
                  {
                    order_id: order.id,
                  },
                  {
                    preserveScroll: true,
                  },
                )
              "
            />
            <div
              class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4"
            >
              <Link :href="route('user.profile.orders.history.show', order.id)" class="flex items-center justify-center gap-2">
                <span>Подробнее</span>
                <IconCaretRight class="h-4 w-4" />
              </Link>
            </div>
          </div>
        </footer>
      </article>

      <div class="mt-8">
        <VPagination
          v-model="currentPage"
          :per-page="perPage"
          :total-count="userOrders.length"
          class="mx-auto justify-center"
          @update:model-value="onPageUpdate"
        />
      </div>
    </section>
    <div v-else class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
      <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
        <VPicture src="/images/test-images/EmptyCart.webp" alt="heart" class="max-md:-mt-6 xl:scale-120" :height="isMobile ? '100px' : '200px'" />
        <div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[705px]">
          <p class="text-default-medium md:text-heavy-medium max-md:text-center">Здесь покажем ваши заказы</p>
          <Link :href="route('catalog.index')">
            <VButton :label="'В каталог'" class="w-fit max-md:mt-6" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
