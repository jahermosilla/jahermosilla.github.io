<script setup lang="ts">
const items = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Blog',
  href: '/blog'
}];
</script>

<template>
  <Container class="j-container">
    <Header height="var(--header-height)" :items="items">
      <template #prepend>
        <p class="font-bold text-2xl">JHR</p>
      </template>

      <template #append>
        <ToggleDarkButton />
      </template>
    </Header>

    <RouterView v-slot="{ Component: component, route }">
      <Transition name="translate-right">
        <Component :is="component" :key="route.path" />
      </Transition>
    </RouterView>
    <!-- <Page></Page> -->
  </Container>
</template>

<style scoped>
.j-container {
  --header-height: 4.5rem;
  --content-height: calc(100vh - var(--header-height));
}

.translate-right-enter-active,
.translate-right-leave-active {
  @apply transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
}

.translate-right-enter-from,
.translate-right-leave-to {
  @apply -translate-x-[100%];
}

.translate-right-leave-from,
.translate-right-enter-to {
  @apply translate-x-0;
}
</style>