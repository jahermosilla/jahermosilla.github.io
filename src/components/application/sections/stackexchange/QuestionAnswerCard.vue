<script setup lang="ts">
const props = defineProps<{
    title: string,
    link: string,
    score: number,
}>();

const { title, link, score } = toRefs(props);
</script>

<template>
    <JCard>
        <div class="flex items-center">
            <span
                style="aspect-ratio: 1;"
                class="mr-2 h-12 rounded-sm font-bold text-xl text-secondary bg-light-100 dark:(bg-gray-800 text-secondary-dark) flex justify-center items-center"
            >{{ score }}</span>

            <a :href="link" target="__blank">{{ title }}</a>
        </div>
    </JCard>
</template>