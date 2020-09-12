import React from 'react';
import Button from '../components/atom/Button';
import Input from '../components/atom/Input';
import Select from '../components/atom/Select';

function useFormGroup(props) {
  const inputProps = { ...props };
  delete inputProps.label;

  const element = () => {
    switch (props.type) {
      case 'select':
        return <Select {...inputProps} />;
      case 'button':
      case 'submit':
      case 'reset':
        return <Button {...inputProps} />;
      default:
        return <Input {...inputProps} />;
    }
  };
  return element;
}

export default useFormGroup;
