import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import Title from '../../Components/Title/index';
// import Slick from '../../Components/Slick/index';
import {
  CONTACTS,
} from '../../utils/constants';
// import { getRoutes } from '../../utils';
// import Slider from '../../Components/Slider';
import '../../css/Home.css';
import BackForm from '../../Components/BackForm';

// const { publicRoutes } = getRoutes('mainRoutes');

const Component = ({

  fetchContactRequested,

}) => {
  useEffect(() => {
    fetchContactRequested();
  }, [fetchContactRequested]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Title
              text={<h1>{CONTACTS}</h1>}
              className="mt-3 pb-5"
            />
          </Col>
          <BackForm />
        </Row>
      </Container>
    </>
  );
};

Component.propTypes = {
  fetchContactRequested: PropTypes.func.isRequired,
  contact: PropTypes.array.isRequired,
};

export default Component;
