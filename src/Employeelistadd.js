import React, { useState, useEffect } from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Employeelistadd() {

  const [employeelastname, setemployeelastname] = useState("");
  const [employeefirstname, setemployeefirstname] = useState("");
  const [employeemiddlename, setemployeemiddlename] = useState("");
  const [employeeblock, setemployeeblock] = useState("");
  const [employeelot, setemployeelot] = useState("");
  const [employeestreet, setemployeestreet] = useState("");
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
    Axios.get('http://localhost:3000/employeelist').then((response) => {
      setemployeelist(response.data);
    })
  }, [])

  const submitEmployee = () => {
    Axios.post("http://localhost:3000/employeelistadd", {employeelastname: employeelastname, employeefirstname: employeefirstname, employeemiddlename: employeemiddlename, employeeblock: employeeblock, employeelot: employeelot, employeestreet: employeestreet, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeecontact1: employeecontact1, employeecontact2: employeecontact2, employeecontact3: employeecontact3, employeecontact4: employeecontact4, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus: employeestatus, employeejobdescription: employeejobdescription, employeeidpicture: employeeidpicture});
    setemployeelist([...employeelist, {employeelastname: employeelastname, employeefirstname: employeefirstname, employeemiddlename: employeemiddlename, employeeblock: employeeblock, employeelot: employeelot, employeestreet: employeestreet, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeecontact1: employeecontact1, employeecontact2: employeecontact2, employeecontact3: employeecontact3, employeecontact4: employeecontact4, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus: employeestatus, employeejobdescription: employeejobdescription, employeeidpicture: employeeidpicture}]);
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">New Employee</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" id="inputDefault" onChange={(e) =>{
        setemployeelastname(e.target.value)
      }} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" id="inputDefault" onChange={(e) =>{
        setemployeefirstname(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Middle Name</label>
                <input type="text" class="form-control" placeholder="Middle Name" id="inputDefault" onChange={(e) =>{
        setemployeemiddlename(e.target.value)
      }}/>
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              <div class="form-group">
                
                <label class="col-form-label mt-4" for="inputDefault">Block</label>
                <input type="text" class="form-control" placeholder="Block" id="inputDefault" onChange={(e) =>{
        setemployeeblock(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Lot</label>
                <input type="text" class="form-control" placeholder="Lot" id="inputDefault" onChange={(e) =>{
        setemployeelot(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Street</label>
                <input type="text" class="form-control" placeholder="Street" id="inputDefault" onChange={(e) =>{
        setemployeestreet(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">City</label>
                <input type="text" class="form-control" placeholder="City" id="inputDefault" onChange={(e) =>{
        setemployeecity(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Province</label>
                <input type="text" class="form-control" placeholder="Province" id="inputDefault" onChange={(e) =>{
        setemployeeprovince(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Zip Code</label>
                <input type="text" class="form-control" placeholder="Zip Code" id="inputDefault" onChange={(e) =>{
        setemployeezipcode(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #1</label>
                <input type="text" class="form-control" placeholder="Contact Number #1" id="inputDefault" onChange={(e) =>{
        setemployeecontact1(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #2</label>
                <input type="text" class="form-control" placeholder="Contact Number #2" id="inputDefault" onChange={(e) =>{
        setemployeecontact2(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #3</label>
                <input type="text" class="form-control" placeholder="Contact Number #3" id="inputDefault" onChange={(e) =>{
        setemployeecontact3(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #4</label>
                <input type="text" class="form-control" placeholder="Contact Number #4" id="inputDefault" onChange={(e) =>{
        setemployeecontact4(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment</label>
                <input type="text" class="form-control" placeholder="Educational Attainment" id="inputDefault" onChange={(e) =>{
        setemployeeeducationalattainment(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position</label>
                <input type="text" class="form-control" placeholder="Position" id="inputDefault" onChange={(e) =>{
        setemployeeposition(e.target.value)
      }}/>
              </div>
              <fieldset class="form-group" onChange={(e) =>{
        setemployeestatus(e.target.value)
      }}>
                <legend class="mt-4">Status</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                  <label class="form-check-label" for="optionsRadios1">
                    Full Time
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  <label class="form-check-label" for="optionsRadios2">
                    Part Time
                  </label>
                </div>
              </fieldset>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Job Description</label>
                <input class="form-control" type="file" id="formFile" onChange={(e) =>{
        setemployeejobdescription(e.target.value)
      }}/>
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">ID Picture</label>
                <input class="form-control" type="file" id="formFile" onChange={(e) =>{
        setemployeeidpicture(e.target.value)
      }}/>
              </div>
              <Link to="/employeelist"><button type="button" class="btn btn-outline-success submitbutton" onClick={submitEmployee}>Submit</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Employeelistadd;
