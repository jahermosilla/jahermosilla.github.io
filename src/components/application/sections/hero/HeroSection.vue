<template>
    <JSection class="relative grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex items-center justify-center w-auto">
            <HeroFace class="nonagon" />
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

    @apply overflow-hidden
    md:mx-24 lg:(ml-0 mr-12) xl:(ml-0 mr-24);
}
</style>