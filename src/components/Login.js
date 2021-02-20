import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as actions from '../services/authService'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {compose} from "redux"; 
import * as Yup from 'yup';

const Loginform = ({errors, touched})=>{
    return(
        <Form>
        <div >{ errors.permission }</div>
        <Field name="username" type="text" placeholder="username"/>
        <div className="error">{ touched &&errors.username}</div>
        <div>Password </div>
        <Field name="password" type="password" placeholder="password"/>
        <div className="error">{touched && errors.password}</div>
        <button className="btn waves-effect waves-light" type="submit">Login
            <i className="material-icons right">send</i>
        </button>
        </Form>
    )
}

const Formik = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    }, validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
    }), async handleSubmit(values, { props }){
        await props.login(values.username, values.password);
        props.history.push('/');
    }
})(Loginform)

export default compose(withRouter, connect(null, actions)) (Formik)
