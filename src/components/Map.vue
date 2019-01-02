<template>
	<div id="map" class="container"></div>
</template>

<script>
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Image as ImageLayer} from 'ol/layer.js';
import Projection from 'ol/proj/Projection.js';
import ImageWMS from 'ol/source/ImageWMS.js';

export default {
    name: 'PolarMap',
    data () {
        return {
        }
    },
    mounted () {
        const layers = [
            new ImageLayer({
                source: new ImageWMS({
                    attributions: 'CCAMLR',
                    params: {
                        'LAYERS': 'gis:coastline',
                    },
					serverType: 'geoserver',
                    url: 'https://gis.ccamlr.org/geoserver/gis/wms?'
                })
            })
        ];
        const projection = new Projection({
            code: 'EPSG:102020',
            units: 'm'
        });

        new Map({
            layers: layers,
            target: 'map',
            view: new View({
                center: [0, 0],
                projection: projection,
                zoom: 4
            })
        });
    }
}
</script>

<style>
	#map { height: 600px }
</style>