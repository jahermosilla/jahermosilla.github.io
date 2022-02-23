<script setup lang="ts">
import MapOpenlayers from 'ol/Map';
import ViewOpenlayers, { ViewOptions } from 'ol/View';
import { MapOptions } from 'ol/PluggableMap';
import { Ref } from 'vue';
import useOsmLayer from './use-osm-layer';

const target: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
    const layers: typeof mapOptions['layers'] = [
        //new TileLayer({ source: new OsmSource() })
    ];

    const viewOptions: ViewOptions = {
        center: [-52118.110005, 4783084.785698],
        maxZoom: 19,
        zoom: 17,
    }

    const mapOptions: MapOptions = {
        layers,
        view: new ViewOpenlayers(viewOptions),
        controls: [],
        target: target.value!
    }

    const map = new MapOpenlayers(mapOptions);

    map.addLayer(useOsmLayer(map));
});
</script>

<template>
    <div class="j-bg-map" ref="target" />
</template>


<style scoped>
.j-bg-map {
    width: 100%;
    height: 100%;
}
</style>