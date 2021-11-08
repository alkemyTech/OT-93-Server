import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import get from 'lodash/get';

import placeholder from '../../images/image-placeholder.png';

const Component = ({ data }) => (
  <Row>
    <Col>
      <Card>
        <CardImg top width="100%" src={data.url ? data.url : placeholder} alt="Card image" />
        <CardBody>
          <CardTitle tag="h5">{get(data, 'description')}</CardTitle>
          <CardText>{get(data, 'description')}</CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

Component.propTypes = {
  data: PropTypes.object,
};

export default Component;
