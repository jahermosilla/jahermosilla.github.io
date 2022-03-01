<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import type { Component } from 'vue';
import useResizable from '~/components/ui/misc/use-resizable';

const props = defineProps<{
    title: string,
    place: string,
    description: Component,
    duration: string[]
}>();

const container = ref(null);
const { height, opened, toggle, showArrow } = useResizable(container, 150);
const showMoreText = computed(() => opened.value ? 'Show less' : 'Show more');
</script>

<template>
    <JCard>
        <p class="text-sm uppercase">{{ props.duration[0] }} - {{ props.duration[1] }}</p>

        <h1 class="font-bold text-xl">{{ props.title }}</h1>
        <h2 class="text-lg font-bold text-primary dark:text-primary-dark">{{ props.place }}</h2>

        <Component
            ref="container"
            class="resizable mt-4 text-lg"
            :style="{ maxHeight: height }"
            :is="props.description"
        />
    </JCard>

    <JButton
        v-if="showArrow"
        @click="toggle"
        outline
        class="ml-4 min-w-30 min-h-10 justify-center"
    >{{ showMoreText }}</JButton>
</template>

<style scoped>
.resizable {
    @apply overflow-hidden transition-all duration-200 lg:max-w-[80ch];
}
</style>