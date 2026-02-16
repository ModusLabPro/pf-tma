import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const faqSchema = z.object({
  name: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  phone: z
    .string({
      required_error: 'Обязательное поле',
    })
    .regex(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Введите корректный номер'),
  agreement: z.boolean().refine((val) => val, {
    message: 'Обязательное поле',
    path: ['agreement'],
  }),
  type: z.string(),
});

export type faqModel = z.infer<typeof faqSchema>;

export const faqResolver = zodResolver(faqSchema);
