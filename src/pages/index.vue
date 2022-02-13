<script setup lang="ts">
import UseIntersectionObserver from '~/components/ui/misc/UseIntersectionObserver.vue';
const experiences: string[] = [];
</script>

<template>
    <div>
        <Page>
            <HeroSection />
        </Page>

        <Content class="mt-16 bg-primary/75 dark:(bg-primary-dark/75)">
            <UseIntersectionObserver component="application/sections/AboutSection.vue" />
        </Content>

        <Page class="min-h-screen"></Page>
    </div>

    <!-- <ILoveCodeSection />

    <ILoveMapsSection />

    <IHelpPeopleSection />-->

    <!-- <JSection id="about-me-section" class="min-h-screen mt-25">
        <p>
            Mi pasión por el código se remonta a 2011, durante el inicio de mis estudios universitarios, donde la programación siempre ha jugado un papel importante:
            resolver problemas de álgebra lineal o cálculo (mediante Matlab), scripting con Python para automatizar tareas, asignaturas de programción, etc.
            Tuve especial interés por las IDEs y el desarrollo de aplicaciones geoespaciales.
            Desde entonces, mi foco principal ha sido el desarollo de aplicaciones web, tanto backend como frontend, y trato día a día de aprender y mantenerme
            al tanto de las novedades entorno al mundo del software.
        </p>

        <p>En mi tiempo libre, trato de ayudar a la comunidad en Stackoverflow</p>

    </JSection>-->

    <!-- <JSection id="experience-section" class="min-h-screen">
        <JTimeline>
            <JTimelineItem v-for="experience in experiences">
                <JCard></JCard>
            </JTimelineItem>
        </JTimeline>
    </JSection>-->
</template>