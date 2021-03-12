import { Col, Button } from 'react-bootstrap';

const ProfilePage = ({history}) => {

    const logout = () => {
        localStorage.removeItem("authToken");
        history.push('/');
        history.go(0);
    }

    return (
        <div>
            <Col sm={6} className="m-auto">
                <div style = {{backgroundColor: 'green', textAlign: 'center', 
                        borderRadius: '5px', margin: '10%'}}>

                    <h2> Profile </h2>
                    <br/>

                    <Button onClick = {logout} 
                        variant="light"
                        className="d-block mx-auto img-fluid w-50"
                        > Logout </Button>  
                    <br/>
                </div>
            </Col>
        </div>
    )
}

export default ProfilePage;