import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as foodyService from '../../services/foodyService'
import  MultiSelectForm  from './MultiSelectForm';
import Select from 'react-select';


import axios from 'axios';
import { getAuthHeader } from '../../services/authService'


const Search = ({ values, isMulti, setFieldValue, setFieldTouched}) => {
    const [foodTypes, setFoodTypes]= useState([]);
    const [restaurantTypes, setRestaurantTypes]= useState([]);
    const distance = [
        {value: 3, label: "< 3"},
        {value: 5, label: "< 5"},
        {value: 10, label: "< 10"},
        {value: 20, label: "< 20"},
    ]
    function onChangeInput(value){
        console.log(value);
      }

    useEffect(() => {
        foodyService.getAllFoodTypes().then(result=>{
            setFoodTypes(result.data)
        })

        foodyService.getAllRestaurantTypes().then(result =>{
            setRestaurantTypes(result.data);
            console.log("resta"+JSON.stringify(result.data))
        })
    }, [])

    console.log("Check:"+JSON.stringify(foodTypes))
    return(
        <Form>
            <MultiSelectForm 
                options={foodTypes.map((option) => ({
                    value: option,
                    label: option.food_type
                }))} 
                onChange={onChangeInput}
                // onChange={setFieldValue}
                onBlur={setFieldTouched}
                style={{display: "inline-block"}}
                isMulti={true}
                defaultValue={'DEFAULT'}
                label={"What kind of cuisine do you want?"}
              />
            <MultiSelectForm 
                options={restaurantTypes.map((option) => ({
                    value: option,
                    label: option.type_name
                }))} 
                onChange={onChangeInput}
                // onChange={setFieldValue}
                onBlur={setFieldTouched}
                style={{display: "inline-block"}}
                isMulti={true}
                defaultValue={'DEFAULT'}
                label={"What kind of restaurant do you want?"}
              />
            <MultiSelectForm 
                options={distance} 
                onChange={onChangeInput}
                // onChange={setFieldValue}
                onBlur={setFieldTouched}
                style={{display: "inline-block"}}
                isMulti={true}
                defaultValue={'DEFAULT'}
                label={"How far?"}
              />
        </Form>
    );
}

export const SearchForm = withFormik({
    mapPropsToValues({cuisines, restaurantTypes}){
        return {
            cuisines: cuisines || [],
            restaurantTypes: restaurantTypes || []
        }
        
    }, handleSubmit(values){
        console.log("This is values after submit: "+JSON.stringify(values))
    }
})(Search)