
<script setup lang="ts">
import courses from '~/assets/courses.json';
</script>

<template>
    <ul class="courses-list">
        <ShowMoreList :list="courses" :initial-count="6" :step-size="6" class="w-full">
            <template #item="{ item: course }: any">
                <li>
                    <CourseCard v-bind="course" />
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