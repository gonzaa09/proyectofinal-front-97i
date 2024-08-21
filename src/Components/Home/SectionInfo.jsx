import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/Styles/Section1.css"; // Asegúrate de que este archivo CSS contiene los estilos específicos para este componente

const SectionInfo = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 350,
    centerPadding: "60px",
    slidesToShow: 3, // Mostrar 3 servicios a la vez
    slidesToScroll: 1, // Desplazarse uno por uno
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas, mostrar solo 1 servicio
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Para pantallas medianas, mostrar 2 servicios
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    { title: 'Cardiología', description: 'Servicios de cardiología avanzada.' },
    { title: 'Odontología', description: 'Cuidado dental para toda la familia.' },
    { title: 'Neurología', description: 'Tratamiento para enfermedades neurológicas.' },
    { title: 'Pediatría', description: 'Atención médica para niños y adolescentes.' },
    { title: 'Ginecología', description: 's problemas del suelo pelviano' },
    { title: 'Dermatología', description: 'Tratamiento para enfermedades de la piel.' },
  ];

  return (
    <div className='contenedor-section'>
    <div className="container service-carousel">
      <h2 className="text-center fw-bold">Servicios y Especialidades medicas</h2>
      <h6 className="text-center mt-3 fw-bold"><span style={{color: 'gray'}}>Confiados en que la mejor prevención es un diagnóstico temprano, sumamos servicios, equipamiento y especialidades médicas.</span></h6>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-item mt-2 border-0">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default SectionInfo;
