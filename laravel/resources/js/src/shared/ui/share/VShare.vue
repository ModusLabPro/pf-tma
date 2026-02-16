<script setup lang="ts">
import { onMounted, shallowRef, useTemplateRef } from 'vue';

const {
  url,
  title = undefined,
  description = undefined,
} = defineProps<{
  url: string;
  title?: string;
  description?: string;
}>();

const btnRef = useTemplateRef('btnRef');
const shareInstance = shallowRef();

const click = (event: Event): void => {
  if (shareInstance.value) {
    shareInstance.value._onMoreClick(event);
  }
};

defineExpose({
  click,
});

onMounted(() => {
  shareInstance.value = Ya.share2(btnRef.value, {
    content: {
      url,
      title,
      description,
    },
    theme: {
      limit: 0,
      moreButtonType: 'short',
      services: 'whatsapp,vkontakte,telegram',
      bare: false,
    },
  });
});
</script>

<template>
  <div ref="btnRef" class="share-btn" @click.prevent></div>
</template>

<style>
.share-btn {
  .ya-share2__link_more-button-type_short {
    background: color-mix(in oklab, var(--color-text) 80%, transparent) !important;
  }

  .ya-share2__icon_more {
    background-image: url('../../icons/IconShareWhite.svg') !important;
  }
}
</style>
