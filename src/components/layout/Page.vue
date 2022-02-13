


<template>
    <div class="j-page">
        <slot />
    </div>
</template>

<style scoped>
.j-page {
    padding-top: var(--header-height);

    @apply page-padding overflow-hidden;
}
</style>