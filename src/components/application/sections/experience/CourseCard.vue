<script setup lang="ts">
const props = defineProps<{
    name: string
    link: string
    achievementLink: string
    tags: string[]
}>();
</script>

<template>
    <JCard class="course-card hover:(bg-primary/5 dark:bg-primary-dark/5)">
        <h1
            class="mb-6 text-lg font-bold text-gray-600 dark:text-gray-200 overflow-ellipsis overflow-hidden whitespace-nowrap"
        >{{ props.name }}</h1>

        <div class="flex gap-2 flex-wrap mt-auto">
            <div
                v-for="tag in props.tags"
                class="text-sm border-primary/60 dark:border-primary-dark/60 border-2 text-primary dark:text-primary-dark bg-primary/5 dark:bg-primary-dark/5 rounded-lg px-2 w-max"
            >{{ tag }}</div>
        </div>

        <div class="flex mt-4 items-end">
            <JButton
                component="a"
                :href="props.achievementLink"
                target="__blank"
                outline
                cta
                class="!text-sm justify-center"
            >See achievement</JButton>

            <JButton
                icon
                component="a"
                target="__blank"
                :href="props.link"
                aria-label="Link to the official page of the course"
                class="ml-auto"
            >
                <MdiInformation class="text-lg text-primary dark:text-primary-dark" />
            </JButton>
        </div>
    </JCard>
</template>