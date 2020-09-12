import React from 'react';
import styled from 'styled-components';
import useFormGroup from '../../hooks/useFormGroup';
import Button from '../atom/Button';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const StyledFormGroup = styled.div`
  display: block;
  margin-bottom: 0.75em;
  div {
    display: flex;
    grid-gap: 0.5em;

    button {
      min-width: auto;
      padding: 0.5em 0;
      text-align: center;
      width: 3em;
    }
  }
  label {
    display: block;
    margin-bottom: 0.5em;
  }
`;

function DynamicFormGroup(props) {
  const element = useFormGroup(props);
  return (
    <StyledFormGroup>
      <label htmlFor={props.id}>{props.label}</label>
      <div>
        {element()}
        <Button primary type="button">
          <FaPlus />
        </Button>
        <Button danger type="button">
          <FaTrashAlt />
        </Button>
      </div>
    </StyledFormGroup>
  );
}

export default DynamicFormGroup;
