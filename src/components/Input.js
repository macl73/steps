import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
    const {inputName} = props;
    const {inputType} = props;
    const {setInputData} = props;
    const {labelName} = props;

    const inputStyle = {
        border: "2px solid #000000",
        borderRadius: "5px",
        margin: "5px",
        padding: "7px"
    };
    
    return (
        <label htmlFor={inputName}>{labelName}<br />
            <input onChange={setInputData} type={inputType} className="input" name={inputName} style={inputStyle}/>
        </label>
    );
};

Input.propTypes = {
    inputName: PropTypes.string,
    inputType: PropTypes.string,
    setInputData: PropTypes.func
};
