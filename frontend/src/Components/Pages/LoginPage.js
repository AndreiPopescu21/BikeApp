import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <div>
            <GoogleLogin
            clientId="aa"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginPage;