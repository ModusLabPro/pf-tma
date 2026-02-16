import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const addressSchema = z.object({
  city_id: z.number({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  postal_code: z.string().optional().nullable(),
  city: z.string().optional(),
  street: z.string().optional(),
  house: z.string().optional().nullable(),
  apartment: z.string().optional().nullable(),
  is_primary: z.boolean(),
  value_dadata: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  delivery_zone_id: z.number().nullable().optional(),
  car_pass: z.boolean().optional(),
  entrance: z.string().optional().nullable(),
  floor: z.string().optional().nullable(),
});

export const editUserProfileSchema = z.object({
  name: z.string().min(1, 'Обязательное поле'),
  second_name: z.string().optional(),
  last_name: z.string().min(1, 'Обязательное поле'),
  email: z.string().optional().nullable(),
  contact_methods: z.number().array().nullable(),
  birth_date: z.string().optional(),
  phone: z.string().optional().nullable(),
  gender: z.enum(['man', 'woman']).optional(),
  phone_additional: z
    .string()
    .regex(/^([0-9\s\-+()]*)$/, 'Введите корректный номер')
    .optional(),
  addresses: z
    .array(addressSchema)
    .optional()
    .refine(
      (val) => {
        if (!val || val.length === 0) return true;
        const primaries = val.filter((a) => a.is_primary).length;
        return primaries === 1;
      },
      { message: 'Должен быть ровно один основной адрес' },
    ),
});

export const resolver = zodResolver(editUserProfileSchema);

export type profileEditSchema = z.infer<typeof editUserProfileSchema>;
