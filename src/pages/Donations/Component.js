import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Donation from '../../Components/Donation/index';
import { CONTRIBUTE } from '../../utils/constants';

const Component = () => (
  <Container>
    <Row>
      <Col>
        <Donation text={CONTRIBUTE} />
      </Col>
    </Row>
  </Container>
);

export default Component;
