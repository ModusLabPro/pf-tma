<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { ref, watch } from 'vue';

import { ProfileLayout } from '@/app/layouts';
import { IUser } from '@/entities/user';
import IconWarningCircle from '@/shared/icons/IconWarningCircle.svg';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import Password from '@/shared/ui/volt/Password.vue';
import VRadioButton from '@/shared/ui/volt/RadioButton.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';

import { profileDeleteResolver, profileDeleteSchema } from '../model/profileDelete.model';

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<{
  errors: {
    password: string;
  };
  auth: {
    user: IUser;
  };
}>();

const localErrors = ref({ ...props.errors });

const profileDeleteForm = useForm<profileDeleteSchema>({
  reason: 'have_any_account',
  comment: '',
  password: '',
  agreement: false,
});

const deleteReasons = [
  {
    name: 'У меня есть другой аккаунт',
    reason: 'have_any_account',
  },
  {
    name: 'Меня беспокоит безопасность моих данных',
    reason: 'data_security',
  },
  {
    name: 'Слишком много рекламы',
    reason: 'lots_of_ads',
  },
];

const isConfirmModalOpen = ref<boolean>(false);

watch(
  () => profileDeleteForm.reason,
  () => {
    profileDeleteForm.clearErrors('comment');
  },
);

const onProfileDelete = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    isConfirmModalOpen.value = true;
  }
};

const confirmDelete = () => {
  profileDeleteForm.post(route('user.profile.delete'), {
    onFinish: () => {
      isConfirmModalOpen.value = false;
    },
  });
};
</script>

<template>
  <section class="flex w-full flex-col gap-6 max-md:p-6 md:gap-8">
    <h1 class="text-default-bold">Удаление аккаунта</h1>
    <div class="flex items-center gap-2 rounded-2xl bg-[#F04E2714] p-3">
      <IconWarningCircle class="h-8 w-8 shrink-0 md:h-12 md:w-12" />
      <div>
        <p class="text-complimentary-reg md:text-mob-small-reg">Нам очень жаль, что вы решили удалить свою учетную запись</p>
        <p class="text-complimentary-bold md:text-mob-small-bold">
          Ваша карта лояльности и весь связанный с ней контент, история заказов и личные данные будут безвозвратно удалены в течение 24 часов.
        </p>
      </div>
    </div>
    <Form
      v-slot="$form"
      :resolver="profileDeleteResolver"
      :initial-values="profileDeleteForm"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex flex-col gap-4"
      @submit="onProfileDelete"
    >
      <div>
        <p class="text-mob-small-medium">Пожалуйста, выберите причину удаления аккаунта</p>
        <p class="text-subsidiary-reg text-additional mt-0.5">Это поможет нам стать лучше</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="border-b-filling border-b pb-4">
          <div class="flex flex-col justify-between lg:flex-row">
            <div class="flex flex-col gap-2">
              <template v-for="reason in deleteReasons" :key="reason.reason">
                <div>
                  <VFormItem :error="$form.reason?.error?.message || profileDeleteForm.errors.reason">
                    <div class="flex items-center gap-2">
                      <VRadioButton
                        v-model="profileDeleteForm.reason"
                        :input-id="String(reason.reason)"
                        :name="String(reason.reason)"
                        :value="reason.reason"
                      />
                      <label :for="String(reason.reason)">{{ reason.name }}</label>
                    </div>
                  </VFormItem>
                </div>
              </template>
            </div>
            <div class="flex flex-col gap-2 max-lg:mt-2">
              <div class="flex items-center gap-2">
                <VRadioButton v-model="profileDeleteForm.reason" input-id="another" name="another" value="another" />
                <label for="another">Другое</label>
              </div>
              <VFormItem :error="$form.comment?.error?.message || profileDeleteForm.errors.comment">
                <Textarea
                  v-model="profileDeleteForm.comment"
                  name="comment"
                  placeholder="Ваша причина"
                  :invalid="!!profileDeleteForm.errors.comment || $form.comment?.error?.message"
                  class="resize-none lg:min-w-[540px]"
                />
              </VFormItem>
            </div>
          </div>
        </div>
        <div v-if="auth.user.is_have_password" class="border-b-filling mt-2 border-b pb-4">
          <VFormItem :error="$form.password?.error?.message || profileDeleteForm.errors.password || localErrors.password">
            <label for="password" class="text-mob-small-medium">В целях безопасности введите ваш пароль</label>
            <Password
              v-model="profileDeleteForm.password"
              placeholder="Ваш пароль"
              name="password"
              :feedback="false"
              toggle-mask
              fluid
              required
              class="mt-4 max-w-[540px]"
              :invalid="!!profileDeleteForm.errors.password || $form.password?.error?.message || !!localErrors.password"
              @blur="localErrors.password = ''"
            />
          </VFormItem>

          <VFormItem>
            <div class="mt-4 flex items-start gap-3">
              <Checkbox v-model="profileDeleteForm.agreement" input-id="delete-checkbox" binary size="small" name="agreement" required />
              <label for="delete-checkbox" class="text-complimentary-reg text-additional max-w-[380px]"
                >Нажимая на кнопку «Удалить аккаунт» я подтверждаю, что даю согласие на удаление данных и аннулирование карты лояльности</label
              >
            </div>
          </VFormItem>
        </div>
        <div class="mt-2">
          <p class="text-mob-small-medium max-w-[520px]">
            Как только вы нажмёте кнопку ниже, вы больше не сможете воспользоваться своим аккаунтом. При попытке входа на сайт будет создан новый
            аккаунт и карта лояльности
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-2 md:flex-row md:gap-8">
        <Link :href="route('user.profile.index')">
          <VButton variant="outline" label="Отменить" class="max-md:w-full" />
        </Link>
        <VButton label="Удалить аккаунт" variant="delete" type="submit" />
      </div>
      <VDialog v-model:visible="isConfirmModalOpen" :draggable="false" modal class="max-md:mx-6 md:w-110">
        <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Удаление аккаунта</h2>
        <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">
          Вы действительно хотите удалить аккаунт и потерять все связанные с ним данные?
        </p>
        <div class="mt-3 flex flex-col gap-2 md:mt-6">
          <VButton label="Нет, я передумал" variant="outline" class="w-full" @click="isConfirmModalOpen = false" />
          <VButton label="Да, удалить аккаунт" variant="delete" class="w-full" :disabled="profileDeleteForm.processing" @click="confirmDelete" />
        </div>
      </VDialog>
    </Form>
  </section>
</template>

<style scoped></style>
