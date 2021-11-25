import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Container } from 'reactstrap';
import OrganizationSection from '../../../Components/OrganizationSection';

const Component = ({ form, fetchOrganizationRequested }) => {
  useEffect(() => {
    fetchOrganizationRequested();
  }, [fetchOrganizationRequested]);

  return (
  <Container>
      <OrganizationSection form={form} />
  </Container>
  );
};

Component.propTypes = {
  form: PropTypes.shape({}).isRequired,
  fetchOrganizationRequested: PropTypes.func.isRequired,
};

export default Component;
