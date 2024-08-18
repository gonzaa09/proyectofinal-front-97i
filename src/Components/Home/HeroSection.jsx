import React from 'react'
import { Carousel } from 'react-bootstrap';
import "../../assets/Styles/HeroSection.css"

const HeroSection = () => {
  return (
    <>
     <Carousel interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Clinica+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenido a la Clínica</h3>
          <p>Atención médica de calidad a tu alcance.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Clinica+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Nuestros Servicios</h3>
          <p>Especialidades médicas adaptadas a tus necesidades.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Clinica+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Solicita tu Turno Ahora</h3>
          <p>Fácil y rápido, agenda tu cita en línea.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default HeroSection