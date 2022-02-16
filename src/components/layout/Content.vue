<script setup lang="ts">
const props = withDefaults(defineProps<{ clipped?: boolean }>(), {
    clipped: false
});

const { clipped } = toRefs(props);
</script>

<template>
    <div class="j-content" :class="{ clipped }">
        <slot />
    </div>
</template>

<style scoped>
.j-content {
    @apply min-w-full page-padding py-16 min-h-screen;
}

.clipped {
    @apply py-32 bg-primary/10 dark:(bg-primary-dark/10);

    clip-path: polygon(0 8%, 100% 0%, 100% 92%, 0% 100%);
}
</style>