import React from 'react';
import Select from 'react-select';


const MultiSelectForm= ({
    options,onChange,onBlur,isMulti, label, name
}) => {
    const handleChange = (value) => {
        onChange(name, value);
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