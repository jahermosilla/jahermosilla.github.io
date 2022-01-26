<!-- <script setup lang="ts">
const navigationItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Blog",
    href: "/blog"
  }
]
</script> -->

<template>
  <!-- <JsHeader :items="navigationItems" /> -->

  <Container>
    <RouterView />
  </Container>
</template>