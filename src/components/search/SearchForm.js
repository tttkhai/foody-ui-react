import React, {useState, useEffect} from 'react';
import { withFormik, Form } from "formik";
import * as foodyService from '../../services/foodyService'
import  MultiSelectForm  from './MultiSelectForm';
import ResultListFromSearch from './ResultListFromSearch';

import _ from 'lodash';


const Search = ({ status, setFieldValue, setFieldTouched }) => {
    useEffect(() => {
        foodyService.fetchFoodTypes().then(result=>{
            setFoodTypes(result.data)
        })

        foodyService.fetchRestaurantTypes().then(result =>{
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
            name: 'foodTypes',
            options: foodTypes.map((option) => ({
                value: option,
                label: option.food_type
            })), 
            isMulti: true,
            label: 'What kind of food type do you want?',
            key: 1
        },
        {
            name: 'restaurantTypes',
            options: restaurantTypes.map((option) => ({
                value: option,
                label: option.type_name
            })), 
            isMulti: true,
            label: 'What kind of cuisine do you want?',
            key: 2
        },
        {
            name: 'distance',
            options: distance,
            isMulti: false,
            label: 'How far? (in miles)',
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

    const ResultListFromSearchRender=()=>{
        if(status && status.restaurant) {
            return (<ResultListFromSearch restaurant={status.restaurant}/>)
        }
    }

    return(
        <>
        <Form>
            {FormRender()}
            <button className="btn waves-effect waves-light" type="submit">Submit
            <i className="material-icons right">send</i>
        </button>
        </Form>
        {ResultListFromSearchRender()}
        </>
    );
}

const SearchForm = withFormik({
    mapPropsToValues({foodTypes, restaurantTypes, distance}){
        return {
            foodTypes: foodTypes || [],
            restaurantTypes: restaurantTypes || [],
            distance: distance || 10
        }
    }, handleSubmit(values, {setStatus, props}){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const payload = {
                    food_types: values.foodTypes.map(r => r.value.id),
                    cuisine: values.restaurantTypes.map(r => r.value.id),
                    distance: values.distance.value,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                console.log("This is values after submit: "+JSON.stringify(payload))

                foodyService.submitSearchForm(payload).then(res=>{
                    setStatus({restaurant: res.data})
                });
            })
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
})(Search)

export default (SearchForm);