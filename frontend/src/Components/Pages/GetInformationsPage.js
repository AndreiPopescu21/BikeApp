import { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const GetInformationsPage = () =>{
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        try{
            const token = localStorage.getItem("authToken");

            const {data} = await axios.post('/api/informations/getinformations', {token}, config);
            setWeight(data.weight);
            setHeight(data.height);
        }catch(error){
            console.log(error.message);
        }
    }

    const saveData = async () => {
        console.log("x")
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        try{
            const token = localStorage.getItem("authToken");

            const {data} = await axios.post('/api/informations/setinformations', {token, height, weight}, config);
            console.log(data);
        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <div>
            <br/>
            <Form className="m-auto" 
                style ={{width: "35%", backgroundColor: 'green', padding: "1%", borderRadius: '5px'}}>
                <Form.Group>
                    <Form.Label>Enter your body weight</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Enter your height</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={height}
                        onChange={e => setHeight(e.target.value)} />
                </Form.Group>

                <Button onClick = {saveData} 
                        variant="light"
                        className="d-block mx-auto img-fluid w-50"
                        > Submit </Button>  
            </Form>
        </div>
    )
}

export default GetInformationsPage;