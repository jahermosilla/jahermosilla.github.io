<template>
    <div class="j-background group">
        <div
            class="slide-right !bg-transparent"
            style="--grid-row: 2 / span 2; --grid-col: 2 / span 2;"
        >
            <FaceImage class="min-w-40 group-hover:(stroke-transparent fill-current)" />
        </div>

        <div class="j-square j-square--right" style="--grid-row: 1 / span 3; --grid-col: 4;" />

        <div class="j-square j-square--left" style="--grid-row: 2 / span 3; --grid-col: 1;" />

        <div
            class="slide-right flex justify-center items-center"
            style="--grid-row: 4; --grid-col: 2;"
        >
            <JButton icon class="j-background-links">
                <MdiGithub />
            </JButton>
        </div>

        <div
            class="slide-right flex justify-center items-center"
            style="--grid-row: 4; --grid-col: 3;"
        >
            <JButton icon class="j-background-links">
                <MdiLinkedin />
            </JButton>
        </div>
    </div>
</template>


<style scoped>
.j-background {
    aspect-ratio: 1;

    @apply p-4
        rounded-md
        grid
        grid-cols-4
        grid-rows-4
        gap-4
        bg-primary-dark
        dark:(bg-primary);
}

.j-background-links {
    @apply text-[1.8rem] text-gray-100 dark:text-gray-800;
}

.j-background > * {
    grid-row: var(--grid-row);
    grid-column: var(--grid-col);
}

.j-square {
    @apply flex justify-center items-center
        bg-cover
        rounded-md
        bg-gray-100 dark:bg-gray-800;
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
