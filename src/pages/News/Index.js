import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';
import map from 'lodash/map';

const News = ({ data, title }) => (
  <Container>
    <Row>
      <Col>
        <h1>{title}</h1>
        <div>
          {data.length > 0 ? (
            <>
              {/* Cambiar h1 por componente para mostrar titulos */}
              <h1>Listado de Novedades</h1>
              {map(data, (element, index) => (
                <Card key={index}>
                  <CardImg
                    top
                    width="100%"
                    src={element.url}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{element.title} </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {element.subtitle}
                    </CardSubtitle>
                    <CardText>{element.text}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              ))}
            </>
          ) : (
            <p>No hay novedades</p>
          )}
        </div>
      </Col>
    </Row>
  </Container>
);

News.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,

};

export default News;
