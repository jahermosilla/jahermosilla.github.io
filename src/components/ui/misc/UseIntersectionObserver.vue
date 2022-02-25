<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{ component: () => Promise<Component> }>();

let resolve: CallableFunction | null = null;
const waitForIntersection = () => new Promise((r) => (resolve = r));

/**
 * The target element where the async component
 * will be placed
 */
const target = ref(null);

/**
 * The margin of pixels to the target element
 * Load before the component reachesthe screen
 */
const rootMargin = '50px';

const callback: IntersectionObserverCallback = ([{ isIntersecting }]) => isIntersecting && resolve!();

const { stop } = useIntersectionObserver(target, callback, { rootMargin });
const loaded = ref(false);

onBeforeUnmount(stop);

const AsyncComponent = defineAsyncComponent(() =>
    // If we are in SSR context
    // just load a noop component

    // Elsewhere, wait for intersection
    // and load the component
    import.meta.env.SSR
        ? Promise
            .resolve({ render: () => null } as Component)
        : waitForIntersection()
            .then(stop)
            .then(() => loaded.value = true)
            .then(props.component)
);

</script>

<template>
    <div ref="target" :class="{ 'min-h-screen': !loaded }"></div>
    <Suspense>
        <AsyncComponent />

        <!-- TODO: Loading component -->
    </Suspense>
</template>
