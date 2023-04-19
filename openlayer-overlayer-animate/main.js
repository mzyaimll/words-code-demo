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

const map = new Map({
	target: 'map',
	layers: [
		new TileLayer({
			source: new OSM(),
		}),
	],
	view: new View({
		center: [86.0625, 34.125],
		projection: 'EPSG:4326', // 修改坐标系
		zoom: 6,
	}),
});

map.on('click', (event) => {
	console.log(event, 'click');
});

const source = new VectorSource(); // 创建一个数据源
const vector = new VectorLayer({
	// 创建一个图层并绑定数据源
	source: source,
});
map.addLayer(vector); // 将图层添加进图层中
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

source.addFeature(point); // 将创建的点位添加到数据源中

const elem = document.createElement('div'); // 创建一个dom节点
const parent = document.getElementById('overlay_container'); // 获取父节点的dom
parent.appendChild(elem); // 将创建的dom节点添加到父节点中
elem.setAttribute('class', 'css_animation'); // 给创建的dom节点添加样式
const pointAnimateOverLay = new Overlay({
	// 创建一个overlay 并绑定dom节点
	element: elem,
	positioning: 'center-center',
	offset: [0, 0],
	insertFirst: false,
	insertFirst: false,
	zIndex: 1,
});

map.addOverlay(pointAnimateOverLay); // 将overlay添加到地图中

pointAnimateOverLay.setPosition([86.0625, 34.125]); // 设置overlay的位置为点位的位置
