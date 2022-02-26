<script setup lang="ts">
import type { Component } from 'vue';

const props = withDefaults(defineProps<{ is?: string | Component | Object, text?: string, height?: number }>(), {
    is: 'span',
    height: 1,
});

const { height } = toRefs(props);
</script>

<template>
    <Component :is="is" class="featured">
        <slot>{{ props.text }}</slot>
    </Component>
</template>

<style scoped>
.featured {
    text-decoration: none !important;

    @apply whitespace-nowrap relative text-primary dark:text-primary-dark;
}

.featured:after {
    /* height: 2px;
    bottom: -1px; */
    height: calc(1px * v-bind(height));
    bottom: calc(-2px * v-bind(height));

    @apply absolute  content-['']
    w-full
    right-0
    rounded-full
    bg-primary dark:bg-primary-dark
    transform transition-transform scale-x-0 duration-200 origin-right;
}

.featured:hover:after {
    @apply scale-x-100 origin-left left-0 right-auto;
}
</style>