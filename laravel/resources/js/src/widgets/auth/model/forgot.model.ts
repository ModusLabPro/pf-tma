import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const forgotModelSchema = z.object({
  email:   z
    .union([z.string(), z.null()])
    .transform((val) => val ?? '')
    .pipe(z.string({ required_error: 'Введите email' }).email('Введите корректный email')),
});

export type ForgotModel = z.infer<typeof forgotModelSchema>;

export const forgotModelResolver = zodResolver(forgotModelSchema);
