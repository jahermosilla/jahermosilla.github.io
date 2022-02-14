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
    @apply px-4 py-2 rounded-sm;
}

a:before {
    @apply absolute content-['']
        top-0 left-0 w-[100%] h-full
        rounded-sm -z-1
        transition-transform duration-300;
}

a:before {
    @apply bg-gray-500 dark:bg-gray-200
        transform rotate-8 scale-0;
}

a:hover:before {
    @apply rotate-0;
}

a.router-link-active:before {
    @apply scale-100;
}

a.router-link-active {
    @apply bg-primary dark:bg-primary-dark;
}
</style>
