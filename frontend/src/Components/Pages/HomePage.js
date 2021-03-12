import bikeImage from '../../Images/BikeImage.png';
import { Col, Image} from 'react-bootstrap';

const HomePage = () => {
    return(
        <div>
            <Col sm={6} className="m-auto">
                <Image src = {bikeImage}
                    className="d-block mx-auto img-fluid w-50"
                    alt="A bicycle"
                />
            </Col>
            <Col sm={6} className="m-auto" 
                style = {{backgroundColor: 'green', borderRadius: '5px', padding: '1%'}}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur nisl est, viverra eu lacinia vel, sollicitudin in tortor. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Pellentesque sed placerat arcu. 
                Vestibulum congue mattis dignissim. 
                Praesent pretium laoreet arcu, vitae porttitor nulla dapibus ac. 
                Mauris vitae fringilla purus, vel sodales massa. 
                Fusce vitae neque sit amet nisl ultrices suscipit.
                </p>
            </Col>
        </div>
    )
}

export default HomePage;