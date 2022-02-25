
<script setup lang="ts">
import { Ref, watchPostEffect } from 'vue';
import useResizable from './use-resizable';

const props = withDefaults(defineProps<{ height: number, baseline?: boolean, headerClass?: string }>(), {
    baseline: false,
    headerClass: ''
});
const containerElement: Ref<HTMLDivElement | null> = ref(null);

const alignmentClass = computed(() => props.baseline ? 'items-baseline' : 'items-center');

const { height, showArrow, toggle, opened } = useResizable(containerElement, props.height);
</script>

<template>
    <div>
        <header class="flex px-1" :class="[alignmentClass, props.headerClass]">
            <div>
                <slot name="title"></slot>
            </div>
            <slot name="action" v-bind="{ toggle, showArrow }">
                <JButton
                    @click="toggle"
                    v-if="showArrow"
                    icon
                    aria-label="Toggle expanded content"
                    class="ml-auto w-[fit-content]"
                >
                    <MdiArrowDown
                        class="text-base transition-all transform duration-200 ease-in-out text-dark-50 dark:text-light-800 text-xl"
                        :class="{ 'rotate-180': opened }"
                    ></MdiArrowDown>
                </JButton>
            </slot>
        </header>

        <div class="j-resizable-container">
            <div ref="containerElement" class="relative">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.j-resizable-container {
    max-height: fit-content;
    height: v-bind(height);
    @apply overflow-hidden transition-all px-1;
}
</style>