import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from "./components/Input.js";
import DataStorage from "./components/DataStorage.js";
import './App.css';

function App() {

  const [data, setData] = useState({
    date: "",
    km: ""
  });
  const [records, setRecords] = useState([]);

  const handleChange = e => {
    const {name, value} = e.target;
    setData(prevData => ({...prevData, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const add = records.findIndex(item => item.date === data.date);
    if (records.length === 0) {
      setRecords((prevRecords) => ([...prevRecords, data]));
    } else if (add !== Number("-1")) {
      const refreshData = {date: data.date, km: Number(records[add].km) + Number(data.km)};
      const newRecords = records.splice(add, 1, refreshData);
      setRecords(newRecords);
    } else if (add === Number("-1")) {
      setRecords((prevRecords) => ([...prevRecords, data].sort(function(a, b){
        return new Date(b.date) - new Date(a.date);
      })));
    }
    e.target.reset();
  };

  const handleDelete = e => {
    e.preventDefault();
    const recordToDelete = e.target.closest("li").className;
    setRecords(records.filter(item => item.date !== recordToDelete));
  };

  const containerStyle = {
    width: "500px",
    height: "300px",
    position: "fixed", 
    top: "50%", left: "50%", 
    transform: "translate(-50%, -50%)",
    border: "2px solid #000000",
    borderRadius: "5px",
    padding: "10px"
  };
  
  const buttonStyle = {
    border: "2px solid #000000",
    borderRadius: "5px",
    padding: "7px 20px"
  };

  const formStyle = {
    display: "flex",
    justifyContent: "space-between"
  };
  
  return (
    <div className="container" style={containerStyle}>
      <form className="form" style={formStyle} onSubmit={e => handleSubmit(e, data)}>
        <Input 
          labelName={"Дата"}
          inputName={"date"} 
          inputType={"date"} 
          setInputData={(e) => handleChange(e)}/>
        <Input 
          labelName={"Пройдено км"}
          inputName={"km"} 
          inputType={"text"} 
          setInputData={(e) => handleChange(e)}/>
        <input type="submit" style={buttonStyle} value="OK" />
        
      </form>
      <DataStorage 
        records={records}
        deleteRecord={e => handleDelete(e)}/>
    </div>
  );
};

App.propTypes = {
  records: PropTypes.array,
  inputName: PropTypes.string,
  labelName: PropTypes.string,
  inputType: PropTypes.string,
  deleteRecord: PropTypes.func,
  setInputData: PropTypes.func
};

export default App;
