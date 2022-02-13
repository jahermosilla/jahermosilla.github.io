<script setup lang="ts">
interface JButtonProps {
    icon: boolean
}


const props = withDefaults(
    defineProps<JButtonProps>(),
    {
        icon: false
    }
);

const { icon } = toRefs(props);
</script>

<template>
    <button class="j-button" :class="{ icon }">
        <slot />
    </button>
</template>

<style>
.j-button {
    @apply flex items-center transition-colors;
}

.j-button.icon {
    @apply rounded-full
        p-2
        bg-gray-400/5 hover:bg-gray-400/20;
}
</style>