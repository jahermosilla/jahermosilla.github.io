<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <JButton icon @click="() => toggleDark()" aria-label="Toggle Dark Button">
        <Transition name="scale" mode="out-in">
            <MdiWeatherNight v-if="isDark" class="icon text-primary-dark" />
            <MdiWhiteBalanceSunny v-else class="icon text-primary" />
        </Transition>
    </JButton>
</template>

<style scoped>
.icon {
    @apply text-xl;
}

.scale-enter-active,
.scale-leave-active {
    @apply scale-100;
    @apply transform duration-150;
}

.scale-enter-from,
.scale-leave-to {
    @apply scale-0;
}
</style>