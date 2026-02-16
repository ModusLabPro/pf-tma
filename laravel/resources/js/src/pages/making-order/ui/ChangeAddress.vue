<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { shallowRef } from 'vue';

import { IAddress } from '@/entities/address';
import { IUser } from '@/entities/user';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import { VButton } from '@/shared/ui/button';
import Dialog from '@/shared/ui/volt/Dialog.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';

const isModalOpen = shallowRef<boolean>(false);

const page = usePage<{
  auth: {
    user: IUser;
  };
}>();

const { selectedAddressId, disabled = false } = defineProps<{
  selectedAddressId: number | null;
  disabled?: boolean;
}>();

const selectedAddress = shallowRef<IAddress>();

if (selectedAddressId) {
  selectedAddress.value = page.props.auth.user.addresses.find((addr) => addr.id === selectedAddressId);
}

const emit = defineEmits<{
  (event: 'change-address', value: IAddress): void;
}>();

const onSelectAddress = (): void => {
  if (!selectedAddress.value) return;
  emit('change-address', selectedAddress.value);
  isModalOpen.value = false;
};
</script>

<template>
  <SecondaryButton size="small" rounded :disabled @click="isModalOpen = true">
    <span class="flex items-center gap-2">
      Выбрать другой адрес
      <IconCaretRight class="h-5 w-5" />
    </span>
  </SecondaryButton>
  <Dialog v-model:visible="isModalOpen" class="w-110" modal :draggable="false">
    <div class="grid gap-6">
      <header class="flex flex-col items-center gap-2">
        <h4 class="text-heavy-bold">Изменить адрес доставки</h4>
        <p class="text-mob-small-reg">Выберите адрес</p>
      </header>
      <div class="flex flex-col gap-2">
        <template v-for="addr in page.props.auth.user.addresses" :key="addr.id">
          <div class="grid grid-cols-[auto_1fr] items-center gap-3 py-2">
            <RadioButton v-model="selectedAddress" :value="addr" :input-id="`${addr.id}`" />
            <label :for="`${addr.id}`">
              <span class="text-mob-small-reg mb-0.5 block">{{ addr.final_address }}</span>
              <span v-if="addr.is_primary" class="text-complimentary-bold text-additional block">Основной адрес</span>
            </label>
          </div>
        </template>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <VButton label="Отменить" variant="outline" @click="isModalOpen = false" />
        <VButton label="Сохранить" @click="onSelectAddress" />
      </div>
    </div>
  </Dialog>
</template>

<style scoped></style>
