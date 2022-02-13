<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <JButton icon @click="() => toggleDark()">
        <Transition name="scale" mode="out-in">
            <MdiWeatherNight v-if="isDark" class="text-primary-dark" />
            <MdiWhiteBalanceSunny v-else class="text-primary" />
        </Transition>
    </JButton>
</template>

<style scoped>
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