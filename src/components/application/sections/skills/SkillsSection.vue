<script setup lang="ts">
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
import DeveloperCodingIlustration from './DeveloperCodingIlustration.vue';


const firstRingIcons = [
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
]

const secondRingIcons = [
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
    // VscodeIconsFileTypeMatlab,
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
</script>

<template>
    <JSection title="Skills" class="relative min-h-screen">
        <RotatorRing :items="firstRingIcons" />

        <RotatorRing :items="secondRingIcons" small :delay="500" />

        <DeveloperCodingIlustration
            class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-w-full"
        />
    </JSection>
</template>
