/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import { get } from 'lodash';
import Title from '../../../Components/Title';
import SocialMedia from '../../../Components/SocialMedia';
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
        <Row className="justify-content-center" >
          <Col className="mb-5" lg={8}>
            <Title
              text={<h1>{US}</h1>}
              className="mt-3 pb-5"
            />
            {about && noHTML(about)}
          </Col>

          <SocialMedia />
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  fetchOrganizationRequested: PropTypes.func.isRequired,
  organization: PropTypes.object,
};

export default Component;
