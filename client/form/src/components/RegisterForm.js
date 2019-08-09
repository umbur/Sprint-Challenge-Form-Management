import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);
    return (
      <div>
        <h1>User Form</h1>
        <Form>
          <Field type="text" name="username" placeholder="User Name" />
          {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
          <p className="error">{errors.password}</p>)}
          <label>Term Of Service</label>
          <Field type="checkbox" name="tos" checked={values.tos} />
          <button type="submit">Submit!</button>
        </Form>
      </div>

     
    );
  };

  const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || '',
        password: password || '',
      };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
      }),
  
    handleSubmit(values, { setStatus }) {
        //console.log('values:', values)
        axios
          .post('http://localhost:5000/api/register', values)
          .then(res => {
            setStatus(res.data);
            console.log(res.data)
          })
          .catch(err => console.log(err.response));
      }
  })(RegisterForm);


export default FormikUserForm;