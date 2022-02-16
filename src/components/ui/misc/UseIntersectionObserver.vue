<script setup lang="ts">
import { Component } from 'vue';

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

onBeforeUnmount(stop);

const AsyncComponent = defineAsyncComponent(() =>
    // wait for intersection
    // and load the component
    Promise
        .resolve()
        .then(waitForIntersection)
        .then(stop)
        .then(props.component)
);

</script>

<template>
    <div ref="target">
        <Suspense>
            <AsyncComponent />

            <!-- TODO: Loading component -->
        </Suspense>
    </div>
</template>
