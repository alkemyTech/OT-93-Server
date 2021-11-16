import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ThankYou from '../../Components/ThankYou';
import { THANK_YOU } from '../../utils/constants';

const Component = () => (
  <Container>
    <Row>
      <Col>
        <ThankYou text={THANK_YOU} />
      </Col>
    </Row>
  </Container>
);

export default Component;
