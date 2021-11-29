/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import map from 'lodash/map';
import { BsCardChecklist } from 'react-icons/bs';
import Card from '../Components/Card';
import { getNavigationBackOffice } from '../utils/selectors';
import '../css/Backoffice.css';

const ScreenDashboard = () => (
    <Container>
      <Row>
        <Col>
          <Row>
            {map(getNavigationBackOffice(), (element, index) => (
              <Card key={index} data={element} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
);

export default ScreenDashboard;
