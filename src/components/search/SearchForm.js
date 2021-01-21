import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as foodyService from '../../services/foodyService'


const Search = ({values}) => {
    const [foodTypes, setFoodTypes]= useState([]);
    const [restaurantTypes, setRestaurantTypes]= useState([]);

    useEffect(() => {
        foodyService.getAllFoodTypes().then(result =>{
            setFoodTypes(result.data);
        })

        foodyService.getAllRestaurantTypes().then(result =>{
            console.log(result.data)
            setRestaurantTypes(result.data);
        })
       
    }, [])

    return(
        <Form>
            <label>What kind of cuisine do you want?</label>
            <Field component="select" name="names" defaultValue={'DEFAULT'} style={{display: "inline-block"}}>
                    <option value="DEFAULT" disabled>Choose your cuisine ...</option>
                {foodTypes.map(item => (
                <option key={item.id} value={item.food_type}>
                    {item.food_type}
                </option>
                ))}
            </Field>
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