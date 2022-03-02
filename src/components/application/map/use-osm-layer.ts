import OSMXML from 'ol/format/OSMXML.js';
import VectorSource from 'ol/source/Vector.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import type MapOpenlayers from 'ol/Map.js';
import { StyleFunction } from 'ol/style/Style.js';
import { watchPostEffect } from 'vue';
import { isDark } from '../../ui/misc/use-theme';

export default async function useOsmLayer(map: MapOpenlayers) {
  const vectorSource = new VectorSource({
    format: new OSMXML(),
    features: await readOsm(map)
  });


  const vector = new VectorLayer({
    source: vectorSource,
    style: useStyleFunction(useStyles(lightTheme())),
  });

  watchPostEffect(() => {
    const theme = isDark.value ? darkTheme() : lightTheme();

    console.log(isDark.value, theme);

    vector.setStyle(useStyleFunction(useStyles(theme)))
  });


  return vector;
}

async function readOsm(map: MapOpenlayers) {
  const osmData = await fetch('/osm.txt').then(res => res.text());

  const readerProperties = {
    featureProjection: map.getView().getProjection(),
  };

  return new OSMXML().readFeatures(osmData, readerProperties);
}

// Styles

function useStyleFunction(styles: { [key: string]: any }): StyleFunction {
  return (feature) => {
    for (const key in styles) {
      const value = feature.get(key);
      if (value !== undefined) {
        for (const regexp in styles[key]) {
          if (new RegExp(regexp).test(value)) {
            return styles[key][regexp];
          }
        }
      }
    }
    return null;
  }
}
interface PolygonStyle {
  fill?: string
  stroke?: string
}

interface OsmTheme {
  building: PolygonStyle
  highway: PolygonStyle
  natural: PolygonStyle
}

const stroke = (color: string, width: number = 1) => new Stroke({ color, width });
const fill = (color: string) => new Fill({ color });

function useStyles(theme: OsmTheme) {
  return {
    'building': {
      '.*': new Style({
        zIndex: 100,
        stroke: stroke(theme.building.stroke!),
        fill: fill(theme.building.fill!)
      }),
    },
    'highway': {
      '.*': new Style({ stroke: stroke(theme.highway.stroke!, 2) }),
    },
    'natural': {
      '.*': new Style({ image: new CircleStyle({ radius: 2, fill: fill(theme.natural.fill!) }) })
    },
  }
}

function lightTheme(): OsmTheme {
  return {
    building: { stroke: '#3949ab', fill: '#8e99f3' },
    highway: { stroke: '#171417' },
    natural: { fill: 'rgba(140, 208, 95, 1.0)' },
  }
}

function darkTheme(): OsmTheme {
  return {
    building: { stroke: '#fff', fill: '#5e92f3' },
    highway: { stroke: '#fff' },
    natural: { fill: 'rgba(140, 208, 95, 1.0)' },
  }
}