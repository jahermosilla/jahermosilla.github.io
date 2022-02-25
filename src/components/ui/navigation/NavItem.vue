<script setup lang="ts">
const props = defineProps<{ to: string, text: string }>();
</script>

<template>
    <li>
        <RouterLink :to="props.to">{{ props.text }}</RouterLink>
    </li>
</template>

<style scoped>
a {
    @apply px-4 py-2 rounded-sm transition-colors duration-300;
}

a:not(.router-link-active):hover {
    @apply text-primary dark:text-primary-dark;
}

a.router-link-active * {
    @apply text-light-200 dark:text-dark-300;
}

a.router-link-active:before {
    @apply scale-100;
}

a.router-link-active {
    @apply bg-primary dark:bg-primary-dark;
}
</style>
