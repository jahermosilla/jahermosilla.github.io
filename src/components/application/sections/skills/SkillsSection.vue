<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { Ref } from 'vue';
import VscodeIconsFileTypeHtml from '~icons/vscode-icons/file-type-html';
import VscodeIconsFileTypeCss from '~icons/vscode-icons/file-type-css';
import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
import VscodeIconsFileTypeJsOfficial from '~icons/vscode-icons/file-type-js-official';
import VscodeIconsFileTypeVue from '~icons/vscode-icons/file-type-vue';
import VscodeIconsFileTypeVitest from '~icons/vscode-icons/file-type-vitest';
import VscodeIconsFileTypeNuxt from '~icons/vscode-icons/file-type-nuxt';
import VscodeIconsFileTypeWebpack from '~icons/vscode-icons/file-type-webpack';
import VscodeIconsFileTypeVite from '~icons/vscode-icons/file-type-vite';
import VscodeIconsFileTypeCypress from '~icons/vscode-icons/file-type-cypress';
import VscodeIconsFileTypeJest from '~icons/vscode-icons/file-type-jest';
import VscodeIconsFileTypeLighthouse from '~icons/vscode-icons/file-type-lighthouse';
import VscodeIconsFileTypeMdx from '~icons/vscode-icons/file-type-mdx';
import VscodeIconsFileTypeWindi from '~icons/vscode-icons/file-type-windi';
import VscodeIconsFileTypeTailwind from '~icons/vscode-icons/file-type-tailwind';
import VscodeIconsFileTypeEslint from '~icons/vscode-icons/file-type-eslint';
import VscodeIconsFileTypePrettier from '~icons/vscode-icons/file-type-prettier';
import VscodeIconsFileTypeStorybook from '~icons/vscode-icons/file-type-storybook';
import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
import VscodeIconsFileTypeReactjs from '~icons/vscode-icons/file-type-reactjs';
import VscodeIconsFileTypeIonic from '~icons/vscode-icons/file-type-ionic';
import LogosOpenlayers from '~icons/logos/openlayers';
import LogosMapboxIcon from '~icons/logos/mapbox-icon';
import LogosVuetifyjs from '~icons/logos/vuetifyjs';

import VscodeIconsFileTypeJar from '~icons/vscode-icons/file-type-jar';
import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
import VscodeIconsFileTypePython from '~icons/vscode-icons/file-type-python';
import VscodeIconsFileTypePgsql from '~icons/vscode-icons/file-type-pgsql';
import LogosRedis from '~icons/logos/redis';
import VscodeIconsFileTypeFirebase from '~icons/vscode-icons/file-type-firebase';
import VscodeIconsFileTypeElastic from '~icons/vscode-icons/file-type-elastic';
import LogosSpringIcon from '~icons/logos/spring-icon';
import VscodeIconsFileTypeNestjs from '~icons/vscode-icons/file-type-nestjs';
import LogosKafkaIcon from '~icons/logos/kafka-icon';
import LogosRabbitmqIcon from '~icons/logos/rabbitmq-icon';
import VscodeIconsFileTypeMakefile from '~icons/vscode-icons/file-type-makefile';
import VscodeIconsFileTypeNginx from '~icons/vscode-icons/file-type-nginx';
import VscodeIconsFileTypeMatlab from '~icons/vscode-icons/file-type-matlab';
import VscodeIconsFileTypeGit from '~icons/vscode-icons/file-type-git';
import LogosGithubOctocat from '~icons/logos/GithubOctocat';
import MdiGithub from '~icons/mdi/github';
import VscodeIconsFileTypeDocker from '~icons/vscode-icons/file-type-docker';
import LogosKubernetes from '~icons/logos/kubernetes';
import VscodeIconsFileTypeJenkins from '~icons/vscode-icons/file-type-jenkins';
import VscodeIconsFileTypeAws from '~icons/vscode-icons/file-type-aws';
import LogosLinuxTux from '~icons/logos/linux-tux';
import LogosMicrosoftWindows from '~icons/logos/microsoft-windows';
import VscodeIconsFileTypeVscode from '~icons/vscode-icons/file-type-vscode';


const technologyIcons: Ref<SVGElement[]> = ref([]);
const setTechnologyIconRef = (el: SVGElement) => { if (el) technologyIcons.value?.push(el); }

const frontendIcons = [
    VscodeIconsFileTypeHtml,
    VscodeIconsFileTypeCss,
    VscodeIconsFileTypeTypescriptOfficial,
    VscodeIconsFileTypeJsOfficial,
    VscodeIconsFileTypeVue,
    VscodeIconsFileTypeVitest,
    VscodeIconsFileTypeNuxt,
    VscodeIconsFileTypeWebpack,
    VscodeIconsFileTypeVite,
    VscodeIconsFileTypeCypress,
    VscodeIconsFileTypeJest,
    VscodeIconsFileTypeLighthouse,
    VscodeIconsFileTypeMdx,
    VscodeIconsFileTypeWindi,
    VscodeIconsFileTypeTailwind,
    VscodeIconsFileTypeEslint,
    VscodeIconsFileTypePrettier,
    VscodeIconsFileTypeStorybook,
    VscodeIconsFileTypeSvelte,
    VscodeIconsFileTypeReactjs,
    VscodeIconsFileTypeIonic,
    LogosOpenlayers,
    LogosMapboxIcon,
    LogosVuetifyjs,
    VscodeIconsFileTypeJar,
    VscodeIconsFileTypeNode,
    VscodeIconsFileTypePython,
    VscodeIconsFileTypePgsql,
    LogosRedis,
    VscodeIconsFileTypeElastic,
    VscodeIconsFileTypeFirebase,
    LogosSpringIcon,
    VscodeIconsFileTypeNestjs,
    LogosKafkaIcon,
    LogosRabbitmqIcon,
    VscodeIconsFileTypeMakefile,
    VscodeIconsFileTypeNginx,
    VscodeIconsFileTypeMatlab,
    VscodeIconsFileTypeGit,
    LogosGithubOctocat,
    MdiGithub,
    VscodeIconsFileTypeDocker,
    LogosKubernetes,
    VscodeIconsFileTypeJenkins,
    VscodeIconsFileTypeAws,
    LogosLinuxTux,
    LogosMicrosoftWindows,
    VscodeIconsFileTypeVscode,
];

onMounted(() => {
    technologyIcons.value?.forEach((reference, index) => {
        const { variant } = useMotion(reference, {
            initial: {
                scale: 0,
                y: 100,
                opacity: 0,
            },
            visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    type: 'spring',
                    stiffness: 320,
                    damping: 20,
                    delay: index * 50,
                    onComplete() {
                        variant.value = 'levitate';
                    }
                },
            },

            levitate: {
                y: 15,
                transition: {
                    duration: 1500,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror',
                },

            }
        });
    });
});

</script>

<template>
    <JSection title="Skills">
        <!-- <div class="flex">
            <MdiMonitor class="!text-xl" />
            <MdiCellphone class="!text-xl" />
        </div>-->

        <div class="grid grid-cols-6 gap-4 place-items-center w-[max-content]">
            <Component v-for="icon in frontendIcons" :is="icon" :ref="setTechnologyIconRef" />
        </div>
    </JSection>
</template>

<style scoped>
svg {
    @apply text-4xl text-primary;
}
</style>