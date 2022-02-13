import { defineConfig } from 'vite';
import path from 'node:path';

import vue from '@vitejs/plugin-vue';
import pages from "vite-plugin-pages";
import layouts from 'vite-plugin-vue-layouts';
import autoImport from 'unplugin-auto-import/vite';
import autoImportComponents from 'unplugin-vue-components/vite';
import windiCSS from 'vite-plugin-windicss';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';

import { Options as AutoImportOptions } from 'unplugin-auto-import/dist/types';
import { Options as AutoImportComponentsOptions } from 'unplugin-vue-components/dist/types';

const alias = {
  '~/': `${path.resolve(__dirname, 'src')}/`,
}

// https://github.com/antfu/unplugin-auto-import
const autoImportOptions: AutoImportOptions = {
  imports: [
    'vue',
    'vue-router',
    '@vueuse/core',
  ],

  dts: "./src/auto-import.d.ts"
}

// https://github.com/antfu/unplugin-vue-components
const autoImportComponentsOptions : AutoImportComponentsOptions = {
  extensions: ['vue'],
  resolvers: [
    // https://github.com/antfu/unplugin-icons
    iconsResolver({ prefix: false })
  ],
  dts: './src/components.d.ts'
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },

  plugins: [
    vue(),
    pages(),
    layouts(),
    autoImport(autoImportOptions),
    autoImportComponents(autoImportComponentsOptions),
    windiCSS(),
    icons({ autoInstall: true })
  ]
});
