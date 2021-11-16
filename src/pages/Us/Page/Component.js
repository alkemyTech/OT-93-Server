import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import { get } from 'lodash';
import Title from '../../../Components/Title';
import USmembers from '../List';
import { US } from '../../../utils/constants';
import { noHTML } from '../../../utils';

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
          <Col className="mb-5">
            <Title
              text={<h1>{US}</h1>}
              className="mt-3 pb-5"
            />
            {about && noHTML(about)}
          </Col>
          <USmembers />
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
