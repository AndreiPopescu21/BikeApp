import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useEffect } from 'react';

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
            <GoogleLogin
            clientId="294446032728-cntsl2fvan289tmah0pbed8nre2eu2cs.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={googleSuccess}
            onFailure={googleFail}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginPage;