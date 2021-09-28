const mapboxgl = window.mapboxgl;
const MapboxLanguage = window.MapboxLanguage;
mapboxgl.accessToken = 'pk.eyJ1IjoiY2htMTc4MSIsImEiOiJjaXI0YWk3a3QwMWx5ZnBubTFuY3d2enZvIn0.zDEUyiEq9gGb69B8qki9Tg';

export default class MapControl {
    constructor(id, options = {}, callback) {
        this.id = id;
        this.map = null;
        this.initalize(options, callback);
    }
    initalize(options, callback) {
        this.map = new mapboxgl.Map({
            container: this.id,
            style: {
                version: 8,
                "sprite": "mapbox://sprites/mapbox/bright-v8",
                "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
                sources: {
                    'basemap-vec': {
                        type: 'raster',
                        tiles: [
                            'http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=0329565796aebcef9f42506663d6e532',
                        ],
                        tileSize: 256,
                    },
                    'basemap-cva': {
                        type: 'raster',
                        tiles: [
                            'http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=0329565796aebcef9f42506663d6e532',
                        ],
                        tileSize: 256,
                    }
                },
                layers: [{
                    id: 'basemap-vec',
                    type: 'raster',
                    source: 'basemap-vec',
                    minzoom: 0,
                    maxzoom: 22
                }, {
                    id: 'basemap-cva',
                    type: 'raster',
                    source: 'basemap-cva',
                    minzoom: 0,
                    maxzoom: 22
                }]
            },
            attributionControl: false,
            center: [115.62199877716012, 34.60269304395244],
            zoom: 4
        })
        this.map.addControl(new MapboxLanguage({ defaultLanguage: 'zh' }));

        this.map.on('load', () => {
            if (typeof callback === 'function') {
                callback(this);
            }
        })
    }
}