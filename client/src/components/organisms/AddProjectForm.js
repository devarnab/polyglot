import React, { useState } from 'react';
import DynamicFormGroup from '../molecule/DynamicFormGroup';
import FormGroup from '../molecule/FormGroup';

function AddProjectForm() {
  const initialState = {
    appName: '',
    appSlug: '',
    langNames: '',
  };
  const [state, setState] = useState(initialState);

  const changeHandler = (event) => {
    console.log(state);
    const { name, value } = event.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted');
  };

  const appNameProps = {
    id: 'appName',
    name: 'appName',
    label: 'Application Name *',
    type: 'input',
    onChange: changeHandler,
    value: state.appName,
  };
  const appSlugProps = {
    id: 'appSlug',
    name: 'appSlug',
    label: 'Application Slug *',
    type: 'input',
    onChange: changeHandler,
    value: state.appSlug,
  };
  const langNameProps = {
    id: 'LangName',
    name: 'langNames',
    label: 'Language Name *',
    type: 'input',
    onChange: changeHandler,
    value: state.langNames,
  };
  const submitProps = {
    label: '',
    type: 'submit',
    primary: true,
  };
  const resetProps = {
    label: '',
    type: 'reset',
    primary: true,
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormGroup {...appNameProps} />
      <FormGroup {...appSlugProps} />
      <DynamicFormGroup {...langNameProps} />
      <FormGroup {...submitProps}>Save</FormGroup>
      <FormGroup {...resetProps}>Reset</FormGroup>
    </form>
  );
}

export default AddProjectForm;
