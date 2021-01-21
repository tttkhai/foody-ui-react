import React from 'react';
import Select from 'react-select';


const MultiSelectForm= ({
    className,
    placeholder,
    field,
    form,
    options,
    isMulti
}) => {
    const handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('topics', value);
      };
    // const getValue=()=>{
    //     if()
    // }
    console.log("MultiSelectForm:options "+options)
    console.log("MultiSelectForm:field "+field)
    console.log("MultiSelectForm:form "+form)
    console.log("MultiSelectForm: "+options)

    return (
        // <Select
        // className={className}
        // placeholder={placeholder} 
        // field={field} 
        // form={form} 
        // options={options} 
        // isMulti={isMulti}
        // onChange={onChange}
        // value={options ? options.find(option => option.value === field.value) : ''}
        // >
        <Select
            className={className}
            options={options}
            multi={true}
            onChange={handleChange}
            // value={this.props.value}
        />
    )
}

export default MultiSelectForm;