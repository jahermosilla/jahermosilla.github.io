<template>
    <JSection id="hero-section" class="relative grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
            class="min-h-auto text-left my-20 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-center gap-6"
        >
            <h4
                class="text-primary dark:text-primary-dark text-xl font-bold"
                aria-hidden="true"
            >Hi! My name is</h4>
            <h1 class="text-6xl font-bold">Jose Hermosilla Rodrigo</h1>

            <p
                class="text-2xl font-bold text-gray-400 dark:text-gray-500"
            >I'm a Full-Stack Developer, GIS Engineer & Cartographer</p>

            <p
                class="text-lg font-bold text-gray-300 dark:text-gray-600"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae, sapiente facilis illum dicta accusantium obcaecati eligendi voluptas nostrum assumenda.</p>
        </div>

        <div class="flex items-center justify-center">
            <Background class="clipped md:max-h-[60vh] overflow-hidden" />
        </div>
    </JSection>
</template>


<style scoped>
.clipped {
    /* force antialiasing */
    will-change: transform;
    transition: color 0.2s ease-in, clip-path 0.3s cubic-bezier(1, -0.1, 0, 2);

    transition-delay: 0.1s;

    clip-path: polygon(
        50% 0%,
        83% 12%,
        100% 43%,
        94% 78%,
        68% 100%,
        32% 100%,
        6% 78%,
        0% 43%,
        17% 12%
    );
}

.clipped:hover {
    transition-delay: 0s;

    clip-path: polygon(
        50% 0%,
        100% 0,
        100% 43%,
        100% 100%,
        68% 100%,
        32% 100%,
        0 100%,
        0% 43%,
        0 0
    );
}
</style>