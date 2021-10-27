import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import map from "lodash/map";

const News = ({ data }) => {
  return (
    <Row>
      <Col>
        <h1>Novedades</h1>
        <div>
          {/* Cambiar titulo por componente para mostrar titulos */}
          <h1>Listado de Novedades</h1>

          {data.length > 0 ? (
            map(data, (element, index) => {
              return (
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
              );
            })
          ) : (
            <p>No hay novedades</p>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default News;
