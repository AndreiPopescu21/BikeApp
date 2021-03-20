import ReactMapboxGl, { Layer, Source } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import { useEffect, useState } from 'react';

const GPSPage = () => {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    const [long, setLong] = useState(-0.118092);
    const [lat, setLat] = useState(51.509865);
    const [zoom, setZoom] = useState(15);

    const Map = ReactMapboxGl({
        interactive: false,
        accessToken:
            'pk.eyJ1IjoiYmlrZWFwcCIsImEiOiJja20zZmw1aXg0ZnViMnVud252b3VxbG9lIn0.U0ROQQiLR9VHxAbHVDxuFQ'
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmlrZWFwcCIsImEiOiJja20zZmw1aXg0ZnViMnVud252b3VxbG9lIn0.U0ROQQiLR9VHxAbHVDxuFQ'
    const LINE_SOURCE_OPTIONS = {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-122.48369693756104, 37.83381888486939],
                    [-122.48348236083984, 37.83317489144141],
                    [-122.48339653015138, 37.83270036637107],
                    [-122.48356819152832, 37.832056363179625],
                    [-122.48404026031496, 37.83114119107971],
                    [-122.48404026031496, 37.83049717427869],
                    [-122.48348236083984, 37.829920943955045],
                    [-122.48356819152832, 37.82954808664175],
                    [-122.48507022857666, 37.82944639795659],
                    [-122.48610019683838, 37.82880236636284],
                    [-122.48695850372314, 37.82931081282506],
                    [-122.48700141906738, 37.83080223556934],
                    [-122.48751640319824, 37.83168351665737],
                    [-122.48803138732912, 37.832158048267786],
                    [-122.48888969421387, 37.83297152392784],
                    [-122.48987674713133, 37.83263257682617],
                    [-122.49043464660643, 37.832937629287755],
                    [-122.49125003814696, 37.832429207817725],
                    [-122.49163627624512, 37.832564787218985],
                    [-122.49223709106445, 37.83337825839438],
                    [-122.49378204345702, 37.83368330777276]
                ]
            }
        }
    };
    return (
        <div>
            <Map
                center={[-122.48369693756104, 37.83381888486939]}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '98vw'
                }}
            >
                <Source id="source_id"  titleJsonSource={LINE_SOURCE_OPTIONS}/>
                <Layer
                    type="line"
                    paint={{ 'line-color': '#888', 'line-width': 8 }}
                    layout={{ "line-join": 'round', 'line-cap': 'round' }}
                    sourceId="source_id">
                </Layer>
            </Map>;
        </div>
    )
}

export default GPSPage;