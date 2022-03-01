
<script setup lang="ts">
import courses from '~/assets/courses.json';
</script>

<template>
    <ul class="courses-list">
        <ShowMoreList :list="courses" :initial-count="6" :step-size="6" class="w-full">
            <template #item="{ item: course }: any">
                <li>
                    <JCard class="course-card">
                        <h1
                            class="mb-4 font-bold text-gray-600 dark:text-gray-200 overflow-ellipsis overflow-hidden whitespace-nowrap"
                        >{{ course.name }}</h1>

                        <div class="flex gap-2 flex-wrap mt-auto">
                            <div
                                v-for="tag in course.tags"
                                class="text-sm border-primary/60 dark:border-primary-dark/60 border-2 text-primary dark:text-primary-dark bg-primary/5 dark:bg-primary-dark/5 rounded-lg px-2 w-max"
                            >{{ tag }}</div>
                        </div>

                        <div class="flex mt-4">
                            <JButton outline cta class="!text-sm justify-center">See achievement</JButton>

                            <JButton icon class="ml-auto">
                                <MdiInformation
                                    class="text-lg text-primary dark:text-primary-dark"
                                />
                            </JButton>
                        </div>
                    </JCard>
                </li>
            </template>
        </ShowMoreList>
    </ul>
</template>

<style scoped>
.courses-list {
    @apply grid gap-2
        grid-cols-[repeat(auto-fill,minmax(300px,1fr))];
}

.course-card {
    @apply h-full
        border-primary/40 dark:border-primary-dark/40 border-2 rounded-sm;
}
</style>