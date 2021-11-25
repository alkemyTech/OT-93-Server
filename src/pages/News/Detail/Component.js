import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Skeleton from '../../../Components/Skeleton';
import Detail from '../../../Components/Details';

const Component = ({
  fields,
  fetchNewsRequested,
  match,
}) => {
  const id = match.params.id;
  const [onLoad, setOnLoad] = useState(false);
  const content = document.querySelector('.card-text');
  const options = {
    threshold: 1,
    rootMargin: '-20px',
  };

  const observer = new IntersectionObserver(((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        content.style.opacity = 0;
        return;
      }
      content.style.opacity = 1;
      observer.unobserve(entry.target);
    });
  }), options);

  if (content) observer.observe(content);

  useEffect(() => {
    fetchNewsRequested({ id });
  }, [fetchNewsRequested]);

  useEffect(() => {
    if (fields.content.length) setOnLoad(true);
  }, [onLoad, fields]);

  return (
    <Container>
      <Row>
        <Col>
        {onLoad ? (
          <Detail
            fields={fields}
          />
        ) : (
          <Skeleton />
        )}
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fields: PropTypes.object.isRequired,
  fetchNewsRequested: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
};

export default Component;
