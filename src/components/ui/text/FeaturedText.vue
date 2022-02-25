<script setup lang="ts">
const props = withDefaults(defineProps<{ text?: string, height?: number }>(), {
    height: 1
});

const { height } = toRefs(props);
</script>

<template>
    <span class="featured">
        <slot>{{ props.text }}</slot>
    </span>
</template>

<style scoped>
.featured {
    @apply whitespace-nowrap relative text-primary dark:text-primary-dark;
}

.featured:after {
    /* height: 2px;
    bottom: -1px; */
    height: calc(1px * v-bind(height));
    bottom: calc(-1px * v-bind(height));

    @apply absolute  content-['']
    w-full
    left-0
    rounded-full
    bg-primary dark:bg-primary-dark
    transform scale-x-0 duration-200;
}

.featured:hover:after {
    @apply scale-x-100;
}
</style>