import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const loginByEmailFormSchema = z.object({
  email: z
    .string({
      required_error: 'Обязательное поле',
    })
    .email('Проверьте правильность введенного вами е-mail'),
  password: z
    .string({
      required_error: 'Обязательное поле',
    })
    .min(8, 'Не менее 8 символов'),
});
export const resolver = zodResolver(loginByEmailFormSchema);

export type LoginByEmailFormModel = z.infer<typeof loginByEmailFormSchema>;

const getCodeSchema = z.object({
  rule: z.string(),
  phone: z.string().regex(/^([0-9\s\-+()]*)$/, 'Введите корректный номер'),
  target: z.string(),
});

const checkCodeSchema = z.object({
  phone: z.string(),
  code: z.string(),
  target: z.string(),
  referral_code: z.string().optional(),
});

export type GetCodeModel = z.infer<typeof getCodeSchema>;
export type CheckCodeModel = z.infer<typeof checkCodeSchema>;

export const getCodeResolver = zodResolver(getCodeSchema);
export const checkCodeResolver = zodResolver(checkCodeSchema);
