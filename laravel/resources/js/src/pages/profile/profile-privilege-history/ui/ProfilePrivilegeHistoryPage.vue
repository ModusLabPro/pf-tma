<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';

import { ProfileLayout } from '@/app/layouts';
import BonusNotification from '@/pages/profile/profile-privilege-history/ui/BonusNotification.vue';
import EmptyBonusNotification from '@/pages/profile/profile-privilege-history/ui/EmptyBonusNotification.vue';
import { VPagination } from '@/shared/ui/pagination';
import Tab from '@/shared/ui/volt/Tab.vue';
import TabList from '@/shared/ui/volt/TabList.vue';
import TabPanel from '@/shared/ui/volt/TabPanel.vue';
import TabPanels from '@/shared/ui/volt/TabPanels.vue';
import Tabs from '@/shared/ui/volt/Tabs.vue';

import { IProfilePrivilegeHistoryPageProps } from '../model/privilegeHistoryProps';

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<IProfilePrivilegeHistoryPageProps>();

const pageContent = useTemplateRef('history-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};
const currentPage = ref<number>(1);
const perPage: number = 8;
const activeTab = ref('0');

const paginatedAllHistory = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.bonusHistory.slice(start, end);
});

const paginatedAccrualHistory = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.accrualHistory.slice(start, end);
});

const paginatedWithdrawalHistory = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.withdrawalHistory.slice(start, end);
});

const paginatedProcessingHistory = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.processingHistory.slice(start, end);
});
</script>

<template>
  <div ref="history-page" class="w-full max-md:p-6 lg:min-w-0 lg:flex-1">
    <h1 class="text-default-bold">История начисления и использования баллов</h1>
    <Tabs v-model="activeTab" value="0" class="mt-8">
      <TabList>
        <Tab value="0" class="basis-1/4"> Все</Tab>
        <Tab value="1" class="basis-1/4"> Зачисления</Tab>
        <Tab value="2" class="basis-1/4"> Списания</Tab>
        <Tab value="3" class="basis-1/4"> В обработке</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="paginatedAllHistory.length" class="flex flex-col gap-2">
              <BonusNotification
                v-for="notification in paginatedAllHistory"
                :id="notification.id"
                :key="notification.id"
                :amount="notification.amount"
                :type="notification.type"
                :status="notification.status"
                :active_date="notification.active_date"
                :end_date="notification.end_date"
              />
            </section>
            <EmptyBonusNotification v-else />
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="bonusHistory.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="paginatedAccrualHistory.length" class="flex flex-col gap-2">
              <BonusNotification
                v-for="notification in paginatedAccrualHistory"
                :id="notification.id"
                :key="notification.id"
                :amount="notification.amount"
                :type="notification.type"
                :status="notification.status"
                :active_date="notification.active_date"
                :end_date="notification.end_date"
              />
            </section>
            <EmptyBonusNotification v-else />
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="accrualHistory.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="paginatedWithdrawalHistory.length" class="flex flex-col gap-2">
              <BonusNotification
                v-for="notification in paginatedWithdrawalHistory"
                :id="notification.id"
                :key="notification.id"
                :amount="notification.amount"
                :type="notification.type"
                :status="notification.status"
                :active_date="notification.active_date"
                :end_date="notification.end_date"
              />
            </section>
            <EmptyBonusNotification v-else />
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="withdrawalHistory.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="paginatedProcessingHistory.length" class="flex flex-col gap-2">
              <BonusNotification
                v-for="notification in paginatedProcessingHistory"
                :id="notification.id"
                :key="notification.id"
                :amount="notification.amount"
                :type="notification.type"
                :status="notification.status"
                :active_date="notification.active_date"
                :end_date="notification.end_date"
              />
            </section>
            <EmptyBonusNotification v-else />
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="processingHistory.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
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

::v-deep(.danger-button [data-pc-section='label']) {
  color: #f04e27 !important;
}
</style>
