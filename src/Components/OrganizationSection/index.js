import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Title from '../Title';
import { EDIT } from '../../utils/constants';
import { getRoutes } from '../../utils';

const index = ({ form }) => {
  const { backOfficeRoutes } = getRoutes('mainRoutes');

  return (
    <Row className="org-section">
        <Col>
          <Title text={<h2>{get(form, 'name')}</h2>} className="mb-2" />
          <img src={get(form, 'logo')} alt={get(form, 'id')} className="mb-2" />
          <p>{get(form, 'short_description')}</p>
          <Link
            to={backOfficeRoutes.organizationform}
            color="primary"
            className="btn header-button-log outline m-1 "
          >
            { EDIT }
          </Link>
        </Col>
    </Row>
  );
};

index.propTypes = {
  form: PropTypes.shape({}).isRequired,
};

export default index;
