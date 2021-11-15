// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import BackForm from '../../../Components/BackForm';
import { REQUIRED, MEMBERS } from '../../../utils/constants';
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
    if (!values.name || !values.image || !values.content
      || !values.facebookUrl || !values.linkedinUrl) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.content = REQUIRED;
      errors.facebookUrl = REQUIRED;
      errors.linkedinUrl = REQUIRED;
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
          <Title text={<h1>{title}</h1>} />
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
