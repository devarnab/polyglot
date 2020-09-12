import React from 'react';
import DynamicFormGroup from '../molecule/DynamicFormGroup';
import FormGroup from '../molecule/FormGroup';

function AddProject() {
  const appNameProps = {
    id: 'appName',
    label: 'Application Name *',
    type: 'input',
  };
  const appSlugProps = {
    id: 'appSlug',
    label: 'Application Slug *',
    type: 'input',
  };
  const langNameProps = {
    id: 'LangName',
    label: 'Language Name *',
    type: 'input',
  };
  const submitProps = {
    label: '',
    type: 'submit',
    primary: true,
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormGroup {...appNameProps} />
      <FormGroup {...appSlugProps} />
      <DynamicFormGroup {...langNameProps} />
      <FormGroup {...submitProps}>Save</FormGroup>
    </form>
  );
}

export default AddProject;
