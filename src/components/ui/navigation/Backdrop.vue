<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>();
</script>

<template>
    <Transition name="fade">
        <div
            v-bind="$attrs"
            v-if="props.visible"
            class="fixed top-0 z-10 bg-gray-600/60 inset-0 h-screen backdrop-filter backdrop-blur-md"
        />
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>