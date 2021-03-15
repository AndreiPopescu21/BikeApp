import { useEffect, useState } from 'react';
import {Col} from 'react-bootstrap';
import {Chart, Scatter} from 'react-chartjs-2';
import axios from 'axios';


const FitnessPage = () => {
    const [caloriesBurnt, setCaloriesBurnt] = useState(0);
    const [plotData, setPlotData] = useState([]);

    useEffect(() => {
        getDate();
    }, [])


    const getDate = async () => {
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        try{
            const token = localStorage.getItem("authToken");

            const {data} = await axios.post('/api/fitness/getfitness', {token}, config);
            var dataPlot = data.data;
            
            dataPlot.forEach(e => {
                const date = new Date(Date.now()).toJSON().slice(0,10);
                const currentDate = new Date(date);
                if(e.x == currentDate.getDate())
                {
                    setCaloriesBurnt(e.y);
                }
            })

            setPlotData(data.data);
        }catch(error){
            console.log(error.message);
        }
    }

    const data = {
        labels: ["a"],
        datasets: [
          {
            label: 'Calories burnt',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            borderColor: 'red',
            showLine: true,
            data: plotData
          },
        ],
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: { parser: 'YYYY/MM/DD HH:mm:ss' },
                  }],
                }
          },
      };
      

    return (
        <div>
            <br/>
            <Col sm={6} className="m-auto"
                style={{backgroundColor: 'green', borderRadius: '5px', padding: '1%', textAlign: 'center'}}>
                <h1>Fitness details</h1>
                <br/>
                <p> You burnt {caloriesBurnt} calories today from cycling </p>
                <hr/>
                <h2>Calories burnt in the last month</h2>
                <br/>
                <div style = {{backgroundColor: 'white'}}>
                    <Scatter data = {data}/>
                </div>
            </Col>
        </div>
    )
}

export default FitnessPage;