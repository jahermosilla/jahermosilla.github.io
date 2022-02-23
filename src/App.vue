<template>
  <router-view />
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-light-50 text-dark-700
    dark:(bg-dark-600 text-light-50);

  font-family: Nunito, system-ui !important;
}

a,
.featured-word {
  @apply relative;
}

/* 
a:after,
.featured-word:after {
  @apply content-[''] absolute -bottom-2 left-0 w-full h-1
    bg-primary dark:bg-primary-dark
    rounded-sm
    transition-transform duration-100 transform scale-x-0;
}

a:hover:after,
a:focus:after,
.featured-word:hover:after,
.featured-word:focus:after {
  @apply scale-x-100;
}

a:not(.router-link-active):hover,
a:not(.router-link-active):focus,
a:not(.nav-item),
.featured-word {
  @apply text-primary dark:text-primary-dark;
} */
</style>