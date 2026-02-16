<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

import InputError from '@/pages/back/Components/InputError.vue';
import InputLabel from '@/pages/back/Components/InputLabel.vue';
import PrimaryButton from '@/pages/back/Components/PrimaryButton.vue';
import TextInput from '@/pages/back/Components/TextInput.vue';
import GuestLayout from '@/pages/back/Layouts/GuestLayout.vue';

const props = defineProps({ target: Object });

const form = useForm({
  phone: '',
  rule: 'dont_exist',
  target: props.target,
});

const submit = () => {
  form.post(route('code.send'), {});
};
</script>

<template>
  <GuestLayout>
    <Head title="Register By Phone" />

    <form @submit.prevent="submit">
      <div class="mt-4">
        <InputLabel for="phone" value="Phone" />

        <TextInput id="target" type="hidden" v-model="form.target" required autocomplete="" />

        <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required autocomplete="phone" />

        <InputError class="mt-2" :message="form.errors.phone" />
      </div>

      <div class="mt-4 flex items-center justify-end">
        <Link
          :href="route('register')"
          class="mr-5 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          Register By Email
        </Link>
        <Link
          :href="route('login')"
          class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          Already registered?
        </Link>

        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Register </PrimaryButton>
      </div>
    </form>
  </GuestLayout>
</template>
