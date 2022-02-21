import { defineConfig } from 'vite';
import path from 'node:path';

import vue from '@vitejs/plugin-vue';
import markdown from 'vite-plugin-md';
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

const vueOptions = {
  include: [/\.vue$/, /\.md$/],
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
const autoImportComponentsOptions: AutoImportComponentsOptions = {
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  resolvers: [
    // https://github.com/antfu/unplugin-icons
    iconsResolver({ prefix: false })
  ],
  dts: './src/components.d.ts'
}

const pagesOptions = {
  extensions: ['vue', 'md'],
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },

  plugins: [
    vue(vueOptions),
    markdown(),
    pages(pagesOptions),
    layouts(),
    autoImport(autoImportOptions),
    autoImportComponents(autoImportComponentsOptions),
    windiCSS(),
    icons({ autoInstall: true, compiler: 'vue3' })
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    // exclude: [
    //   'vue-demi',
    // ],
  },
});
