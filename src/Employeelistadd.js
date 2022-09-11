import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Employeelistadd() {

  const [employeename, setemployeename] = useState("");
  const [employeefarm, setemployeefarm] = useState("");
  const [employeecontact, setemployeecontact] = useState("");
  const [employeelot, setemployeelot] = useState("");
  const [employeestreet, setemployeestreet] = useState("");
  const [employeecity, setemployeecity] = useState("");
  const [employeeprovince, setemployeeprovince] = useState("");
  const [employeezipcode, setemployeezipcode] = useState("");
  const [employeeeducationalattainment, setemployeeeducationalattainment] = useState("");
  const [employeeposition, setemployeeposition] = useState("");
  const [employeestatus, setemployeestatus] = useState("");
  const [employeejobdescription, setemployeejobdescription] = useState("");
  const [employeeidpicture, setemployeeidpicture] = useState("");
  const [employeelist, setemployeelist] = useState([]);
  console.log(employeefarm)
  useEffect(() =>{
    Axios.get('http://localhost:3001/employeelist').then((response) => {
      setemployeelist(response.data);
    })
  }, [])
  const [farmlist, setfarmlist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/farmlist').then((response) => {
      setfarmlist(response.data);
    })
  }, [])
  const navigate = useNavigate();
  const register = () => {
    var a = document.forms["myform"]["ainput"].value;
    var b = document.forms["myform"]["binput"].value;
    var c = document.forms["myform"]["cinput"].value;
    var d = document.forms["myform"]["dinput"].value;
    var e = document.forms["myform"]["einput"].value;
    //var f = document.forms["myform"]["finput"].value; no f
    var g = document.forms["myform"]["ginput"].value;
    var h = document.forms["myform"]["hinput"].value;
    var i = document.forms["myform"]["iinput"].value;
    var j = document.forms["myform"]["jinput"].value;
    var k = document.forms["myform"]["kinput"].value;
    var l = document.forms["myform"]["linput"].value;
    var m = document.forms["myform"]["minput"].value;
    if (a == "" ||b == "" ||c == "" ||d == "" ||e == "" ||g == "" ||h == "" ||i == "" ||j == "" ||k == "" ||l == "" ||m == "") {
      alert("Required fields must be filled out");
    }
    else {
      Axios.post("http://localhost:3001/employeelistadd", {employeename: employeename, employeefarm: employeefarm, employeelot: employeelot, employeestreet: employeestreet, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeecontact: employeecontact, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus: employeestatus, employeejobdescription: employeejobdescription, employeeidpicture : employeeidpicture});
      navigate('/employeelist', { replace: true });
      window.location.reload();
      alert("Employee recorded");
    }
  }
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">New Employee</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <form class="formdiv" name="myform" required>
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Employee Name</label>
                <input name="ainput" type="text" class="form-control" placeholder="format: First Name_Middle Initial_Last Name" id="inputDefault" onChange={(e) =>{setemployeename(e.target.value)}} required/>
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Assign Farm</label>
                    <select  name="binput" required class="form-select" id="exampleSelect1" onChange={(e) =>{
          setemployeefarm(e.target.value)
        }}>
                        <option value="">Select Farm</option>
                        {farmlist.map((val) => {
                          return (
                            <option value={val.farm_id}>{val.farm_id} {val.farm_name}</option>
                          )
                        })}
                    </select>
                    </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Lot</label>
                <input name="dinput" type="text" class="form-control" placeholder="Lot" id="inputDefault" onChange={(e) =>{setemployeelot(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Street</label>
                <input name="einput" type="text" class="form-control" placeholder="Street" id="inputDefault" onChange={(e) =>{setemployeestreet(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">City</label>
                <input name="ginput" type="text" class="form-control" placeholder="City" id="inputDefault" onChange={(e) =>{setemployeecity(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Province</label>
                <input name="hinput" type="text" class="form-control" placeholder="Province" id="inputDefault" onChange={(e) =>{setemployeeprovince(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Zip Code</label>
                <input name="cinput" type="text" class="form-control" placeholder="Zip Code" id="inputDefault" onChange={(e) =>{setemployeezipcode(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number</label>
                <input name="iinput" type="text" class="form-control" placeholder="Contact Number" id="inputDefault" onChange={(e) =>{setemployeecontact(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment</label>
                <input name="jinput" type="text" class="form-control" placeholder="Educational Attainment" id="inputDefault" onChange={(e) =>{setemployeeeducationalattainment(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position</label>
                <input name="kinput" type="text" class="form-control" placeholder="Position" id="inputDefault" onChange={(e) =>{setemployeeposition(e.target.value)}} required />
              </div>
              <fieldset class="form-group" name="linput" onChange={(e) =>{setemployeestatus(e.target.value)}} required>
                <legend class="mt-4">Status *</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Full Time" />
                  <label class="form-check-label" for="optionsRadios1">
                    Full Time
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="Part Time" />
                  <label class="form-check-label" for="optionsRadios2">
                    Part Time
                  </label>
                </div>
              </fieldset>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Job Description</label>
                <input name="finput" class="form-control" type="text" id="formFile" onChange={(e) =>{setemployeejobdescription(e.target.value)}} />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">ID Picture</label>
                <input name="minput" class="form-control" type="text" id="formFile" onChange={(e) =>{setemployeeidpicture(e.target.value)}} required />
              </div>
              <button type="submit" value="Submit" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
        </form>
        </main>
      </div>
  );
}

export default Employeelistadd;