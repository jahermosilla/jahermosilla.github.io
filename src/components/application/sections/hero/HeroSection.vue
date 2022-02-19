<template>
    <JSection class="relative grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex items-center justify-center w-auto">
            <HeroFace class="nonagon clipped overflow-hidden" />
        </div>
        <div
            class="min-h-auto lg:ml-16 my-10 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-end md:justify-center gap-1"
        >
            <h4
                class="font-bold text-primary dark:text-primary-dark text-lg font-medium"
                aria-hidden="true"
            >Hi! My name is</h4>
            <h1 class="text-6xl font-extrabold">Jose Hermosilla Rodrigo</h1>

            <ol
                class="mt-4 text-xl font-bold bg-gradient-to-l from-primary to-secondary dark:(from-primary-dark to-secondary-dark) bg-clip-text text-transparent"
            >
                <li>Software crafter</li>
                <li>Geomatics Engineer (GIS & Cartography)</li>
                <li>Just another human being</li>
            </ol>

            <JButton component="a" href="/#/#about-section" primary cta class="featured-word mt-4">
                <div class="mr-2">Want to know more?</div>
                <MdiArrowDown class="ml-auto" />
            </JButton>
        </div>
    </JSection>
</template>


<style scoped>
.nonagon {
    width: min(100%, 700px);

    @apply mx-8 md:mx-24 lg:(ml-0 mr-24);
}

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