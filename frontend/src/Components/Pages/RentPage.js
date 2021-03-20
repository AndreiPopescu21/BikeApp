import { useEffect, useState } from 'react';
import { Col, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

const RentPage = () => {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    const [zones, setZones] = useState([]);
    const [city, setCity] = useState("");

    const Map = ReactMapboxGl({
        interactive: false,
        accessToken:
            'pk.eyJ1IjoiYmlrZWFwcCIsImEiOiJja20zZmw1aXg0ZnViMnVud252b3VxbG9lIn0.U0ROQQiLR9VHxAbHVDxuFQ'
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmlrZWFwcCIsImEiOiJja20zZmw1aXg0ZnViMnVud252b3VxbG9lIn0.U0ROQQiLR9VHxAbHVDxuFQ'


    useEffect(() => {

    }, [zones])
    useEffect(() => {

    }, [])
    const getData = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        try {
            const City = city;
            var { data } = await axios.post("/api/rent/rent", { City }, config);

            var zonesArray = [];
            data.data.forEach(zone => zonesArray.push(zone));
            setZones(zonesArray);
            console.log(zonesArray)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Col sm={6} className="m-auto">
                <div style={{ textAlign: 'center' }}>
                    <h1> Rent bike zones </h1>
                    <br />
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="City name"
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button
                                    onClick={getData}
                                    type="button"
                                    className="mb-2">
                                    Search
                        </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                {
                    zones.map(zone => (
                        <div style={{ textAlign: "center" }}>
                            <hr />
                            <p> Company: {zone["company"][0]} </p>
                            <p> Location: {zone["location"]["city"]} </p>
                            <hr />
                            <Map
                                zoom={[15]}
                                center={[zone["location"]["longitude"],zone["location"]["latitude"]]}
                                style="mapbox://styles/mapbox/streets-v9"
                                containerStyle={{
                                    height: '25vh',
                                    width: '35vw'
                                }}
                            >
                                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                    <Feature coordinates={[zone["location"]["longitude"], zone["location"]["latitude"]]} />
                                </Layer>
                            </Map>;
                        </div>
                    ))
                }
            </Col>
        </div>
    )
}

export default RentPage;