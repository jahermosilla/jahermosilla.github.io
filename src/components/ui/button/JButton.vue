<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
interface JButtonProps {
    icon?: boolean,
    primary?: boolean,
    outline?: boolean,
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

const { icon, primary, cta, outline } = toRefs(props);
</script>

<template>
    <Component
        v-bind="$attrs"
        :is="props.component"
        class="j-button"
        :class="{ icon, primary, cta, outline }"
    >
        <slot />
    </Component>
</template>

<style>
.j-button {
    text-decoration: none;

    @apply flex items-center py-2 px-4 w-[fit-content] rounded-sm
        cursor-pointer
        transition-all
        text-white dark:text-black duration-500;
}

.j-button.primary {
    @apply relative
    !text-light-100
    dark:!text-dark-700
    bg-primary hover:bg-transparent
    dark:(bg-primary-dark hover:bg-transparent);
}

.j-button.primary:before {
    @apply -z-1 absolute content-[''] inset-0;
}

.j-button.primary:before,
.j-button.primary:after {
    border-radius: inherit;

    @apply bg-gradient-to-r
        from-primary to-primary/75
        dark:(from-primary-dark to-primary-dark/75);
}

.j-button.cta {
    will-change: border-radius;
    @apply min-w-[200px] font-bold text-xl rounded-3xl;
}

.j-button.cta:hover:after,
.j-button.cta:hover:before,
.j-button.cta:hover {
    @apply rounded-sm;
}

.j-button.cta:before,
.j-button.cta:after {
    will-change: border-radius;
    @apply rounded-3xl transition-all duration-500;
}

.j-button.icon {
    @apply rounded-3xl
        h-[fit-content] w-[fit-content]
        p-2
        text-current
        bg-gray-400/5 hover:bg-gray-400/20
        dark:(bg-gray-50/5 hover:bg-gray-50/20);
}

.j-button.outline {
    @apply font-bold
        bg-transparent
        border-2 border-primary dark:border-primary-dark
        text-primary dark:text-primary-dark;
}

.j-button.outline:hover {
    @apply bg-primary/10 dark:bg-primary-dark/10;
}
</style>