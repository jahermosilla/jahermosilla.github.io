import OSMXML from 'ol/format/OSMXML';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import { transformExtent } from 'ol/proj';
import MapOpenlayers from 'ol/Map';

export default function useOsmLayer(map: MapOpenlayers) {
  const styles: { [key: string]: any } = {
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
          color: 'rgba(246, 99, 79, 1.0)',
          width: 1,
        }),
        fill: new Fill({
          color: 'rgba(246, 99, 79, 0.3)',
        }),
      }),
    },
    'highway': {
      'service': new Style({
        stroke: new Stroke({
          color: 'rgba(255, 255, 255, 1.0)',
          width: 2,
        }),
      }),
      '.*': new Style({
        stroke: new Stroke({
          color: 'rgba(255, 255, 255, 1.0)',
          width: 3,
        }),
      }),
    },
    'landuse': {
      'forest|grass|allotments': new Style({
        stroke: new Stroke({
          color: 'rgba(140, 208, 95, 1.0)',
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
  };

  const vectorSource = new VectorSource({
    format: new OSMXML(),
    loader: function (extent, resolution, projection, success, failure) {
      const epsg4326Extent = transformExtent(extent, projection, 'EPSG:4326');

      const client = new XMLHttpRequest();

      client.open('POST', 'https://overpass-api.de/api/interpreter');
      client.addEventListener('load', function () {
        const features = new OSMXML().readFeatures(client.responseText, {
          featureProjection: map.getView().getProjection(),
        });

        vectorSource.addFeatures(features);
      });

      client.addEventListener('error', console.error);

      const query =
        '(node(' +
        epsg4326Extent[1] +
        ',' +
        Math.max(epsg4326Extent[0], -180) +
        ',' +
        epsg4326Extent[3] +
        ',' +
        Math.min(epsg4326Extent[2], 180) +
        ');rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;';

      client.send(query);
    },
    strategy: bboxStrategy,
  });

  const vector = new VectorLayer({
    source: vectorSource,
    style: function (feature) {
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
    },
  });

  return vector;
}