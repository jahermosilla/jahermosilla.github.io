<script setup lang="ts">
const props = defineProps<{ to: string, text: string }>();
</script>

<template>
    <li>
        <RouterLink :to="props.to">{{ props.text }}</RouterLink>
    </li>
</template>

<style scoped>
</style>