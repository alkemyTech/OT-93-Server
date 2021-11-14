import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import map from 'lodash/map';
import Title from '../../Components/Title';
import Card from '../../Components/Card';
import { NEWS, NO_NEWS } from '../../utils/constants';

const News = ({ fetchNewsRequested, data }) => {
  useEffect(() => {
    fetchNewsRequested();
  }, [fetchNewsRequested]);
  const { data: info } = data;
  return (
    <Container>
      <Row>
        <Col>
          <Title text={NEWS} />
          <Row>
            {info?.length > 0 ? (
              map(info, (element) => <Card data={element} />)
            ) : (
              <Col>
                <p>{NO_NEWS}</p>
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
