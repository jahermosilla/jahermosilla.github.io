
<script setup lang="ts">
import courses from '~/assets/courses.json';
</script>

<template>
    <ShowMoreList :list="courses" :initial-count="6" :step-size="6" class="courses-list">
        <template #item="{ item: course }: any">
            <CourseCard class="course-card" v-bind="course" />
        </template>
    </ShowMoreList>
</template>

<style scoped>
.courses-list {
    @apply w-full
        grid gap-2
        grid-cols-[repeat(auto-fill,minmax(300px,1fr))];
}

.course-card {
    @apply h-full
        border-primary/40 dark:border-primary-dark/40 border-2 rounded-sm;
}
</style>