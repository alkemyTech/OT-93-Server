import React from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Component = () => (
  <Row>
    <Col>
      <Skeleton height="100%" style={{ margin: '2em 0 2em 0' }} />
      <Skeleton width="50%" height="30%" style={{ margin: '1em 0 1em 0' }} />
      <Skeleton height="80%" style={{ margin: '2em 0 2em 0' }} />
      <Skeleton height="80%" style={{ margin: '2em 0 2em 0' }} />
    </Col>
  </Row>
);

export default Component;
