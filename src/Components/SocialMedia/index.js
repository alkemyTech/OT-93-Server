import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { LinkedinCompanyProfile } from 'react-social-plugins';

export default function SocialMedia() {
  return (
    <Container>
      <Row>
        <Col>
          <LinkedinCompanyProfile
            lang="en_US"
            companyId={1231231231}
            format="inline" // Or "hover"
            text="Company name" // text to show in "hover" format
          />
        </Col>
        <Col>
          <LinkedinCompanyProfile
            lang="en_US"
            companyId={123123123}
            format="inline" // Or "hover"
            text="Company name" // text to show in "hover" format
          />
        </Col>
      </Row>
    </Container>
  );
}
