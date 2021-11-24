/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import {
  REQUIRED, SHORT_NAME, INVALID_IMAGE, INVALID_URL, MEMBERS,
} from '../../../utils/constants';
import Title from '../../../Components/Title';

const Component = ({
  title,
  form,
  fields,
  submitMembersRequested,
  fetchMembersRequested,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    const checkUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (values.name.length < 4) {
      errors.name = SHORT_NAME;
    }
    if (!/\.(jpg|png)$/i.test(values.image)) {
      errors.image = INVALID_IMAGE;
    }
    if (!checkUrl.test(values.facebookUrl)) {
      errors.facebookUrl = INVALID_URL;
    }
    if (!checkUrl.test(values.linkedinUrl)) {
      errors.linkedinUrl = INVALID_URL;
    }
    if (values.content) {
      errors.content = REQUIRED;
    }
    return errors;
  };

  const goBackToList = () => push('/');
  const id = match.params.id;

  useEffect(() => {
    fetchMembersRequested({ id });
  }, [fetchMembersRequested]);

  return (
    <Container>
      <Row>
        <Col>
          <Title text={<h2>{title}</h2>} />
          <BackForm
            key="MembersForm"
            form={form}
            fields={fields}
            submit={submitMembersRequested}
            fetch={fetchMembersRequested}
            id={id}
            validate={validate}
            goBack={goBackToList}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Component;

Component.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  submitMembersRequested: PropTypes.func.isRequired,
  fetchMembersRequested: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string,
};

Component.defaultProps = {
  match: {},
  title: MEMBERS,
};
