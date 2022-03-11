<script setup lang="ts">
import { useNavigationMenuActions } from '~/components/ui/navigation/use-menu';

const items = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Blog',
  href: '/blog'
}];

const scroll = import.meta.env.SSR ? useScroll(null) : useScroll(window);
const height = computed(() => `var(${scroll.arrivedState.top ? '--header-expanded-height' : '--header-default-height'})`);
const { toggle, showBackdrop } = useNavigationMenuActions();
</script>

<template>
  <Container class="j-container">
    <Header height="var(--header-height)" :items="items">
      <template #prepend>
        <p
          class="font-bold text-2xl text-primary dark:text-primary-dark app-header-background rounded-sm p-2"
        >JHR</p>
      </template>

      <template #append>
        <ToggleDarkButton />
      </template>
    </Header>

    <ClientOnly>
      <Backdrop @click="toggle" :visible="showBackdrop" />

      <ScrollTop />
    </ClientOnly>

    <RouterView v-slot="{ Component: component, route }">
      <Component :is="component" :key="route.path" />
      <!-- <Transition name="translate-right" mode="out-in">
      </Transition>-->
    </RouterView>
  </Container>
</template>

<style scoped>
.j-container {
  margin: 0px;
  --header-default-height: 4.5rem;
  --header-expanded-height: 6rem;

  --header-height: v-bind(height);
  --content-height: calc(100vh - var(--header-height));
}

.translate-right-enter-active,
.translate-right-leave-active {
  @apply transform;
  transition-timing-function: ease-in;
  transition-duration: 0.3s;
  transform-origin: center;
}

.translate-right-enter-from,
.translate-right-leave-to {
  @apply scale-0;
}

.translate-right-leave-from,
.translate-right-enter-to {
  @apply scale-100;
}
</style>