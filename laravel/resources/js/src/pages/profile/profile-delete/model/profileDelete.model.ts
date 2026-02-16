import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const profileDeleteSchema = z
  .object({
    reason: z.enum(['have_any_account', 'data_security', 'lots_of_ads', 'another']),
    comment: z.string().optional(),
    password: z
      .string({ required_error: 'Обязательное поле' })
      .min(8, 'Не менее 8 символов')
      .regex(
        /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
        'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
      ),
    agreement: z.boolean().refine((val) => val, {
      message: 'Обязательное поле',
      path: ['agreement'],
    }),
  })
  .superRefine((data, ctx) => {
    if (data.reason === 'another' && (!data.comment || data.comment.trim() === '')) {
      console.log('reason found');
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['comment'],
        message: 'Укажите вашу причину удаления аккаунта',
      });
    }
  });

export const profileDeleteResolver = zodResolver(profileDeleteSchema);

export type profileDeleteSchema = z.infer<typeof profileDeleteSchema>;
