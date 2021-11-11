import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import { get, isEmpty } from 'lodash';
import Title from '../../../Components/Title';

const Component = ({
  fetchOrganizationRequested,
  organization,
}) => {
  useEffect(() => {
    fetchOrganizationRequested();
  }, [fetchOrganizationRequested]);

  const about = get(organization, 'long_description');

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Title
              text={<h1>Nosotros</h1>}
              className="mt-3 pb-5"
            />
            {isEmpty(!about) ? about?.replace(/<[^>]+>/g, '') : 'empty'}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  fetchOrganizationRequested: PropTypes.func.isRequired,
  organization: PropTypes.isRequired,
};

export default Component;
