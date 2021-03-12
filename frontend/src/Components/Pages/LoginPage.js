import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';
import bikeImage from '../../Images/BikeAlternativeImage.png';

const LoginPage = ({history}) => {

    useEffect(() =>{
        if(localStorage.getItem("authToken"))
            history.push("/");
    },[history]);


    const googleSuccess = async (response) => {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        try{
            const tokenId = response.tokenId;
            const { data } = await axios.post("/api/auth/login", {tokenId}, config);

            localStorage.setItem("authToken", data.token);
            history.push("/");
            history.go(0);

        }catch(error){
            console.log(error);
        }
    }

    const googleFail = (response) => {
        console.log(response);
    }

    return(
        <div>
             <Col sm={6} className="m-auto">
                <div style = {{backgroundColor: 'green', textAlign: 'center', 
                        borderRadius: '5px', margin: '10%'}}>

                    <h2> Login </h2>
                    <br/>
                        <GoogleLogin
                            clientId="294446032728-cntsl2fvan289tmah0pbed8nre2eu2cs.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={googleSuccess}
                            onFailure={googleFail}
                            cookiePolicy={'single_host_origin'}
                            />
                    <br/>
                    <br/>
                </div>
            </Col>
            <Col sm={6} className="m-auto">
                <Image src = {bikeImage}
                    className="d-block mx-auto img-fluid w-50"
                    alt="A bicycle"
                />
            </Col>
        </div>
    )
}

export default LoginPage;