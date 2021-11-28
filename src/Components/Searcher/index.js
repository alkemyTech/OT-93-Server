import React from 'react';
import {
  Col, Row, Input, InputGroup, InputGroupText,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

const Component = ({ fetchDebounce, fetchRequested }) => {
  const handleChangeDebounce = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      fetchDebounce({ search: value });
    } else {
      fetchRequested();
    }
  };

  return (
    <Row className="m-5 justify-content-center">
      <Col md={6}>
        <InputGroup size="lg">
          <InputGroupText>
            {' '}
            <BsSearch />{' '}
          </InputGroupText>
          <Input
            type="text"
            onChange={handleChangeDebounce}
            name="debounceSearch"
            placeholder="Buscar"
            class="form-control"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Component;

Component.propTypes = {
  fetchDebounce: PropTypes.func.isRequired,
  fetchRequested: PropTypes.func.isRequired,
};
