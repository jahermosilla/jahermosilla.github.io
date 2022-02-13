<template>
    <!--:class="{ mobile: isMobile, opened: navOpened }"-->
    <nav class="navigation ml-10 z-2">
        <ul class="flex items-center space-x-8">
            <slot />
        </ul>
    </nav>
</template>

<style>
.navigation {
    @apply text-gray-800 dark:text-gray-400;
}

.navigation .router-link-active {
    @apply text-white dark:text-gray-900;
}

.navigation.mobile {
    top: 0px;
    bottom: 0px;
    height: 100vh;
    max-width: min(90vw, 450px);
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateX(150%);

    @apply fixed w-full
        bg-gray-100 dark:bg-gray-800
        mx-0
        p-10
        right-0
        shadow-black;
}

.navigation.mobile > ul {
    @apply flex-col items-start justify-center h-full space-x-0 space-y-8;
}

.navigation.mobile.opened {
    transform: translateX(0px);
}

.navigation a {
    @apply relative;
}

.navigation a:after,
.navigation a:before {
    @apply absolute top-0 w-[120%] -left-[10%] h-full rounded-sm -z-1 content-[''] transition-transform duration-300;
}

.navigation a:after {
    @apply bg-primary dark:bg-primary-dark transform rotate-0 scale-0;
}

.navigation a:before {
    @apply bg-gray-500 dark:bg-gray-200 transform rotate-8 scale-0;
}

.navigation a:hover:after,
.navigation a:hover:before {
    @apply rotate-0;
}

.navigation a.router-link-active:after,
.navigation a.router-link-active:before {
    @apply scale-100;
}
</style>