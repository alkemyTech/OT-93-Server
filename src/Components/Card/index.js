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

import placeholder from '../../images/image-placeholder.png';

const Component = ({ data }) => {
  let cardText;
  let textNoHtml;
  if (get(data, 'description')) {
    cardText = get(data, 'description');
    textNoHtml = cardText.replace(/<[^>]+>/g, '');
  } else {
    textNoHtml = 'empty';
  }

  return (
  <Col>
      <Card className="Card">
        <CardImg top src={get(data, 'image') || placeholder} alt="Card image" className="cardImage" />
        <CardBody>
          <CardTitle tag="h5">{get(data, 'name')}</CardTitle>
          <CardText>{textNoHtml}</CardText>
        </CardBody>
      </Card>
  </Col>
  );
};

Component.propTypes = {
  data: PropTypes.object,
};

export default Component;
