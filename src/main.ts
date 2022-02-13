import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

import 'virtual:windi.css';

const routes = setupLayouts(generatedRoutes);
const history = createWebHashHistory();
const scrollBehavior = () => ({ top: 0 });
const router = createRouter({ routes, history, scrollBehavior });


createApp(App)
    .use(router)
    .mount('#app');