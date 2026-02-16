import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const orderModelResolverSchema = z.object({
  last_name: z.string({
    required_error: 'Обязательное поле',
  }),
  name: z.string({
    required_error: 'Обязательное поле',
  }),
  email: z
    .string({
      required_error: 'Обязательное поле',
    })
    .email('Введите корректный e-mail'),
  phone: z
    .string({
      required_error: 'Обязательное поле',
    })
    .regex(/^([0-9\s\-+()]*)$/, 'Введите корректный номер'),
});

export const orderModelResolver = zodResolver(orderModelResolverSchema);
