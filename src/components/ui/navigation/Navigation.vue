<template>
    <nav class="navigation ml-10">
        <ul class="flex items-center space-x-8">
            <slot />
        </ul>
    </nav>
</template>

<style>
.navigation .router-link-active {
    @apply text-white dark:text-gray-900;
}

.navigation.mobile {
    min-width: min(90vw, 500px);
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateX(150%);

    @apply fixed
        top-0 bottom-0 h-screen
        app-background
        mx-0
        p-10
        right-0;
}

.navigation.mobile > ul {
    @apply flex-col
        h-full
        items-center justify-center
        space-x-0 space-y-24;
}

.navigation.mobile.opened {
    transform: translateX(0px);
}
</style>