import { z } from 'zod';
import { zodResolver } from '@primevue/forms/resolvers/zod';

const callMeSchema = z.object({
  name: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  phone: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  time_interval: z.string(),
  type: z.string(),
  comment: z.string().optional(),
  agreement: z.boolean().refine((val) => val, {
    message: 'Необходимо подтвердить согласие с политикой конфиденциальности',
    path: ['agreement'],
  }),
});

export type callMeModel = z.infer<typeof callMeSchema>;

export const callMeResolver = zodResolver(callMeSchema)
