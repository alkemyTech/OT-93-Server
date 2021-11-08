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
        <Row>
          {data?.length > 0 ? (
            map(data, (element, index) => (
              <Col>
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
              </Col>
            ))
          ) : (
            <Col>
              <p>No hay novedades</p>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  </Container>
);

News.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default News;
