import React from 'react';
import { withFormik, Field, Form} from 'formik';


const Search = () => {
    return (
        <Form>
            <div className="input-field col s12">
                Check
            {/* <Field 
                name="cuisine" 
                component="select"
                placeholder="Choose your favorite cuisine"
                multiple={true}
            > */}
            <Field
                component="select"
                name="names"
                multiple={true}
            >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </Field>
            </div>

        {/* <div className="input-field col s12">
            <select multiple>
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            </select>
            <label>Materialize Multiple Select</label>
        </div> */}
            {/* <Field type="text"/> */}
        </Form>
    )
}

export const SearchForm = withFormik({
    mapPropsToValues(){

    }, handleSubmit(){

    }
})(Search)