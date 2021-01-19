import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as actions from '../services/authService'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {compose} from "redux"; 

const Loginform = ({errors, touched})=>{
    return(
        <Form>
        <div>{ errors.permission }</div>
        <div>Username </div>
        <Field name="username" type="text" placeholder="username"/>
        <div>{ touched &&errors.username}</div>
        <div>Password </div>
        <Field name="password" type="password" placeholder="password"/>
        <div>{touched && errors.password}</div>
        <button type="submit">Login</button>
        </Form>
    )
}

const Formik = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    }, async handleSubmit(values, { props }){
        console.log("handlesubmit being clicked");
        await props.login(values.username, values.password);
        props.history.push('/');
    }
})(Loginform)

export default compose(withRouter, connect(null, actions)) (Formik)
