import { Col, Button, Row } from 'react-bootstrap';
import "../../App.css";
import FirstIcon from "../../Images/medal.svg"
import SecondIcon from "../../Images/30.svg"
import ThirdIcon from "../../Images/7.svg"
import FourthIcon from "../../Images/speedometer.svg"
import FifthIcon from "../../Images/hour.svg"
import SixthIcon from "../../Images/road-sign.svg"
import SeventhIcon from "../../Images/infinity.svg"
import { useState } from "react"

const ProfilePage = ({ history }) => {

    const logout = () => {
        localStorage.removeItem("authToken");
        history.push('/');
        history.go(0);
    }
    const [badges, setBadges] = useState([]);

    return (
        <div>
            <Col sm={6} className="m-auto">
                <div style={{
                    textAlign: 'center',
                    borderRadius: '5px'
                }}>

                    <h2> Profile </h2>
                    <br />
                    <h3 style={{ display: "flex", alignContent: "left" }}>Your Badges</h3>
                    <Row style={{ flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                        {badges[0] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={FirstIcon} alt="FirstIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>First Ride</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={FirstIcon} alt="FirstIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>First Ride</p>
                            </div>}
                            {badges[1] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={SecondIcon} alt="SecondIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Ride 7 days</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={SecondIcon} alt="SecondIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Ride 7 days</p>
                            </div>}
                            {badges[2] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={ThirdIcon} alt="ThirdIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Ride 30 days</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={ThirdIcon} alt="ThirdIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Ride 30 days</p>
                            </div>}
                    </Row>
                    <Row style={{ flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                    {badges[3] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={FourthIcon} alt="FourthIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Reach 20km/h on a ride</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={FourthIcon} alt="FourthIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Reach 20km/h on a ride</p>
                            </div>}
                            {badges[4] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={FifthIcon} alt="FifthIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Ride for 60 minutes</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={FifthIcon} alt="FifthIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Ride for 60 minutes</p>
                            </div>}
                    </Row>
                    <Row style={{ flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                    {badges[5] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={SixthIcon} alt="SixthIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Travel 100km</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={SixthIcon} alt="SixthIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Travel 100km</p>
                            </div>}
                            {badges[6] ?
                            <div className="exerciseContainer">
                                <img width="80" height="80" src={SeventhIcon} alt="SeventhIcon" />
                                <p style={{ color: "#4CBB17" }}>Unlocked</p>
                                <p>Travel 500km</p>
                            </div> :
                            <div className="exerciseContainer">
                                <img style={{fill: "linear-gradient(rgba(127,140,141, 0.8), rgba(0, 0, 0, 0.8))"}} width="80" height="80" src={SeventhIcon} alt="SeventhIcon" />
                                <p style={{ color: "#BE93D4" }}>Locked</p>
                                <p>Travel 500km</p>
                            </div>}
                    </Row>
                    <Button onClick={logout}
                        variant="light"
                        style={{
                            backgroundColor: '#4CBB17', margin: '10%'
                        }}
                        className="d-block mx-auto img-fluid w-50"
                    > Logout </Button>
                    <br />
                </div>
            </Col>
        </div>
    )
}

export default ProfilePage;