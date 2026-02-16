<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue';
import { ParsedQs } from 'ziggy-js';

import { ProfileLayout } from '@/app/layouts';
import { IAlert, TPromoAlert } from '@/entities/alerts';
import { DeleteAlert } from '@/features/Alerts/delete-alert';
import VAlert from '@/pages/profile/profile-notifications/ui/VAlert.vue';
import VPromoAlert from '@/pages/profile/profile-notifications/ui/VPromoAlert.vue';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconXCircle from '@/shared/icons/IconXCircleWhite.svg';
import { useScreenSize } from '@/shared/media-queries';
import { ICatalogCategory } from '@/shared/ui/catalog-menu/model/catalogMenuProps';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import Tab from '@/shared/ui/volt/Tab.vue';
import TabList from '@/shared/ui/volt/TabList.vue';
import TabPanel from '@/shared/ui/volt/TabPanel.vue';
import TabPanels from '@/shared/ui/volt/TabPanels.vue';
import Tabs from '@/shared/ui/volt/Tabs.vue';

defineOptions({
  layout: ProfileLayout,
});

function normalizeCategoryIds(param: string | string[] | undefined | ParsedQs | ParsedQs[]): number[] {
  if (Array.isArray(param)) return param.map((id) => Number(id));
  if (param) return [Number(param)];
  return [];
}

const props = defineProps<{
  alerts: IAlert[];
  notifications: TPromoAlert[];
  categories: ICatalogCategory[];
  notificationsCount: number;
}>();

const pageContent = useTemplateRef('notifications-page');

const alertCategoriesContainer = useTemplateRef<InstanceType<typeof Popover>>('alert-categories-popover');
const isAlertPopoverOpen = ref<boolean>(false);

const toggleCategoriesSelect = (e: Event): void => {
  alertCategoriesContainer.value?.toggle(e);
};

const form = useForm<{ category_ids: Array<number> }>({
  category_ids: normalizeCategoryIds(route().queryParams?.category_ids) ?? [],
});

const removeCategory = (id: number): void => {
  form.category_ids = form?.category_ids?.filter((catId) => catId !== id);
  filterByCategory();
};

const filterByCategory = (): void => {
  form.get(route('user.profile.notifications'), {
    preserveScroll: true,
    preserveState: true,
    replace: true,
    only: ['notifications'],
    onFinish: () => {
      notifyCurrentPage.value = 1;
    },
  });
};

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const paginatedAlerts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.alerts.slice(start, end);
});

const currentPage = ref<number>(1);
const perPage: number = 8;

const notifyCurrentPage = ref<number>(1);
const notifyPerPage: number = 4;

const paginatedNotifications = computed(() => {
  const start = (notifyCurrentPage.value - 1) * notifyPerPage;
  const end = start + notifyPerPage;
  return props.notifications.slice(start, end);
});

const markAsRead = (): void => {
  if (activeTab.value === '1') {
    const ids = paginatedAlerts.value.filter((a) => !a.is_read).map((a) => a.id);
    if (!ids.length) return;

    router.post(
      route('alert.mark-as-read'),
      {
        ids,
        type: 'alert',
      },
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ['alerts'],
      },
    );
  }

  if (activeTab.value === '0') {
    const ids = paginatedNotifications.value.filter((n) => !n.is_read).map((n) => n.id);
    if (!ids.length) return;

    router.post(
      route('alert.mark-as-read'),
      {
        ids,
        type: 'notify',
      },
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ['notifications'],
      },
    );
  }
};

onMounted(() => {
  setTimeout(() => {
    markAsRead();
  }, 2000);
});

const { isMobile } = useScreenSize();

const activeTab = ref('0');

watch([currentPage, notifyCurrentPage, activeTab, form.category_ids], () => {
  setTimeout(() => {
    markAsRead();
  }, 2000);
});
</script>

