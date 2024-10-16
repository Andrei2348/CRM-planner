import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginTs from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'  // Добавить vue-eslint-parser

export default [
  {
    // Для файлов .js, .ts, .vue
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      parser: vueParser,  // Использовать vue-eslint-parser для .vue файлов
      parserOptions: {
        parser: '@typescript-eslint/parser', // Используем TypeScript парсер для скриптов
        sourceType: 'module',
        ecmaVersion: 2020,
      },
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      ...pluginTs.configs['recommended'].rules,
    },
  },
]
