import React, { useState, useEffect } from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Test() {

  const [employeelastname, setemployeelastname] = useState("");
  const [employeefirstname, setemployeefirstname] = useState("");
  const [employeemiddlename, setemployeemiddlename] = useState("");
  const [employeeblock, setemployeeblock] = useState("");
  const [employeelot, setemployeelot] = useState("");
  const [employeestreet, setemployeestreet] = useState("");
  const [employeevillage, setemployeevillage] = useState("");
  const [employeebarangay, setemployeebarangay] = useState("");
  const [employeecity, setemployeecity] = useState("");
  const [employeeprovince, setemployeeprovince] = useState("");
  const [employeezipcode, setemployeezipcode] = useState("");
  const [employeecontact1, setemployeecontact1] = useState("");
  const [employeecontact2, setemployeecontact2] = useState("");
  const [employeecontact3, setemployeecontact3] = useState("");
  const [employeecontact4, setemployeecontact4] = useState("");
  const [employeeeducationalattainment, setemployeeeducationalattainment] = useState("");
  const [employeeposition, setemployeeposition] = useState("");
  const [employeestatus, setemployeestatus] = useState("");
  const [employeejobdescription, setemployeejobdescription] = useState("");
  const [employeeidpicture, setemployeeidpicture] = useState("");
  const [employeelist, setemployeelist] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:3001/employeelist').then((response) => {
      setemployeelist(response.data);
    })
  }, [])

  const submitEmployee = () => {
    Axios.post("http://localhost:3001/employeelistadd", {employeelastname: employeelastname, employeefirstname: employeefirstname, employeemiddlename: employeemiddlename, employeeblock: employeeblock, employeelot: employeelot, employeestreet: employeestreet, employeevillage: employeevillage, employeebarangay: employeebarangay, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeecontact1: employeecontact1, employeecontact2: employeecontact2, employeecontact3: employeecontact3, employeecontact4: employeecontact4, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus: employeestatus, employeejobdescription: employeejobdescription, employeeidpicture: employeeidpicture});
    setemployeelist([...employeelist, {employeelastname: employeelastname, employeefirstname: employeefirstname, employeemiddlename: employeemiddlename, employeeblock: employeeblock, employeelot: employeelot, employeestreet: employeestreet, employeevillage: employeevillage, employeebarangay: employeebarangay, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeecontact1: employeecontact1, employeecontact2: employeecontact2, employeecontact3: employeecontact3, employeecontact4: employeecontact4, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus: employeestatus, employeejobdescription: employeejobdescription, employeeidpicture: employeeidpicture}]);
  };
  const handleSubmit = event => {
    event.preventDefault();

    console.log('form submitted ✅');
  };

  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">New Employee</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <form class="formdiv"onSubmit={handleSubmit} required>
          <h6><i>labels with asterisk(*) are required to filled up</i></h6>
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Last Name *</label>
                <input type="text" class="form-control" placeholder="Last Name" id="inputDefault" required />
      </div>
      <input type="submit"></input>
              
        </form>
        </main>
      </div>
  );
}

export default Test;
