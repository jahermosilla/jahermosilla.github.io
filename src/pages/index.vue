<script setup lang="ts">
import UseIntersectionObserver from '~/components/ui/misc/UseIntersectionObserver.vue';

const AboutSection = () => import('~/components/application/sections/about/AboutSection.vue');
const ExperienceSection = () => import('~/components/application/sections/experience/ExperienceSection.vue');
</script>

<template>
    <div>
        <Page>
            <HeroSection />
        </Page>

        <Content clipped>
            <UseIntersectionObserver :component="AboutSection" />
        </Content>

        <Content>
            <UseIntersectionObserver :component="ExperienceSection" />
        </Content>
    </div>
</template>