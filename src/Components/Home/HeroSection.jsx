import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../assets/Styles/HeroSection.css";
import img1 from "../../assets/Img/1.jpeg";
import img2 from "../../assets/Img/2.jpeg";
import img3 from "../../assets/Img/3.jpeg";

const HeroSection = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <div className="overlay"></div>
          <Carousel.Caption className="centered-caption">
            <h2>Bienvenido a la Clínica</h2>
            <p>Atención médica de calidad a tu alcance.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <div className="overlay"></div>
          <Carousel.Caption className="centered-caption">
            <h2>Nuestros Servicios</h2>
            <p>Especialidades médicas adaptadas a tus necesidades.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <div className="overlay"></div>
          <Carousel.Caption className="centered-caption">
            <h2>Solicita tu Turno Ahora</h2>
            <p>Fácil y rápido, agenda tu cita en línea.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;


