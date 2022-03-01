<script setup lang="ts">
import { Map as MapOpenlayers, View as ViewOpenlayers } from 'ol';
import { loadavg } from 'os';
import { Ref } from 'vue';
import useOsmLayer from './use-osm-layer';

const target: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
    console.log(target.value);
    const layers = [
        //new TileLayer({ source: new OsmSource() })
    ];

    const viewOptions = {
        center: [-52100, 4783075],
        maxZoom: 19,
        zoom: 17,
    }

    const mapOptions = {
        layers,
        view: new ViewOpenlayers(viewOptions),
        controls: [],
        target: target.value!
    }

    const map = new MapOpenlayers(mapOptions);

    (async function load() {
        map.addLayer(await useOsmLayer(map));

    }());
});
</script>

<template>
    <div class="j-bg-map" ref="target" />
</template>


<style scoped>
.j-bg-map {
    @apply w-full h-full;
}
</style>