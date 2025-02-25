import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImageOne from '../assets/backgrounds/pexels-jopwell-2422282.jpg';
import ExampleCarouselImageTwo from '../assets/backgrounds/software-developer-on-php-code.jpg';
import ExampleCarouselImageThree from '../assets/backgrounds/working-at-night.jpg';
import '../styles/UncontrolledExample.css';
function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={ExampleCarouselImageOne} alt="First slide image" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExampleCarouselImageTwo} alt="Second slide image" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExampleCarouselImageThree} alt="Third slide image" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
