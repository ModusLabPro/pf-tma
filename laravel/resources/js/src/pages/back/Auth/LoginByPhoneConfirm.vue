<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';

import InputError from '@/pages/back/Components/InputError.vue';
import InputLabel from '@/pages/back/Components/InputLabel.vue';
import PrimaryButton from '@/pages/back/Components/PrimaryButton.vue';
import TextInput from '@/pages/back/Components/TextInput.vue';
import GuestLayout from '@/pages/back/Layouts/GuestLayout.vue';

const params = new URLSearchParams(window.location.search);
const phone = params.get('phone'); // 'value1'

const form = useForm({
  code: '',
  target: usePage().props.target,
  phone: phone,
});

const submit = () => {
  form.post(route('code.confirm'), {});
};
</script>

<template>
  <GuestLayout>
    <Head title="Login By Phone Confirm" />

    <form @submit.prevent="submit">
      <div class="mt-4">
        <InputLabel for="code" value="Code" />

        <TextInput id="code" type="text" class="mt-1 block w-full" v-model="form.code" required autocomplete="username" />

        <InputError class="mt-2" :message="form.errors.code" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <Link
          :href="route('login')"
          class="mr-5 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          Login By Email
        </Link>
        <Link
          :href="route('register')"
          class="mr-5 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          Register By Email
        </Link>

        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Login </PrimaryButton>
      </div>
    </form>
  </GuestLayout>
</template>
