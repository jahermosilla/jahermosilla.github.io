<script setup lang="ts">
interface JButtonProps {
    icon?: boolean,
    primary?: boolean,
    cta?: boolean,
    component?: 'a' | 'button'
}


const props = withDefaults(
    defineProps<JButtonProps>(),
    {
        icon: false,
        primary: false,
        cta: false,
        component: 'button'
    }
);

const { icon } = toRefs(props);
</script>

<template>
    <Component :is="props.component" class="j-button" :class="{ icon, primary, cta }">
        <slot />
    </Component>
</template>

<style>
.j-button {
    @apply flex items-center py-2 px-4 w-[fit-content] rounded-sm
        cursor-pointer
        transition-colors
        text-white dark:text-black duration-500;
}

.j-button.primary {
    @apply !text-light-100
    bg-primary hover:bg-secondary
    dark:(bg-primary-dark hover:bg-secondary-dark);
}

.j-button.cta {
    @apply min-w-[200px];
}

.j-button.icon {
    @apply rounded-full
        p-2
        text-current
        bg-gray-400/5 hover:bg-gray-400/20;
}
</style>