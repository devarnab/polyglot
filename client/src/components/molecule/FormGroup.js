import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useFormGroup from '../../hooks/useFormGroup';

const StyledFormGroup = styled.div`
  margin-bottom: 0.75em;
  label {
    display: block;
    margin-bottom: 0.5em;
  }
`;

function FormGroup(props) {
  const element = useFormGroup(props);
  return (
    <StyledFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      {element()}
    </StyledFormGroup>
  );
}

FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormGroup;
