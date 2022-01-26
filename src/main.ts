import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);
const history = createWebHashHistory();
const router = createRouter({ routes, history });

import 'virtual:windi.css';

createApp(App)
    .use(router)
    .mount('#app');