<script setup lang="ts">
const props = defineProps<{ title?: string }>();
</script>

<template>
    <section>
        <h1
            v-if="!!props.title"
            class="text-2xl font-bold uppercase mb-6 text-primary dark:text-primary-dark"
        >{{ props.title }}</h1>

        <slot />
    </section>
</template>