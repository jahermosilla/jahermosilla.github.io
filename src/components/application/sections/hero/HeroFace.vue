<template>
    <div class="j-background group">
        <div
            class="slide-right !bg-transparent"
            style="--grid-row: 2 / span 2; --grid-col: 2 / span 2;"
        >
            <FaceImage class="image-face group-hover:(stroke-transparent fill-current)" />
        </div>

        <div class="j-square j-square--right" style="--grid-row: 1 / span 3; --grid-col: 4;" />

        <div class="j-square j-square--left" style="--grid-row: 2 / span 3; --grid-col: 1;" />
    </div>
</template>


<style scoped>
.j-background {
    @apply p-4
        rounded-md
        grid
        grid-cols-4
        grid-rows-4
        gap-4
        bg-gradient-to-r
        bg-primary dark:bg-primary-dark;

    /* force antialiasing */
    will-change: transform;
    transition: color 0.2s ease-in, clip-path 0.3s cubic-bezier(1, -0.1, 0, 2);
    transition-delay: 0.1s;
    aspect-ratio: 1;

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

.j-background:hover {
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

.image-face {
    @apply dark:text-dark-700 text-light-100;
    min-width: 100%;
}

.j-background > * {
    grid-row: var(--grid-row);
    grid-column: var(--grid-col);
}

.j-square {
    @apply flex justify-center items-center
        bg-cover
        rounded-md
        app-background
        00;
}

.j-square--left,
.j-square--right {
    transition-timing-function: cubic-bezier(0, 1, 0, 1);
    @apply duration-300;
}

.j-square--left {
    @apply transform translate-y-[120%];
}

.j-background:hover .j-square--left {
    transition-delay: 0.3s;
    @apply translate-y-32;
}

.j-background:hover .j-square--right {
    transition-delay: 0.3s;
    @apply -translate-y-20;
}

.j-square--right {
    @apply transform -translate-y-[120%];
}

.j-background > * {
    @apply text-[3rem] text-gray-600 dark:text-gray-200;
}

.slide-right {
    animation: slide-right-animation 600ms;
    animation-delay: calc(60ms * var(--i));
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;

    transform: translateX(-100%) skewX(20deg);

    opacity: 0;
}

@keyframes slide-right-animation {
    to {
        transform: translateX(0px) skewX(0deg);
        opacity: 1;
    }
}
</style>
