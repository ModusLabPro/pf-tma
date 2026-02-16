import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const settingsUpdateSchema = z.object({
  id: z.number(),
  comment_notifications: z.boolean(),
  sale_notifications: z.boolean(),
  email_notifications: z.boolean(),
  sms_notifications: z.boolean(),
  messenger_notifications: z.boolean(),
  favorite_categories: z.boolean(),
  often_type: z.enum(['daily', 'weekly', 'sales_only']),
  favorite_categories_list: z.array(z.number()).optional(),
});

const changePasswordSchema = z
  .object({
    credentials: z.string().optional(),
    old_password: z
      .string({
        required_error: 'Обязательное поле',
      })
      .min(8, 'Не менее 8 символов'),

    password: z
      .string({
        required_error: 'Обязательное поле',
      })
      .min(8, 'Не менее 8 символов')
      .regex(
        /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
        'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      ),
    password_confirmation: z
      .string({
        required_error: 'Обязательное поле',
      })
      .min(8, 'Не менее 8 символов')
      .regex(
        /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
        'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      ),
  })
  .refine((data): boolean => data.password === data.password_confirmation, {
    message: 'Указанный пароль не совпадает',
    path: ['password_confirmation'],
  });

const changeEmailSchema = z.object({
  email: z.string().email('Введите правильный email'),
  password: z.string().min(6, 'Не менее 6 символов'),
});

const changePhoneSchema = z.object({
  phone: z.string(),
});

const checkCodeSchema = z.object({
  code: z.string(),
});

export const settingsResolver = zodResolver(settingsUpdateSchema);
export const changePasswordResolver = zodResolver(changePasswordSchema);
export const changeEmailResolver = zodResolver(changeEmailSchema);
export const changePhoneResolver = zodResolver(changePhoneSchema);
export const checkCodeResolver = zodResolver(checkCodeSchema);

export type settingsUpdateSchema = z.infer<typeof settingsUpdateSchema>;
export type changePasswordSchema = z.infer<typeof changePasswordSchema>;
export type changeEmailSchema = z.infer<typeof changeEmailSchema>;
export type changePhoneSchema = z.infer<typeof changePhoneSchema>;
export type checkCodeSchema = z.infer<typeof checkCodeSchema>;
