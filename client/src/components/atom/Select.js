import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 0.0625em solid #aeb6bf;
  padding: 0.5em 0.75em;
  font-size: 1em;
`;

function Select(props) {
  const selectProps = { ...props };
  delete selectProps.options;

  return (
    <StyledSelect {...selectProps}>
      {props.options.map((option) => {
        console.log(option);
        return (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        );
      })}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number | PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default Select;
