import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const newsletterSubscribeSchema = z.object({
  email: z
    .string({
      required_error: 'Обязательное поле',
    })
    .email('Введите правильный email'),
  agreement: z.boolean().refine((val) => val, {
    message: 'Обязательное поле',
    path: ['agreement'],
  }),
});

export type newsletterSubscribeModel = z.infer<typeof newsletterSubscribeSchema>;

export const newsletterSubscribeResolver = zodResolver(newsletterSubscribeSchema);
