import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as foodyService from '../../services/foodyService'
import  MultiSelectForm  from './MultiSelectForm';
import Select from 'react-select';


const Search = ({values, isMulti, setFieldValue}) => {
    const [foodTypes, setFoodTypes]= useState([]);
    const [restaurantTypes, setRestaurantTypes]= useState([]);
    const arr =[1,2]
    useEffect(() => {
        foodyService.getAllFoodTypes().then(result=>{
            // map(result =>{
            // setFoodTypes(arr)
            setFoodTypes(result.data)
        }
            // })
        )

        foodyService.getAllRestaurantTypes().then(result =>{
            setRestaurantTypes(result.data);
        })
       
    }, [])

    return(
        <Form>
            <label>What kind of cuisine do you want?</label>
            {/* <MultiSelectForm 
                // component={} 
                // component="select"
                name="cuisine" 
                // defaultValue={'DEFAULT'} 
                style={{display: "inline-block"}} 
                className="custom-select" 
                onChange={setFieldValue}
                isMulti={true}
                options={foodTypes}
            /> */}
                {/* <option value="DEFAULT" disabled>Choose your cuisine ...</option>
                {foodTypes.map(item => (
                <option key={item.id} value={item.food_type}>
                    {item.food_type}
                </option>
                ))} */}
            {/* </Field> */}

            <label>What kind of cuisine do you want?</label>
            <Select
            className="custom-select" 
            options={arr}
            multi={true}
            // onChange={handleChange}
            value={arr}
        />
            <label>What kind of restaurant do you want?</label>
            <Field component="select" name="names" defaultValue={'DEFAULT'} style={{display: "inline-block"}}>
                    <option value="DEFAULT" disabled>Choose your restaurant type ...</option>
                {restaurantTypes.map(item => (
                <option key={item.id} value={item.type_name}>
                    {item.type_name}
                </option>
                ))}
            </Field>
        </Form>
    );
}

export const SearchForm = withFormik({
    mapPropsToValues(){
    }, handleSubmit(){

    }
})(Search)