<template>
  <div ref="notifications-page" class="w-full max-md:p-6 lg:min-w-0 lg:flex-1">
    <div class="flex items-center justify-between">
      <h1 class="text-default-bold">Уведомления</h1>
      <div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4">
        <Link :href="route('user.profile.settings')" class="flex items-center gap-2">
          <span>Настроить <span v-if="!isMobile">уведомления</span></span>
          <IconCaretRight :width="'16px'" :height="'16px'" />
        </Link>
      </div>
    </div>
    <Tabs v-model:value="activeTab" class="mt-8" :scrollable="false">
      <TabList>
        <Tab value="0" class="md:basis-1/2">Новинки и промоакции</Tab>
        <Tab value="1" class="md:basis-1/2">Оповещения</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="!notificationsCount" class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
              <div class="flex flex-col items-center gap-6 md:flex-row lg:gap-15">
                <VPicture src="/images/test-images/Bell.png" alt="bell" class="xl:scale-120" :height="isMobile ? '100px' : '170px'" />
                <div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]">
                  <p class="text-default-medium md:text-heavy-medium max-md:text-center">У вас пока что нет уведомлений</p>
                </div>
              </div>
            </section>
            <section v-else>
              <div class="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
                <p class="text-small-medium">Уведомления о новых поступлениях и скидках</p>
                <div>
                  <button
                    class="bg-input rounded-20 text-additional flex w-full cursor-pointer items-center justify-between border border-transparent px-4 py-3 transition-all duration-200 ease-in lg:w-[370px]"
                    :class="{ '!border-text !text-text bg-transparent': isAlertPopoverOpen }"
                    type="button"
                    @click="toggleCategoriesSelect"
                  >
                    <span class="transition-colors duration-200 ease-in">Выберите категории</span>
                    <IconArrowDown class="text-default transition-all duration-200 ease-in" :class="{ 'rotate-180': isAlertPopoverOpen }" />
                  </button>
                  <Popover ref="alert-categories-popover" @show="isAlertPopoverOpen = true" @hide="isAlertPopoverOpen = false">
                    <div class="text-small-regular flex w-[340px] flex-col">
                      <VScrollPanel style="height: 210px">
                        <div
                          v-for="category in categories"
                          :key="category.id"
                          class="hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                        >
                          <Checkbox
                            v-model="form.category_ids"
                            :input-id="String(category.id)"
                            :name="String(category.id)"
                            :value="category.id"
                            @change="filterByCategory"
                          />
                          <label class="cursor-pointer pl-3" :for="String(category.id)">{{ category.name }}</label>
                        </div>
                      </VScrollPanel>
                    </div>
                  </Popover>
                </div>
              </div>
              <template v-if="form.category_ids.length > 0">
                <div class="flex flex-wrap items-center gap-2">
                  <div
                    v-for="categoryId in form.category_ids"
                    :key="categoryId"
                    class="rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
                  >
                    <span class="text-mob-small-reg">
                      {{ props.categories.find((cat) => cat.id === categoryId)?.name || 'Неизвестная категория' }}
                    </span>
                    <button class="cursor-pointer" @click="removeCategory(categoryId)">
                      <IconXCircle />
                    </button>
                  </div>
                </div>
              </template>

              <template v-if="notifications.length">
                <div
                  v-if="!form.category_ids.length && notifyCurrentPage === 1"
                  class="bg-text rounded-20 flex h-full flex-col overflow-hidden bg-top-right bg-no-repeat lg:flex"
                  :style="{
                    backgroundImage: !isMobile ? `url(/images/test-images/notification_banner.webp)` : '',
                    backgroundSize: '50%',
                  }"
                >
                  <div
                    class="bg-text sm:mask-right-top relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[75%] sm:mask-[url('/images/masks/for_notification_banner.svg')]"
                  >
                    <div class="relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full md:pr-20 lg:p-4 lg:py-6">
                      <div>
                        <h3 class="font-vast text-vast-mob-title-bold font-bold uppercase max-xl:max-w-[520px] xl:w-full">
                          Мясо в деталях: от фермы до тарелки
                        </h3>
                        <p class="text-mob-small-reg mt-2">Узнайте все о работе с премиальной говядиной</p>
                      </div>
                    </div>
                  </div>
                  <VPicture
                    v-if="isMobile"
                    class="-mt-30"
                    height="300px"
                    width="100%"
                    src="/images/test-images/notification_banner.webp"
                    alt="combo"
                  />
                </div>
                <VPromoAlert v-for="notification in paginatedNotifications" :key="notification.id" v-bind="notification">
                  <template #deleteButton>
                    <DeleteAlert :id="notification.id" type="notify" />
                  </template>
                </VPromoAlert>
                <VPagination
                  v-model="notifyCurrentPage"
                  :per-page="notifyPerPage"
                  :total-count="notifications.length"
                  class="mx-auto mt-8 justify-center"
                  @update:model-value="onPageUpdate"
                />
              </template>
              <div v-else class="bg-light-gray mt-16 rounded-[40px] md:mt-20">
                <div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">
                  <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-20 max-w-[120px] lg:max-w-[200px]" />
                  <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]">
                    К сожалению, по заданным параметрам ничего не найдено
                  </p>
                </div>
              </div>
            </section>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="!alerts.length" class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
              <div class="flex flex-col items-center gap-6 md:flex-row lg:gap-15">
                <VPicture src="/images/test-images/Bell.png" alt="bell" class="xl:scale-120" :height="isMobile ? '100px' : '170px'" />
                <div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]">
                  <p class="text-default-medium md:text-heavy-medium max-md:text-center">У вас пока что нет уведомлений</p>
                </div>
              </div>
            </section>
            <section v-else>
              <VAlert v-for="alert in paginatedAlerts" :key="alert.id" v-bind="alert">
                <template #deleteButton>
                  <DeleteAlert :id="alert.id" type="alert" />
                </template>
              </VAlert>
              <VPagination
                v-model="currentPage"
                :per-page="perPage"
                :total-count="alerts.length"
                class="mx-auto mt-8 justify-center"
                @update:model-value="onPageUpdate"
              />
            </section>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.p-active\:bg-default {
  &[data-p~='active'],
  &[data-p-active='true'] {
    background-color: var(--color-text);
  }
}
</style>
