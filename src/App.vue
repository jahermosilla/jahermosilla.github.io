<template>
  <router-view />
</template>

<style>
body {
  @apply bg-gray-100 text-gray-700
    dark:(bg-gray-800 text-gray-100);

  font-family: Poppins, system-ui !important;
}

a,
.featured-word {
  @apply relative;
}

a:after,
.featured-word:after {
  @apply content-[''] absolute -bottom-2 left-0 w-full h-1 bg-primary dark:bg-primary-dark rounded-sm transition-transform duration-100 transform scale-x-0;
}

a:hover:after,
.featured-word:hover:after {
  @apply scale-x-100;
}

a:not(.router-link-active):hover,
.featured-word {
  @apply text-primary dark:text-primary-dark;
}
</style>