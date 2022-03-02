<template>
    <div
        class="min-h-auto max-w-[50ch] lg:max-w-[auto] lg:ml-16 my-10 xl:my-0 xl:min-h-[var(--content-height)] box-border flex flex-col justify-end md:justify-center gap-1"
    >
        <h1
            class="text-big-fluid font-bold !tracking-tight leading-16 uppercase text-primary dark:text-primary-dark"
        >Jose Hermosilla Rodrigo</h1>

        <ol class="mt-4 text-xl font-bold">
            <li>Software crafter</li>
            <li>Geomatics Engineer (GIS & Cartography)</li>
            <li>Just another human being</li>
        </ol>

        <FeaturedText is="div" :height="4" class="my-6 w-max">
            <JButton component="a" href="#about-section" primary cta>
                <div class="mr-2">Want to know more?</div>
                <MdiArrowDown class="ml-auto" />
            </JButton>
        </FeaturedText>

        <div class="flex space-x-4">
            <JButton
                icon
                component="a"
                href="https://es.linkedin.com/in/jose-%C3%A1ngel-hermosilla-rodrigo-70a590147"
                class="text-2xl"
            >
                <MdiLinkedin class="text-blue-600 dark:text-primary-dark" />
            </JButton>

            <JButton icon component="a" href="https://github.com/jahermosilla" class="text-2xl">
                <MdiGithub class="text-gray-800 dark:text-gray-100" />
            </JButton>
        </div>
    </div>
</template>