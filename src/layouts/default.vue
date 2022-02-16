<script setup lang="ts">
import { useNavigationMenuActions } from '~/components/ui/navigation/use-menu';

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

const scroll = useScroll(window);
const height = computed(() => `var(${scroll.arrivedState.top ? '--header-expanded-height' : '--header-default-height'})`);
const { toggle, showBackdrop } = useNavigationMenuActions();
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

    <Backdrop @click="toggle" :visible="showBackdrop" />

    <RouterView v-slot="{ Component: component, route }">
      <Transition name="translate-right">
        <Component :is="component" :key="route.path" />
      </Transition>
    </RouterView>
  </Container>
</template>

<style scoped>
.j-container {
  --header-default-height: 4.5rem;
  --header-expanded-height: 6rem;

  --header-height: v-bind(height);
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