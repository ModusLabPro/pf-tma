import { format } from 'date-fns';
import { enGB, ru } from 'date-fns/locale';
import { computed, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

export const useDateFormat = (date: Date | string | number, formatStr: string): ComputedRef<string> => {
  const { locale } = useI18n();

  return computed<string>(() => {
    switch (locale.value) {
      case 'ru': {
        return format(date, formatStr, {
          locale: ru,
        });
      }
      case 'en': {
        return format(date, formatStr, {
          locale: enGB,
        });
      }
      default: {
        return format(date, formatStr, {
          locale: ru,
        });
      }
    }
  });
};
