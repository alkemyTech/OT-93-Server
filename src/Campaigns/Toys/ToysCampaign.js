import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Slider from '../../Components/Slider';

const ToysCampaign = () => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        <Container>
          <Slider />
        </Container>
      </Col>
    </Row>
    <Row>
      <Col className="mt-4">
        <Content />
      </Col>
    </Row>
    <Row>
      <Col className="mt-4">
        <Footer />
      </Col>
    </Row>
  </Container>
);

export default ToysCampaign;
