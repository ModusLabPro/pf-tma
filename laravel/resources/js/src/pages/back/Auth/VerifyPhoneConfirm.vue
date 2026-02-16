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
  code: '',
  rule: 'dont_exist_except_user',
  target: usePage().props.target,
});

const submit = () => {
  form.post(route('code.confirm'), {});
};
</script>

<template>
  <GuestLayout>
    <Head title="Verify New Phone" />

    <form @submit.prevent="submit">
      <div class="mt-4">
        <InputLabel for="code" value="Code" />

        <TextInput id="code" type="text" class="mt-1 block w-full" v-model="form.code" required autocomplete="username" />

        <InputError class="mt-2" :message="form.errors.email" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Confirm </PrimaryButton>
      </div>
    </form>
  </GuestLayout>
</template>
