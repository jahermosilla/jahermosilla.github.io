<template>
    <div class="timeline-item">
        <div class="timeline-icon shadow-sm">
            <slot name="icon" />
        </div>

        <slot></slot>
    </div>
</template>

<style scoped>
.timeline-item {
    @apply relative pl-8;
}

.timeline-icon {
    box-shadow: var(--tw-shadow-color) 0px 0px 0px 16px;

    @apply rounded-full
    h-8 w-8
    bg-primary
    shadow-gray-100 dark:shadow-gray-800
    flex items-center justify-center
    absolute top-[50%] left-0
    transform -translate-y-[50%];
}

.timeline-item:before {
    @apply content-[''] absolute left-4 top-0 h-full w-1 bg-primary dark:bg-primary-dark;
}
</style>