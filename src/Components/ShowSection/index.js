/* eslint-disable no-console */
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import chunk from 'lodash/chunk';
import map from 'lodash/map';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Title from '../Title';
import Card from '../Card';

const index = ({
  title, titleClass, subtitle, subtitleClass, list, cardNumber,
}) => {
  const data = chunk(list.documents, cardNumber);

  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    if (value < data.length - 1) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };

  const decrementHandler = () => {
    if (value <= 0) {
      setValue(data.length - 1);
    } else {
      setValue(value - 1);
    }
  };
  return (
    <Container className="show-Section">
      <Row className="d-flex col-lg-12 mx-auto mt-3">
        <Col>
          <Title text={title} className={titleClass} />
        </Col>
      </Row>
      <Row className="d-flex col-lg-12 mx-auto mt-4">
        <Col>
          <Title text={subtitle} className={subtitleClass} />
        </Col>
      </Row>
      <Row className="col-lg-12 mx-auto mt-5">
    {isEmpty(list) ? null : map(data[value], (e) => <Card data={e} />)}
      </Row>
     {list ? (
        <Row>
        <HiArrowSmLeft className="left-Arrow" onClick={() => decrementHandler()} />
        <HiArrowSmRight className="right-Arrow" onClick={() => incrementHandler()} />
        </Row>
     ) : null}
    </Container>
  );
};

index.propTypes = {
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleClass: PropTypes.string.isRequired,
  list: PropTypes.shape({}).isRequired,
};

index.defaultProps = {
  title: 'default Title',
  titleClass: 'h1',
  subtitle: 'default Subtitle',
  subtitleClass: 'h3',
};

export default index;
