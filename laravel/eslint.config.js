import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  vue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  {
    ignores: ['vendor', 'node_modules', 'public', 'resources/js/src/shared/ui/volt'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettier,
);
