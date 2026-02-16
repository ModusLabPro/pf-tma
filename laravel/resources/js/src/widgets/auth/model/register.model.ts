import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const registerByEmailSchema = z
  .object({
    email: z.string().email('Введите корректный email'),
    password: z
      .string()
      .min(8, 'Не менее 8 символов')
      .regex(
        /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
        'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      ),
    password_confirmation: z
      .string()
      .min(8, 'Не менее 8 символов')
      .regex(
        /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
        'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      ),
    agreement: z.boolean().refine((val) => val, {
      message: 'Обязательное поле',
      path: ['agreement'],
    }),
    referral_code: z.string().optional(),
  })
  .refine((data): boolean => data.password === data.password_confirmation, {
    message: 'Указанный пароль не совпадает',
    path: ['password_confirmation'],
  });

export type RegisterModel = z.infer<typeof registerByEmailSchema>;

const getRegisterCodeSchema = z.object({
  rule: z.string(),
  phone: z
    .string({
      required_error: 'Обязательное поле',
    })
    .regex(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Введите корректный номер'),
  agreement: z.boolean().refine((val) => val, {
    message: 'Обязательное поле',
    path: ['agreement'],
  }),
  target: z.string(),
  referral_code: z.string().optional(),
});

export type GetRegisterCodeModel = z.infer<typeof getRegisterCodeSchema>;

export const getRegisterCodeResolver = zodResolver(getRegisterCodeSchema);
