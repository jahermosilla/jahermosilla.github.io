<script setup lang="ts">
const props = withDefaults(defineProps<{ opened?: boolean }>(), { opened: false });
</script>

<template>
    <JButton icon style="aspect-ratio: 1;">
        <div :class="{ close: props.opened }" class="relative inline-block w-[24px] h-[24px]">
            <div class="hamburguer"></div>
        </div>
    </JButton>
</template>

<style scoped>
.hamburguer,
.hamburguer:after,
.hamburguer:before {
    @apply absolute w-[24px] h-[3px] bg-current rounded-sm block;
}

.hamburguer {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 0.22s;
    @apply top-[50%] -mt-[1px];
}

.hamburguer:before,
.hamburguer:after {
    @apply content-[''];
}

.hamburguer:before {
    transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    @apply -top-[8px];
}

.hamburguer:after {
    transition: bottom 0.1s ease-in 0.25s,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    @apply -bottom-[8px];
}

/**
    Close states
*/

.close .hamburguer {
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    @apply transform rotate-[225deg];
}

.close .hamburguer:after {
    transition: bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    @apply transform -rotate-90 bottom-0;
}

.close .hamburguer:before {
    transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    @apply top-0 opacity-0;
}
</style>