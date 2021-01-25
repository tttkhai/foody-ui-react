import React from 'react';
import Select from 'react-select';


const MultiSelectForm= ({
    options, value,onChange,defaultValue,isMulti, label
}) => {
    // const handleChange = (value1) => {
    //     onChange("cuisines", value1);
    //   };
    
    // const handleBlur = () => {
    //     // this is going to call setFieldTouched and manually update touched.topcis
    //     onBlur("cuisines", true);
    //   };
    return (
    <div >
        <label>{label}</label>
        <Select
        // styles={customStyles}
        options={options} 
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti={isMulti}
        // onBlur={handleBlur}
        />
    </div>
    );
}

export default MultiSelectForm;