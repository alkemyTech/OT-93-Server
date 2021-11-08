import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import map from 'lodash/map';
import Title from '../../Components/Title';
import Card from '../../Components/Card';

const News = ({ fetchNewsRequested, data }) => {
  useEffect(() => {
    fetchNewsRequested();
  }, [fetchNewsRequested]);
  const { data: info } = data;
  const title = 'Novedades';
  const noNews = 'No hay novedades';
  return (
    <Container>
      <Row>
        <Col>
          <Title text={title} />
          <Row>
            {info?.length > 0 ? (
              map(info, (element) => <Card data={element} />)
            ) : (
              <Col>
                <p>{noNews}</p>
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
