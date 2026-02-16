<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';

import InputError from '@/pages/back/Components/InputError.vue';
import InputLabel from '@/pages/back/Components/InputLabel.vue';
import PrimaryButton from '@/pages/back/Components/PrimaryButton.vue';
import TextInput from '@/pages/back/Components/TextInput.vue';
import GuestLayout from '@/pages/back/Layouts/GuestLayout.vue';

defineProps({
  mustVerifyEmail: {
    type: Boolean,
  },
  status: {
    type: String,
  },
});

const user = usePage().props.auth.user;

const form = useForm({
  phone: user.phone,
  rule: 'dont_exist_except_user',
  target: usePage().props.target,
});

const submit = () => {
  form.post(route('code.send'), {});
};
</script>

<template>
  <GuestLayout>
    <Head title="Verify New Phone" />

    <form @submit.prevent="submit">
      <div class="mt-4">
        <InputLabel for="phone" value="Phone" />

        <TextInput id="target" type="hidden" v-model="form.target" required autocomplete="" />

        <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required autocomplete="phone" />

        <InputError class="mt-2" :message="form.errors.phone" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Send Code </PrimaryButton>
      </div>
    </form>
  </GuestLayout>
</template>
