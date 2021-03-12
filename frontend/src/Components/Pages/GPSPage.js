import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import { useState } from 'react';

const GPSPage = () => {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    
    const [long, setLong] = useState(-0.118092);
    const [lat, setLat] = useState(51.509865);
    const [zoom, setZoom] = useState(15);

    const Map = ReactMapboxGl({
        accessToken:
        'pk.eyJ1IjoiYmlrZWFwcCIsImEiOiJja20zZmw1aXg0ZnViMnVud252b3VxbG9lIn0.U0ROQQiLR9VHxAbHVDxuFQ'
    });

    return(
        <div>
            <Map
                style= "mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                center={[long, lat]}
                zoom = {[zoom]}
                >
            </Map>
        </div>
    )
}

export default GPSPage;