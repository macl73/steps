import React from 'react';
import PropTypes from 'prop-types';

export default function DataStorage(props) {
    const {records} = props;
    const {deleteRecord} = props;

    const storageStyle = {
        minHeight: "auto",
        margin: "10px",
        border: "2px solid #000000",
        borderRadius: "5px"
    };
    const contentStyle = {
        display: "flex",
        justifyContent: "space-between"
    };
    
    const renderList = arr => {
        return (
            arr.map((el, index) => {
                return <li key={index} className={el.date} style={contentStyle}>
                    <span>{el.date}</span>
                    <span>{el.km}</span>
                    <button onClick={deleteRecord}>✘</button>
                </li>
            })
        );
    };
    
    return (
        <ul style={storageStyle}>
            {renderList(records)}
        </ul>
    );
};

DataStorage.propTypes = {
    deleteRecord: PropTypes.func,
    records: PropTypes.array
};