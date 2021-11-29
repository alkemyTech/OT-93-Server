/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { LinkedinCompanyProfile, TwitterTweet } from 'react-social-plugins';
import { ONG_NAME } from '../../utils/constants';

export default function SocialMedia() {
  return (
    <Container>
      <Row>
        <Col>
          <LinkedinCompanyProfile
            lang="en_US"
            companyId={3144678}
            format="inline"
            text={ONG_NAME}
          />
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
