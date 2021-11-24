/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Container,
} from 'reactstrap';
import Detail from '../../../Components/Details';

const Component = ({
  fields,
  fetchNewsRequested,
  match,
}) => {
  const id = match.params.id;

  useEffect(() => {
    fetchNewsRequested({ id });
  }, [fetchNewsRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <Detail
            fields={fields}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Component;