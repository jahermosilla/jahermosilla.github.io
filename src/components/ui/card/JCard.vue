<script setup lang="ts">
interface JCardProps {
    title?: string
}

const props = defineProps<JCardProps>();

const { title } = toRefs(props);
</script>

<template>
    <article class="flex flex-col p-4">
        <h1 v-if="title">{{ title }}</h1>
        <!-- Detaul slot -->
        <slot />

        <slot name="actions" />
    </article>
</template>
