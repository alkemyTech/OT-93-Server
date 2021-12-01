/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { TwitterTweet } from 'react-social-plugins';
import { ONG_NAME } from '../../utils/constants';

export default function SocialMedia() {
  return (

    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <Link
            to="/"
            style={{ textDecoration: 'none', fontWeight: '600', fontSize: '36px' }}
            className="d-flex align-items-center justify-content-center"
          >
          <AiFillLinkedin style={{ marginRight: '4px' }} /> {ONG_NAME}
          </Link>
          <Link
            to="/"
            style={{ textDecoration: 'none', fontWeight: '600', fontSize: '36px' }}
            className="d-flex align-items-center justify-content-center"
          >
          <AiFillTwitterSquare style={{ marginRight: '4px' }} /> {ONG_NAME}
          </Link>
        </Col>
        <Col>
          <TwitterTweet
            align="left"
            coversation="none"
            tweetId="1457709181708951558"
            theme="light"
            width={325}
          />
        </Col>
      </Row>
    </Container>
  );
}
