import React from 'react';
import {
  Row, Col, Card, CardText,
} from 'reactstrap';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { noHTML } from '../../utils';
import Title from '../Title/index';

const Component = ({ fields }) => {
  const info = get(fields, 'description') || get(fields, 'content');

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
                {noHTML(info)}k
              </CardText>
          </Card>
        </Col>
    </Row>
  );
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
};

export default Component;
