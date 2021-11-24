import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Donation from '../../Components/Donation';
import { CONTRIBUTE_TITLE, CONTRIBUTE_BUTTON } from '../../utils/constants';

const Component = () => (
  <Container>
    <Row>
      <Col>
        <Donation
          text={CONTRIBUTE_TITLE}
          labelButton={CONTRIBUTE_BUTTON}
          url={process.env.REACT_APP_MERCADO_PAGO}
        />
      </Col>
    </Row>
  </Container>
);

export default Component;
