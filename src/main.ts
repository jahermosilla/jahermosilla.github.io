import { ViteSSG } from 'vite-ssg';
import type { RouterScrollBehavior } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import { MotionPlugin } from "@vueuse/motion";

import App from './App.vue';
import generatedRoutes from 'virtual:generated-pages';

import 'virtual:windi.css';

const routes = setupLayouts(generatedRoutes);
const scrollBehavior: RouterScrollBehavior = (to) => {
    console.log(to, to.hash);
    return to.hash ? ({ el: to.hash }) : ({ top: 0 })
};

export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    (ctx) => {
        ctx.app.use(MotionPlugin);
    },
);
