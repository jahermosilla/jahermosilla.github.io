<template>
    <JSection class="relative grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-center w-auto">
            <HeroFace class="nonagon" />
        </div>

        <div
            class="min-h-auto max-w-[50ch] lg:max-w-[auto] lg:ml-16 my-10 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-end md:justify-center gap-1"
        >
            <h1 class="text-6xl font-bold">Jose Ángel Hermosilla Rodrigo</h1>

            <ol class="mt-4 text-xl font-bold bg-gradient-to-r text-primary dark:text-primary-dark">
                <li>Software crafter</li>
                <li>Geomatics Engineer (GIS & Cartography)</li>
                <li>Just another human being</li>
            </ol>

            <JButton component="a" href="#about-section" primary cta class="featured-word mt-12">
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
    mx-2 md:(ml-0 mr-4) lg:(ml-0 mr-6) xl:(ml-0 mr-12);
}
</style>