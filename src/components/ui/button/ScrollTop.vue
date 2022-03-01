<script setup lang="ts">

const { height } = useWindowSize();
const { y: scrolled, isScrolling } = useScroll(import.meta.env ? window : null);
const show = computed(() => scrolled.value > height.value);

const handler = () => !isScrolling.value && window.scrollTo({ top: 0 })
</script>

<template>
    <Transition name="scale">
        <div v-if="show" class="!fixed bottom-3 right-3 z-999">
            <JButton @click="handler" icon primary>
                <MdiArrowUp class="text-2xl" />
            </JButton>
        </div>
    </Transition>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
    @apply transform transition-transform duration-200;
}

.scale-enter-from,
.scale-leave-to {
    @apply !scale-0;
}

.scale-leave-from,
.scale-enter-to {
    @apply !scale-100;
}
</style>