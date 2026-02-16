import { z } from 'zod';

export const courierDeliveryFormSchema = z.object({
  city_id: z.number({
    required_error: 'Обязательное поле',
  }),
  delivery_zone_id: z.number({
    required_error: 'Обязательное поле',
  }),
  value_dadata: z.string({
    required_error: 'Обязательное поле',
  }),
});

export const courierDeliveryFormSchemaWithoutZone = z.object({
  city_id: z.number({
    required_error: 'Обязательное поле',
  }),
  value_dadata: z.string({
    required_error: 'Обязательное поле',
  }),
});
