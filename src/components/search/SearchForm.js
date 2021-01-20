import React, {useState} from 'react';
import { withFormik, Form, Field } from "formik";


const Search = ({values}) => {
    const [foodTypes, setFoodTypes]= useState();
    return(
        <Form>
            <label>What kind of cuisine do you want?</label>
            <Field component="select" name="names" style={{display: "inline-block"}}>
                <option key="1" value="1">Item 1</option>
                <option key="2" value="2">Item 3</option>
                <option key="3" value="3">Item 2</option>
                {/* {availableSelection.map(s => (
                <option key={s} value={s}>
                    {s}
                </option>
                ))} */}
            </Field>
        </Form>
    );
}

export const SearchForm = withFormik({
    mapPropsToValues(){

    }, handleSubmit(){

    }
})(Search)