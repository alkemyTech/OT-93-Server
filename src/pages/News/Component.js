/* eslint-disable react/no-children-prop */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Container, Spinner,
} from 'reactstrap';
import map from 'lodash/map';
import Title from '../../Components/Title';
import Card from '../../Components/Card';
import { NEWS } from '../../utils/constants';

const News = ({ fetchNewsRequested, data }) => {
  useEffect(() => {
    fetchNewsRequested();
  }, [fetchNewsRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <Title text={<h1>{NEWS}</h1>} />
          <Row>
            {data?.length > 0 ? (
              map(data, (element) => <Card data={element} />)
            ) : (
              <Col className="m-5">
                <Spinner children="" color="dark" className="spinner-loader m-5" />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

News.propTypes = {
  fetchNewsRequested: PropTypes.func.isRequired,
  title: PropTypes.string,
  data: PropTypes.object,
};

export default News;
