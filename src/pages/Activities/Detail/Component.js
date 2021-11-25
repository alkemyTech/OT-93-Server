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
  fetchActivitiesRequested,
  match,
}) => {
  const id = match.params.id;
  console.log(fields, 'fields');

  useEffect(() => {
    fetchActivitiesRequested({ id });
  }, [fetchActivitiesRequested]);

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
