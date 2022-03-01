<template>
    <JSection class="relative grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-center w-auto">
            <HeroFace class="nonagon" />
        </div>

        <HeroDescription />
    </JSection>
</template>


<style scoped>
.nonagon {
    width: min(100%, 700px);

    @apply overflow-hidden
    mx-2 md:(ml-0 mr-4) lg:(ml-0 mr-6) xl:(ml-0 mr-12);
}
</style>