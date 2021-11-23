import React from 'react';
import {
  Row, Col, Card, CardText,
} from 'reactstrap';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Title from '../Title/index';

// eslint-disable-next-line react/prop-types
const Component = ({ fields }) => {
  const info = get(fields, 'description') || get(fields, 'content');
  const textNoHtml = info?.replace(/<[^>]+>/g, '');

  // eslint-disable-next-line no-console
  console.log(fields, 'FIELDS');
  return (
    <Row className="my-5 py-5">
      <Col>
        <Card className="shadow-lg">
          <Title text={get(fields, 'name')} className="h1" />
          <img
            alt="Cardasd cap"
            src={get(fields, 'image')}
            width="80%"
            style={{ margin: 'auto' }}
          />
          <CardText className="mt-3 mb-2">
            {textNoHtml}
          </CardText>
        </Card>
      </Col>
    </Row>
  );
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;
