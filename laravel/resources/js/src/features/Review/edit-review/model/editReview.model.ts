import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const editReviewSchema = z.object({
  rating: z.preprocess(
    (val) => (val === null ? undefined : val),
    z.number({ required_error: 'Поставьте рейтинг продукту' }).min(1, 'Оцените товар').max(5),
  ),
  text: z.string({ required_error: 'Обязательно поле' }).min(50, 'Минимум 50 символов'),
  images: z.array(z.union([z.instanceof(File), z.number()])).max(8, 'Максимум 8 фото'),
});

export const editReviewResolver = zodResolver(editReviewSchema);

export type editReviewSchema = z.infer<typeof editReviewSchema>;
