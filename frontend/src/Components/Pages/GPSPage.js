import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const GPSPage = () => {

    
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
                >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>
        </div>
    )
}

export default GPSPage;