import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const addReviewSchema = z.object({
  item_type: z.string(),
  item_id: z.number(),
  rating: z.preprocess(
    (val) => (val === null ? undefined : val),
    z.number({ required_error: 'Поставьте рейтинг продукту' }).min(1, 'Оцените товар').max(5),
  ),
  text: z.string({ required_error: 'Обязательно поле' }).min(50, 'Минимум 50 символов'),
  images: z.array(z.instanceof(File)).max(8, 'Максимум 8 фото'),
});

export const addReviewResolver = zodResolver(addReviewSchema);

export type addReviewSchema = z.infer<typeof addReviewSchema>;
