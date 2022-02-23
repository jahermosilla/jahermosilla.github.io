<script setup lang="ts">
const props = defineProps<{
    title: string,
    link: string,
    score: number,
}>();

const { title, link, score } = toRefs(props);
</script>
<template>
    <JCard class="bg-primary dark:bg-primary-light">
        <div class="flex items-center">
            <span
                style="aspect-ratio: 1;"
                class="mr-2 h-12 rounded-sm font-bold text-xl text-primary bg-light-400 dark:(bg-dark-400 text-primary-dark) flex justify-center items-center"
            >{{ score }}</span>

            <JButton
                component="a"
                :href="link"
                target="__blank"
                class="flex text-light-50 dark:text-dark-900 !bg-transparent w-full h-full"
            >
                <h1 v-html="title" class="flex-grow font-bold text-left font-semibold text-base"></h1>
                <MdiArrowRight class="ml-auto text-xl min-w-[32px]" />
            </JButton>
        </div>
    </JCard>
</template>