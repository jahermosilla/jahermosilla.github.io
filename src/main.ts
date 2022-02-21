import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import { MotionPlugin } from "@vueuse/motion";
import type { RouterScrollBehavior } from 'vue-router';

import App from './App.vue';
import generatedRoutes from 'virtual:generated-pages';
import 'isomorphic-fetch';

import 'virtual:windi.css';

const routes = setupLayouts(generatedRoutes);
const scrollBehavior: RouterScrollBehavior = (to) => {
    return to.hash ? ({ el: to.hash }) : ({ top: 0 })
};

// const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    async ({ app, router }) => {
        app.use(MotionPlugin);
    },
);