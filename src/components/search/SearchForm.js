import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as foodyService from '../../services/foodyService'
import  MultiSelectForm  from './MultiSelectForm';

import _ from 'lodash';


const Search = ({ setFieldValue, setFieldTouched }) => {
    useEffect(() => {
        foodyService.getAllFoodTypes().then(result=>{
            setFoodTypes(result.data)
        })

        foodyService.getAllRestaurantTypes().then(result =>{
            setRestaurantTypes(result.data);
        })
    }, [])

    const [foodTypes, setFoodTypes]= useState([]);
    const [restaurantTypes, setRestaurantTypes]= useState([]);

    const distance = [
        {value: 3, label: "< 3"},
        {value: 5, label: "< 5"},
        {value: 10, label: "< 10"},
        {value: 20, label: "< 20"},
    ]
   
    const formField=[
        {
            name: 'cuisine',
            options: foodTypes.map((option) => ({
                value: option,
                label: option.food_type
            })), 
            isMulti: true,
            label: 'What kind of cuisine do you want?',
            key: 1
        },
        {
            name: 'restaurantTypes',
            options: restaurantTypes.map((option) => ({
                value: option,
                label: option.type_name
            })), 
            isMulti: true,
            label: 'What kind of restaurant do you want?',
            key: 2
        },
        {
            name: 'distance',
            options: distance,
            isMulti: false,
            label: 'How far?',
            key: 3
        }
    ]

    const FormRender=()=>{
        return (
            _.map(formField, ({options, isMulti, label, key, name})=>{
             return (
                <MultiSelectForm 
                    key={key}
                    options={options} 
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    style={{display: "inline-block"}}
                    isMulti={isMulti}
                    label={label}
                    name={name}
                />
            )
        }))
    }

    return(
        <Form>
            {FormRender()}
            <button className="btn waves-effect waves-light" type="submit">Submit
            <i className="material-icons right">send</i>
        </button>
        </Form>
    );
}

export const SearchForm = withFormik({
    mapPropsToValues({cuisines, restaurantTypes, distance}){
        return {
            cuisines: cuisines || [],
            restaurantTypes: restaurantTypes || [],
            distance: distance || 10
        }
        
    }, handleSubmit(values, {cuisines, restaurantTypes, distance}){
        const payload = [{
            cuisines: values.cuisines.map(r => r.value),
            restaurantTypes: values.restaurantTypes.map(r => r.value),
            distance: values.distance.value
        }]
        console.log("This is values after submit: "+JSON.stringify(payload))
    }
})(Search)