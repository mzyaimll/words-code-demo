/*
 * @Author: GeekMzy
 * @Date: 2023-04-14 14:22:38
 * @FilePath: \openlayer-overlayer-animate\main.js
 */
import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import { Fill, Stroke, Icon, Style, Text, Circle } from 'ol/style';

import OSM from 'ol/source/OSM';

const source = new VectorSource();

const vector = new VectorLayer({
	source: source,
});

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			source: new OSM(),
		}),
		vector,
	],
	view: new View({
		center: [86.0625, 34.125],
		projection: 'EPSG:4326',
		zoom: 4,
	}),
});

map.on('click', (event) => {
	console.log(event, 'click');
});

const point = new Feature({
	geometry: new Point([86.0625, 34.125]),
	zIndex: 2,
	style: new Style({
		image: new Circle({
			radius: 5,
			fill: new Fill({
				color: 'rgba(255, 0, 0, 0.5)',
			}),
			stroke: new Stroke({
				color: 'red',
				width: 2,
			}),
		}),
		zIndex: 2,
	}),
});

source.addFeature(point);

const elem = document.createElement('div');
const parent = document.getElementById('overlay_container');
parent.appendChild(elem);
elem.setAttribute('class', 'css_animation');
elem.style.pointerEvents = 'none'; // 添加此行代码
const pointAnimateOverLay = new Overlay({
	element: elem,
	positioning: 'center-center',
	offset: [0, 0],
	insertFirst: false,
	insertFirst: false,
	zIndex: 1,
});

pointAnimateOverLay.setProperties({
	pointEventTarget: true,
});

map.addOverlay(pointAnimateOverLay);

pointAnimateOverLay.setPosition([86.0625, 34.125]);
