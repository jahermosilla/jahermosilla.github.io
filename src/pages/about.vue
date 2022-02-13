<script setup lang="ts">
import courses from '~/assets/courses.json';

</script>

<template>
    <main>
        <section aria-label="About section">
            <h1>I'm a passionate and self-taught web developer</h1>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi laborum suscipit animi corporis pariatur temporibus, dolores similique beatae sequi? Quas odio tempore, expedita laudantium odit quibusdam in ipsa. Asperiores.</h4>

            <h1>Completed courses from CodelyTV</h1>

            <div class="course-list">
                <article v-for="course in courses" class="course-card">
                    <div class="flex gap-4">
                        <picture class="course-card__media">
                            <img :src="course.image" :alt="course.name" />
                        </picture>
                        <h1 class="course-card__title">{{ course.name }}</h1>
                    </div>

                    <!-- <div class="flex flex-wrap gap-2 mt-2">
                        <span v-for="tag in course.tags" class="course-tag">{{ tag }}</span>
                    </div>-->
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
.course-list {
    @apply grid
        grid-flow-row-dense
        grid-cols-1 
        lg:grid-cols-2
        2xl:grid-cols-3
        gap-6
        mt-4;
}
.course-card {
    @apply border-solid
        border-b-4
        rounded-t-sm
        /* border-b-primary-500/75
        dark:border-b-primary-dark-500/75 */
        bg-gray-100
        dark:bg-gray-700
        flex
        flex-col
        text-gray-700
        dark:text-gray-200
        p-4
        uppercase
        transform
        transition-transform
        hover:scale-105;
}

.course-card__title {
    @apply md:w-[70%]
        w-full
        text-lg
        font-bold
        dark:text-gray-300;
}

.course-tag {
    @apply px-6 py-2
        (text-gray-400 bg-white/40)
        dark:(bg-black/40 text-gray-400)
        rounded-full
        text-xs
        font-semibold
        inline-block;
}

.course-card__media {
    @apply rounded-sm
        w-[50%]
        opacity-75;
}

.course-card__media img {
    aspect-ratio: 16 / 9;
    @apply w-full rounded-sm object-cover;
    /* filter
        grayscale-100
        contrast-60
        mix-blend-luminosity; */
}
</style>