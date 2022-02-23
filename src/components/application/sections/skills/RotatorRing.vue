<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import type { Component } from 'vue';

const props = withDefaults(defineProps<{
    items: Component[],
    small?: boolean,
    delay?: number
}>(), {
    small: false,
    delay: 0
});

const classes = computed(() => props.small ? 'w-[75%] lg:(h-[75%] w-auto)' : 'w-full lg:(h-full w-auto)');
const length = computed(() => props.items.length);
const elements = ref([] as Component[]);
const setElement = (el: Component | null) => { if (el) elements.value.push(el) }

const setMotion = (el: any, index: number) => {
    const { variant } = useMotion(el, {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: '100',
                delay: index * 200 + props.delay,
                duration: 200,
                onComplete() {
                    variant.value = 'levitate'
                }
            }
        },
        levitate: {
            opacity: 0,
            transition: {
                type: 'spring',
                duration: 2000,
                async onComplete() {
                    variant.value = 'enter';
                }
            },
        }
    });
}

onMounted(() => {
    elements.value.forEach(setMotion);
});

const calculatePosition = (index: number) => {
    const degrees = (index * (360 / length.value) - 90) * Math.PI / 180;

    return {
        left: `calc(50% + 50% * ${Math.cos(degrees)})`,
        top: `calc(50% + 50% * ${Math.sin(degrees)})`,
    }
}
</script>

<template>
    <div
        class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
        :class="classes"
        style="aspect-ratio: 1;"
    >
        <div class="rotate relative w-full h-full">
            <template v-for="(component, index) in props.items">
                <Component
                    :is="component"
                    class="element"
                    :style="{ ...calculatePosition(index) }"
                    :ref="setElement"
                />
            </template>
        </div>
    </div>
</template>

<style scoped>
svg {
    @apply opacity-50 text-4xl;
}

.rotate {
    animation: rotate-animation 20s linear infinite forwards;
}

.element {
    transform: translate(-50%, -50%) rotate(0deg);
    animation: rotate-element 20s linear infinite reverse;
    @apply absolute;
}

@keyframes rotate-animation {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotate-element {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>