import OSMXML from 'ol/format/OSMXML.js';
import VectorSource from 'ol/source/Vector.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
// import { bbox as bboxStrategy } from 'ol/loadingstrategy';
// import { transformExtent } from 'ol/proj';
import type MapOpenlayers from 'ol/Map.js';
import { StyleFunction } from 'ol/style/Style';

import { plainText as osmData } from '@virtual:plain-text/src/assets/osm.txt';

export default function useOsmLayer(map: MapOpenlayers) {
  const vectorSource = new VectorSource({
    format: new OSMXML(),
    features: readOsm(map)
  });

  const vector = new VectorLayer({
    source: vectorSource,
    style: useStyleFunction(useStyles()),
  });

  return vector;
}

function readOsm(map: MapOpenlayers) {
  const readerProperties = {
    featureProjection: map.getView().getProjection(),
  };

  return new OSMXML().readFeatures(osmData, readerProperties);
}

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

function useStyles() {
  return {
    'amenity': {
      'parking': new Style({
        stroke: new Stroke({
          color: 'rgba(170, 170, 170, 1.0)',
          width: 1,
        }),
        fill: new Fill({
          color: 'rgba(170, 170, 170, 0.3)',
        }),
      }),
    },
    'building': {
      '.*': new Style({
        zIndex: 100,
        stroke: new Stroke({
          color: '#3949ab',
          width: 1,
        }),
        fill: new Fill({
          color: '#8e99f3',
        }),
      }),
    },
    'highway': {
      'service': new Style({
        stroke: new Stroke({
          color: '#171417',
          width: 1,
        }),
      }),
      '.*': new Style({
        stroke: new Stroke({
          color: '#171417',
          width: 2,
        }),
      }),
    },
    'landuse': {
      'forest|grass|allotments': new Style({
        stroke: new Stroke({
          color: '#171417',
          width: 1,
        }),
        fill: new Fill({
          color: 'rgba(140, 208, 95, 0.3)',
        }),
      }),
    },
    'natural': {
      'tree': new Style({
        image: new CircleStyle({
          radius: 2,
          fill: new Fill({
            color: 'rgba(140, 208, 95, 1.0)',
          })
        }),
      }),
    },
  }
}