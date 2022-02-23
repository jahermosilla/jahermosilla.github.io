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
    @apply min-w-full page-padding py-12 relative;
}

.clipped {
    /* @apply bg-primary/10; */

    /* clip-path: polygon(0 8%, 100% 0%, 100% 92%, 0% 100%); */
}
</style>