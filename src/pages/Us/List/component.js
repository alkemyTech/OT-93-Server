import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import get from 'lodash/get';
import TableList from '../../../Components/Table-Members';
import { MEMBERS } from '../../../utils/constants';

const Component = ({ fetchMembersRequested, list, table }) => {
  useEffect(() => {
    fetchMembersRequested();
  }, []);

  return (
    <Container fluid>
      <Row className="list-row">
        <Col sm="12" className="mr-2">
          <h4 className="text-center mb-3 my-1">{MEMBERS}</h4>
          <TableList
            documents={get(list, 'documents')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...table}
          />
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  fetchMembersRequested: PropTypes.func.isRequired,
  list: PropTypes.shape({}).isRequired,
  table: PropTypes.shape({}).isRequired,
};

export default Component;
