import React from 'react'
import { Container, Row, Col, Form, Button , Accordion} from 'react-bootstrap';
import "../../assets/Styles/Section2.css"

const Section2 = () => {
  return (
    <>
   
   <Container className="contenedor-section2">
      <Row>
        <Col lg={6}>
          <h2>Solicitar Turnos</h2>
          <hr className="w-25"/>
          <p>Dejanos tus datos y el estudio que tengas que realizarte. Nos comunicaremos a la brevedad para confirmarlo.</p>
          <Form>
            <Row className="mb-3">
              <Col md={6} className='mb-2'>
                <Form.Group controlId="formNombre" id='section-turnos'>
                  <Form.Control type="text" placeholder="Nombre y apellido" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="E-mail" required  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="Telefono">
                  <Form.Control type="tel" placeholder="Telefono" required />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="tipoEstudio">
                  <Form.Select required>
                    <option value="">Elegir estudio</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formMessage">
                <Form.Select required>
                    <option value="">Elegir Medico</option>
                    
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formMessage">
                  <Form.Control as="textarea" rows={3} placeholder="Message" required />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Solicitar Turno
            </Button>
          </Form>
        </Col>
        
        <Col lg={6} className="mt-4 mt-lg-0">
          <h2>Preguntas Frecuentes</h2>
          <hr className="w-25"/>
          <p>Algunas de las preguntas que nuestros pacientes suelen tener...</p>
          <Accordion className='mt-4'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Que es un estudio de alta complejidad?</Accordion.Header>
              <Accordion.Body>
              Son estudios de Resonancia Magnética, Tomografía Computada ó Mamografía Digital que profundizan en la exploración diagnóstica para una evaluación mas completa de los tejidos..
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Es necesaria internacion?</Accordion.Header>
              <Accordion.Body>
              No. Los estudios se realizan de manera ambulatoria, es decir que el paciente se va el mismo día que se realiza la práctica. Las prácticas pueden durar entre 45 minutos y 1 hora dependiendo el estudio.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Que preparacion debo realizar?</Accordion.Header>
              <Accordion.Body>
                Depende el estudio a realizarse.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Cuando recibire mis resultados?</Accordion.Header>
              <Accordion.Body>
              Los resultados suelen estar disponibles entre 24 y 48 horas después del examen. Su médico recibirá los resultados y los discutirá con usted en su cita de seguimiento.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Mi medico realizo un pedido ¿todavia sirve?</Accordion.Header>
              <Accordion.Body>
              Las órdenes ó prescripciones médicas tienen una validez de 30 días. Debiendo contar con la siguiente información: Datos del paciente y obra social, práctica a realizar, diagnóstico, fecha, firma y sello del médico especialista que lo deriva.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Section2