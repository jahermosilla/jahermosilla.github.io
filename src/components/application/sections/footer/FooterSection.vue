<template>
    <div class="flex flex-col justify-center items-center h-screen relative">
        <h1 class="text-4xl text-center tracking-wider leading-loose">
            Crafted with
            <br />
            <MdiHeart class="text-red-400 inline mx-5" />
            <br />by
            <span class="text-primary dark:text-primary-dark">JaHermosilla</span>
        </h1>

        <ClientOnly>
            <MapBackground class="absolute top-0 left-0 -z-1 p-4 opacity-10" />
        </ClientOnly>
    </div>
</template>