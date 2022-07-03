import React from 'react';
import { Formik, Field } from 'formik';
import { Form } from './ContactFormikForm.styled';
// import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

function ContactFormikForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ contact: values, onSuccess: resetForm });
    // form clears only on success
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          {'Name '}
          <Field type="text" name="name" />
        </label>
        <label>
          {'Phone '}
          <Field type="tel" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactFormikForm;
