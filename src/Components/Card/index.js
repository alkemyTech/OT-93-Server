/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
} from 'reactstrap';
import get from 'lodash/get';
import '../../css/Card.css';
import isEmpty from 'lodash/isEmpty';

import placeholder from '../../images/image-placeholder.png';

const Component = ({ data }) => {
  const cardText = get(data, 'description');
  let textNoHtml = cardText.replace(/<[^>]+>/g, '');

  return (
  <Col>
      <Card className="Card">
        <CardImg top src={get(data, 'image') || placeholder} alt="Card image" className="card-Image" />
        <CardBody>
          <CardTitle tag="h5">{get(data, 'name')}</CardTitle>
          <CardText>{isEmpty(textNoHtml) ? textNoHtml = 'empty' : textNoHtml}</CardText>
        </CardBody>
      </Card>
  </Col>
  );
};

Component.propTypes = {
  data: PropTypes.object,
};

export default Component;
