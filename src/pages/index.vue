<script setup lang="ts">
import UseIntersectionObserver from '~/components/ui/misc/UseIntersectionObserver.vue';

const AboutSection = () => import('~/components/application/sections/about/AboutSection.vue');
const ExperienceSection = () => import('~/components/application/sections/experience/ExperienceSection.vue');
const SkillsSection = () => import('~/components/application/sections/skills/SkillsSection.vue');
const FooterSection = () => import('~/components/application/sections/footer/FooterSection.vue');
const StackExchangeSection = () => import('~/components/application/sections/stackexchange/StackExchangeSection.vue');
</script>

<template>
    <main>
        <Page>
            <HeroSection />
        </Page>

        <Content clipped>
            <UseIntersectionObserver id="about-section" :component="AboutSection" />
        </Content>

        <Content>
            <UseIntersectionObserver :component="ExperienceSection" />
        </Content>

        <Content clipped>
            <UseIntersectionObserver :component="StackExchangeSection" />
        </Content>

        <Content>
            <UseIntersectionObserver :component="SkillsSection" />
        </Content>

        <Content>
            <UseIntersectionObserver :component="FooterSection" />
        </Content>
    </main>
</template>