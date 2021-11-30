import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

// valadating entry of Doctor Profile update
export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    PhoneNumber: Yup.string()
      .min(10, 'Must be 10 Digit')
      .max(10, 'Must be 10 Digit')
      .required('Required'),
    Department: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    Experience: Yup.string()
      .max(20, 'Must be 2 Digit Example: 04')
      .required('Required'),
    Address: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    City: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        PhoneNumber: '',
        Department: '',
        Experience: '',
        Address: '',
        City: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Doctor Profile Update</h1>
          
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="PhoneNumber" name="PhoneNumber" type="text" />
            <TextField label="Department" name="Department" type="text" />
            <TextField label="Experience" name="Experience" type="text" />
            <TextField label="Address" name="Address" type="text" />
            <TextField label="City" name="City" type="text" />
            
            <button className="btn btn-dark mt-3" type="submit" >SAVE</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

          </Form>
          

          
        </div>
      )}
    </Formik>
  )
}
