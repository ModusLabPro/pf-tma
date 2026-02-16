<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';

import { IAlert } from '@/entities/alerts';
import IconAdminCrown from '@/shared/icons/IconAdminCrown.svg';
import IconArrowDownFull from '@/shared/icons/IconArrowDownFull.svg';
import IconCake from '@/shared/icons/IconCake.svg';
import IconChatTextOutline from '@/shared/icons/IconChatTextOutline.svg';
import IconFireOutline from '@/shared/icons/IconFireOutline.svg';
import IconNewsletterSubscribed from '@/shared/icons/IconNewsletterSubscribed.svg';
import IconPickupBag from '@/shared/icons/IconPickupBag.svg';
import IconReviewApproved from '@/shared/icons/IconReviewApproved.svg';
import IconCart from '@/shared/icons/IconShoppingCart.svg';
import { useScreenSize } from '@/shared/media-queries';
import VoltButton from '@/shared/ui/volt/Button.vue';

const { t } = useI18n();
const { isMobile } = useScreenSize();

defineProps<IAlert>();
</script>

<template>
  <article
    class="bonus-notification border-b-default flex cursor-pointer items-center justify-between border-b py-4 transition-colors duration-200 ease-in"
  >
    <div class="items-center justify-between gap-4 max-sm:w-full sm:flex">
      <div class="flex items-center justify-between">
        <div class="bonus-notification__arrow-container bg-filling w-fit rounded-full p-2 transition-colors duration-200 ease-in">
          <IconArrowDownFull
            v-if="type === 'purchase_bonus' || type === 'referral_friend' || type === 'referral_registration'"
            class="bonus-notification__arrow text-additional h-6 w-6"
          />
          <IconCart v-else-if="type === 'cart_reminder'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconCake v-else-if="type === 'birthday_bonus'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconNewsletterSubscribed v-else-if="type === 'subscription_bonus'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconReviewApproved v-else-if="type === 'approved_review'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconChatTextOutline v-else-if="type === 'review_reply'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconAdminCrown v-else-if="type === 'manual_bonus'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconPickupBag v-else-if="type === 'self_pickup'" class="bonus-notification__arrow text-additional h-6 w-6" />
          <IconFireOutline v-else class="bonus-notification__arrow text-additional h-6 w-6" />
        </div>
        <div v-if="isMobile" class="flex items-center gap-4">
          <div class="text-subsidiary-reg text-additional flex items-center gap-1">
            <div v-if="!is_read" class="bg-default h-2 w-2 rounded-full" />
            <span>{{ created_at }}</span>
          </div>
          <slot name="deleteButton" />
        </div>
      </div>
      <div>
        <h4 class="bonus-notification__title text-mob-small-medium transition-colors duration-200 ease-in max-sm:mt-2">
          <span>{{ t(title) }}</span>
          <template v-if="bonus_message">
            <span :class="{ 'text-delete': type === 'points_expire', 'text-default': type !== 'points_expire' }">{{
              t(bonus_message, { n: bonus_count })
            }}</span>
          </template>
        </h4>
        <p class="text-subsidiary-reg text-additional">
          <i18n-t :keypath="message">
            <template #n>
              <span>{{ bonus_date }}</span>
            </template>
          </i18n-t>
        </p>
      </div>
      <div v-if="isMobile">
        <Link :href="button_link">
          <VoltButton :label="t(button_text)" variant="outlined" class="mt-2 w-full shrink-0 lg:w-[140px]" rounded size="small" />
        </Link>
      </div>
    </div>
    <div v-if="!isMobile" class="flex flex-shrink-0 justify-end gap-12">
      <Link :href="button_link">
        <VoltButton :label="t(button_text)" variant="outlined" class="shrink-0 lg:w-[140px]" rounded size="small" />
      </Link>
      <div class="flex items-center gap-4">
        <div class="text-subsidiary-reg text-additional flex items-center gap-1">
          <div v-if="!is_read" class="bg-default h-2 w-2 rounded-full" />
          <span>{{ created_at }}</span>
        </div>
        <slot name="deleteButton" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.bonus-notification:hover {
  background: var(--color-white);

  .bonus-notification__arrow-container {
    background: var(--color-default);

    .bonus-notification__arrow {
      color: var(--color-white);
    }
  }

  .bonus-notification__title {
    color: var(--color-default);
  }
}
</style>
