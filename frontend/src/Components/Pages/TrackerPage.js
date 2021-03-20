import ReactSpeedometer from "react-d3-speedometer";
import {Col, Container, Row, Button} from 'react-bootstrap';
import { Fragment, useEffect, useState } from "react";
import Timer from 'react-compound-timer';
import axios from 'axios'; 

const TrackerPage = props => {
    const [speed, setSpeed] = useState(10);
    const [distance, setDistance] = useState(props.distance);
    const [avgSpeed, setAvgSpeed] = useState(0);
    const [delay, setDelay] = useState(1);

    const [timerPaused, setTimerPaused] = useState(false);
    const [timerStop, setTimerStop] = useState(true);

    useEffect(()=>{
        setInterval(()=>{setDelay(oldDelay => oldDelay + 1)}, 10000)
    },[])

    useEffect(()=>{
        setDistance(props.distance)
        setAvgSpeed(distance/(delay*10/3600))
    },[props, delay])

    const setBadges = async (distance, Time, TopSpeed) => {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        try{
            const token = localStorage.getItem("authToken");
            const Distance = distance;
            const time = Time;
            const topSpeed = TopSpeed;
            const { data } = await axios.post("/api/badges/setbadges", {token, Distance, time, topSpeed}, config);
        }catch(error){
            console.log(error);
        }
    }

    const setFitness = async (Time) => {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        try{
            const token = localStorage.getItem("authToken");
            const time = Time;
            const { data } = await axios.post("/api/fitness/setfitness", {token,time}, config);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <div>
                <br/>
                <Col sm={18} className="m-auto"
                    style={{borderRadius: '5px', padding: '1%', textAlign: 'center'}}>
                        <h2> Stats Tracker </h2>
                        <br/>
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <h3>Current speed in Km/h</h3>
                                    <br/>
                                    <ReactSpeedometer
                                    maxValue={40}
                                    value={speed}
                                    needleColor="black"
                                    startColor="white"
                                    segments={10}
                                    textColor="white"
                                    endColor="#80FF80"
                                    />
                                </Col>
                                <Col sm={6}>
                                    <h3>Avg speed in Km/h</h3>
                                    <br/>
                                    <ReactSpeedometer
                                    maxValue={40}
                                    value={avgSpeed}
                                    needleColor="black"
                                    startColor="white"
                                    segments={10}
                                    textColor="white"
                                    endColor="#80FF80"
                                    />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col sm={6}>
                                <h3>Time Elapsed</h3>
                                    <br/>
                                    <Timer
                                    startImmediately={false}
                                    checkpoints={[
                                        {
                                            time: 60*60 ,
                                            callback: () => {
                                                setBadges(0,60,0)
                                            },
                                        }
                                    ]}
                                    timer={0}
                                    onReset={() => {
                                        setSpeed(0);
                                        setAvgSpeed(0);
                                        setDistance(0);}}
                                    onPause={() => setTimerPaused(false)}
                                    onResume={() => setTimerPaused(true)}
                                    onStart={() => setTimerStop(false)}
                                    onStop={() => {
                                        setTimerStop(true);
                                        setBadges(distance,0,0);
                                        setFitness(delay);
                                    }}
                                    >
                                    {({ start, resume, pause, stop, reset }) => (
                                        <Fragment>
                                            <p style={{fontSize: "3rem"}}>
                                            <Timer.Minutes /> : <Timer.Seconds /> 
                                            </p>
                                            <div>
                                            <Row>
                                                {
                                                    timerPaused ?
                                                    <Button onClick={pause}
                                                        variant="light"
                                                        className="d-block mx-auto img-fluid w-50">Pause</Button>
                                                    :
                                                    <Button onClick={resume}
                                                        variant="light"
                                                        className="d-block mx-auto img-fluid w-50">Resume</Button>
                                                }
                                                
                                                    <Button onClick={reset}
                                                        variant="light"
                                                        className="d-block mx-auto img-fluid w-50">Reset</Button>

                                                { timerStop ?
                                                    <Button onClick={start}
                                                        variant="light"
                                                        className="d-block mx-auto img-fluid w-50">Start</Button>
                                                    :
                                                    <Button onClick={stop}
                                                        variant="light"
                                                        className="d-block mx-auto img-fluid w-50">Stop</Button>
                                                }            
                                            </Row>    
                                            </div>
                                            </Fragment>
                                        )}
                                    </Timer>
                                </Col>
                                <Col sm={6}>
                                    <h3>Distance Travelled</h3>
                                    <br/>
                                    <p style={{fontSize: "3rem"}}>{distance.toFixed(2)} km</p>
                                </Col>
                            </Row>
                        </Container>
                </Col>
            </div>
        </div>
    )
}

export default TrackerPage;