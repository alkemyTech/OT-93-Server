import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { getRoutes } from '../../../utils';
import BackForm from '../../../Components/BackForm';
import { REQUIRED } from '../../../utils/constants';
import Title from '../../../Components/Title';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
  title,
  form,
  fields,
  submitNewsRequested,
  fetchNewsRequested,
  match,
  history: { push },
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name || !values.image || !values.content) {
      errors.name = REQUIRED;
      errors.image = REQUIRED;
      errors.content = REQUIRED;
    }
    return errors;
  };

  const goBackToList = () => push(backOfficeRoutes.news.list);
  const id = match.params.id;

  useEffect(() => {
    fetchNewsRequested({ id });
  }, [fetchNewsRequested]);

  return (
    <>
      <Title text={title} />
      <BackForm
        key="NewsForm"
        form={form}
        fields={fields}
        submit={submitNewsRequested}
        fetch={fetchNewsRequested}
        id={id}
        validate={validate}
        goBack={goBackToList}
      />
    </>
  );
};

export default Component;

Component.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  submitNewsRequested: PropTypes.func.isRequired,
  fetchNewsRequested: PropTypes.func.isRequired,
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
  title: 'Novedades',
};
