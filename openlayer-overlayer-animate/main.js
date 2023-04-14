/*
 * @Author: GeekMzy
 * @Date: 2023-04-14 14:22:38
 * @FilePath: \words-code-demo\openlayer-overlayer-animate\main.js
 */
import './style.css';
import { Map, View } from 'ol';
import Feature from 'ol/Feature';
import TileLayer from 'ol/layer/Tile';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import Overlay from 'ol/Overlay';
import { Fill, Stroke, Icon, Style, Text } from 'ol/style';

import OSM from 'ol/source/OSM';

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			source: new OSM(),
		}),
	],
	view: new View({
		center: [0, 0],
		projection: 'EPSG:4326',
		zoom: 2,
	}),
});

map.on('click', (event) => {
	console.log(event.coordinate, 'click');
});

const point = new Feature({
	geometry: new Point([86.0625, 34.125]),
});

const pointStyle = new Style({});
