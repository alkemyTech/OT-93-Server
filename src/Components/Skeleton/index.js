import React from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Component = () => (
  <Row>
    <Col>
      <Skeleton style={{ margin: '2em 0 2em 0', minHeight: '40vh' }} />
      <Skeleton
        width="50%"
        style={{ margin: '1em 0 1em 0', minHeight: '10vh' }}
      />
      <Skeleton style={{ margin: '2em 0 2em 0', minHeight: '30vh' }} />
      <Skeleton style={{ margin: '2em 0 2em 0', minHeight: '30vh' }} />
    </Col>
  </Row>
);

export default Component;
