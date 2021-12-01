import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import { fetchSlideRequested } from '../../core/state/Slides/actions';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Slider from '../../Components/Slider';


const SchoolCampaign = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlideRequested());
  }, [fetchSlideRequested]);

  const slides = useSelector((state) => state.Slides);

  return (
  <div>
          <Header style={{ width: '100%' }} />
      <Row>
        <Col>
          <Container>
            <Slider items={slides.list.documents} />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <Content />
        </Col>
      </Row>
          <Footer />
  </div>

  );
};

export default SchoolCampaign;
