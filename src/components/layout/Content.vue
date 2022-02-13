<template>
    <div class="j-content clipped">
        <slot />
    </div>
</template>

<style scoped>
.j-content {
    @apply min-w-full page-padding min-h-screen py-32;
}

.clipped {
    clip-path: polygon(0 8%, 100% 0%, 100% 92%, 0% 100%);
}
</style>