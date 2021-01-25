import React from 'react';
import Select from 'react-select';


const MultiSelectForm= ({
    options,onChange,onBlur,isMulti, label, name
}) => {
    const handleChange = (value1) => {
        console.log("Look: "+JSON.stringify(value1))
        onChange(name, value1);
    };
    
    const handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        onBlur(name, true);
      };
    return (
    <div >
        <label>{label}</label>
        <Select
        // styles={customStyles}
        name={name}
        options={options} 
        onChange={handleChange}
        isMulti={isMulti}
        onBlur={handleBlur}
        />
    </div>
    );
}

export default MultiSelectForm;