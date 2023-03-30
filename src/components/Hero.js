import Carousel from 'react-bootstrap/Carousel';
import Photo1 from "./../assets/photo1.png"
import Photo2 from "./../assets/photo2.png"
import Photo3 from "./../assets/photo3.png"
import Photo4 from "./../assets/photo4.png"


const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Outdoor Class</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>School Discussion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Online Class</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Photo4}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>IT Class</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero;