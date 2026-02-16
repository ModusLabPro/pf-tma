<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import IconCheckCirkleGreen from '@/shared/icons/IconCheckCircleGreen.svg';
import IconFire from '@/shared/icons/IconFire.svg';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import InputText from '@/shared/ui/volt/InputText.vue';
import ToggleSwitch from '@/shared/ui/volt/ToggleSwitch.vue';

const { t } = useI18n();

defineProps<{
  bonusSpentLimit?: number;
}>()

const emit = defineEmits<{
  'promocode-applied': [promocode: string];
  'bonuses-toggled': [useExpiring: boolean];
}>();
// Промокод
const pageRoute = route();

const promocodeForm = useForm<{
  promocode: string | undefined;
}>({
  promocode: pageRoute.queryParams.promocode as string | undefined,
});

if (pageRoute.queryParams.promocode) {
  emit('promocode-applied', pageRoute.queryParams.promocode as string);
}

const applyPromocode = (): void => {
  promocodeForm.post(
    route('order.promo.check', {
      promo: promocodeForm.promocode,
    }),
    {
      onSuccess() {
        emit('promocode-applied', promocodeForm.promocode!);
      },
      preserveState: true,
    },
  );
};

const useExpiringBonuses = ref<boolean>(false);

watch(useExpiringBonuses, (newValue) => {
  emit('bonuses-toggled', newValue);
});
</script>

<template>
  <section class="rounded-20 bg-light-gray p-4">
    <header class="mb-4 sm:mb-6">
      <h4 class="text-small-medium sm:text-default-medium mb-2">Промокод</h4>
    </header>
    <Form @submit="applyPromocode">
      <VFormItem :error="$page.props.errors.promocode">
        <div class="flex gap-2">
          <InputText
            v-model="promocodeForm.promocode"
            name="promocode"
            placeholder="Промокод"
            :invalid="!!$page.props.errors.promocode"
            class="min-w-0 grow shadow-none"
            :class="[
              ($page.props.flash.success === 'Промокод применён' || pageRoute.queryParams.promocode) && !!promocodeForm.promocode
                ? 'border-text bg-transparent!'
                : 'border-white bg-white',
            ]"
            :readonly="($page.props.flash.success === 'Промокод применён' || !!pageRoute.queryParams.promocode) && !!promocodeForm.promocode"
          />
          <VButton
            v-if="$page.props.flash.success !== 'Промокод применён' && !pageRoute.queryParams.promocode"
            variant="outline"
            label="Применить"
            class="w-full max-w-[160px] shrink-0"
          />
          <div v-else class="bg-filling text-mob-small-reg flex items-center gap-2 rounded-[50px] px-6 py-[14px]">
            <IconCheckCirkleGreen />
            Применен
          </div>
        </div>
      </VFormItem>
    </Form>

    <slot name="usePointsExpire">
      <div v-if="bonusSpentLimit && !!$page.props.auth?.user" class="mt-6 flex items-center gap-2">
        <IconFire class="text-delete h-6 w-6" />
        <div>
          <p class="text-mob-small-medium">
            {{ t('checkout.takePoints') }}
            <span class="text-delete">{{ t('checkout.takePointsValue', bonusSpentLimit) }}</span>
          </p>
          <p class="text-subsidiary-reg text-additional">Баллы действуют до {{ $page.props.expireDate }}</p>
        </div>
        <ToggleSwitch v-model="useExpiringBonuses" name="use_expiring_bonuses" class="shrink-0" />
      </div>
    </slot>
  </section>
</template>

<style scoped></style>
