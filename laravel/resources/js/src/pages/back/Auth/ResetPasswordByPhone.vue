<script setup>
import { Head, useForm } from '@inertiajs/vue3';

import InputError from '@/pages/back/Components/InputError.vue';
import InputLabel from '@/pages/back/Components/InputLabel.vue';
import PrimaryButton from '@/pages/back/Components/PrimaryButton.vue';
import TextInput from '@/pages/back/Components/TextInput.vue';
import GuestLayout from '@/pages/back/Layouts/GuestLayout.vue';

const params = new URLSearchParams(window.location.search);
const phone = params.get('phone');
const code = params.get('code');

const form = useForm({
  phone: phone,
  code: code,
  password: '',
  password_confirmation: '',
});

const submit = () => {
  form.post(route('password.store.phone'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Reset Password By Phone" />

    <form @submit.prevent="submit">
      <div>
        <InputLabel for="phone" value="Phone" />

        <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required readonly />

        <InputError class="mt-2" :message="form.errors.phone" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />

        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />

        <TextInput
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="form.errors.password_confirmation" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Reset Password </PrimaryButton>
      </div>
    </form>
  </GuestLayout>
</template>
