
<script setup lang="ts">
import { Ref } from 'vue';

const props = defineProps<{ height: number }>();

const opened = ref(false);
const toggle = () => opened.value = !opened.value;
const contentHeight = ref(0);
const computedHeight = computed(() => `${opened.value ? contentHeight.value : props.height}px`);
const showArrow = computed(() => props.height < contentHeight.value);

const containerElement: Ref<HTMLDivElement | null> = ref(null);

const setContentHeight = async () => {
    await nextTick();
    contentHeight.value = containerElement.value?.scrollHeight || 0
};

useEventListener('resize', () => setContentHeight())
onMounted(setContentHeight);
</script>

<template>
    <div class="j-resizable-container">
        <div ref="containerElement" class="relative">
            <slot />
        </div>

        <slot name="action">
            <JButton
                @click="toggle"
                v-if="showArrow"
                icon
                class="z-1 absolute bottom-4 left-[50%] -translate-x-[50%]"
            >
                <MdiArrowDown
                    class="text-base transition-all transform duration-200 ease-in-out"
                    :class="{ 'rotate-180': opened }"
                ></MdiArrowDown>
            </JButton>
        </slot>
    </div>
</template>

<style scoped>
.j-resizable-container {
    max-height: fit-content;
    height: v-bind(computedHeight);
    @apply overflow-hidden transition-all;
}
</style>