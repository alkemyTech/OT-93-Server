import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import get from 'lodash/get';
import '../../css/Card.css';
import isEmpty from 'lodash/isEmpty';
import { Empty } from '../../utils/constants';

import placeholder from '../../images/image-placeholder.png';

const Component = ({ data }) => {
  let cardText;
  let textNoHtml;
  if (get(data, 'description')) {
    cardText = get(data, 'description');
    textNoHtml = cardText?.replace(/<[^>]+>/g, '');
  } else {
    cardText = get(data, 'content');
    textNoHtml = cardText?.replace(/<[^>]+>/g, '');
  }
  return (
      <Col>
        <Card className="backoffice-card my-2">
          {get(data, 'image') ? (
          <CardImg
            top
            src={get(data, 'image') || placeholder}
            alt="Card image"
            className="card-Image"
          />
          ) : (
            get(data, 'icon')
          )}
          <CardBody>
            {get(data, 'name') && !get(data, 'label') && <CardTitle tag="h5">{get(data, 'name')}</CardTitle>}
            {textNoHtml && <CardText>{isEmpty(textNoHtml) ? Empty : textNoHtml}</CardText>}
            {get(data, 'label') && <Link to={get(data, 'url')} style={{ textDecoration: 'none' }}> <Button type="button" outline color="secondary">{get(data, 'label')}</Button> </Link>}
          </CardBody>
        </Card>
      </Col>
  );
};

Component.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Component;
