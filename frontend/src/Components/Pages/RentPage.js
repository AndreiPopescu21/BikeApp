import {useEffect, useState} from 'react';
import {Col, Button, Form, FormControl, InputGroup} from 'react-bootstrap';
import axios from 'axios';

const RentPage = () => {
    const [zones, setZones] = useState([]);
    const [city, setCity] = useState("");

    useEffect(() => {
    }, [zones])

    const getData = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        try{
            const City = city;
            var { data } = await axios.post("/api/rent/rent", {City}, config);

            var zonesArray = [];
            data.data.forEach(zone => zonesArray.push(zone));
            setZones(zonesArray);
            console.log(zonesArray)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <Col sm={6} className="m-auto">
                <div style = {{textAlign: 'center'}}>
                    <h1> Rent bike zones </h1>
                    <br/>
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
                            onClick = {getData}
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
                        <div style = {{textAlign: "center"}}>
                            <hr/>
                                <p> Company: { zone["company"][0] } </p>
                                <p> Location: { zone["location"]["city"] } </p>
                                
                            <hr/>
                        </div>
                    ))
                }
            </Col>
        </div>
    )
}

export default RentPage;