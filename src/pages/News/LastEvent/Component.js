import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LastEvent from '../../../Components/LastEvent';
import { LASTEVENT } from '../../../utils/constants';

const Component = () => (
  <Container>
    <Row>
      <Col>
        <LastEvent text={LASTEVENT} />
      </Col>
    </Row>
  </Container>
);

export default Component;
