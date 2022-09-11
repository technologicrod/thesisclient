import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useParams, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Employeelistedit() {
  const { employeeid } = useParams();
  const x = employeeid
  const navigate = useNavigate();
  console.log("ideeee: ", employeeid)
  const handleProceedIdPic = (e) => {
    x && navigate(generatePath("/employeeidpicedit/:x", { x }));
  };
  const handleProceedJobDescription = (e) => {
    x && navigate(generatePath("/employeejobdescriptionedit/:x", { x }));
  };
  const [employeeinfo, setemployeeinfo] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:3001/employeelistedit/${x}`).then((response) => {
      setemployeeinfo(response.data);
    })
  }, [x])
  const [employeeadress, setemployeeadress] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:3001/employeelisteditaddress/${x}`).then((response) => {
      setemployeeadress(response.data);
    })
  }, [x])
  const [farmlist, setfarmlist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/farmlist').then((response) => {
      setfarmlist(response.data);
    })
  }, [])
  const ea = employeeinfo[0]
  const oa = employeeadress[0]
  var i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11= "hey";
  for (var key in ea) {
    if (ea.hasOwnProperty(key)) {
        if (key === "farm_id"){
          i1 = ea[key]
        }
        if (key === "emp_name"){
          i2 = ea[key]
        }
        if (key === "contact_num"){
          i3 = ea[key]
        }
        if (key === "educational_attainment"){
          i4 = ea[key]
        }
        if (key === "emp_pos"){
          i5 = ea[key]
        }
        if (key === "emp_status"){
          i6 = ea[key]
        }
    }
  }
  for (var key in oa) {
    if (oa.hasOwnProperty(key)) {
        if (key === "lot"){
          i7 = oa[key]
        }
        if (key === "street"){
          i8 = oa[key]
        }
        if (key === "city"){
          i9 = oa[key]
        }
        if (key === "province"){
          i10 = oa[key]
        }
        if (key === "zipcode"){
          i11 = oa[key]
        }
    }
  }
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
  useEffect(() =>{
    setemployeefarm(i1)
    setemployeename(i2)
    setemployeecontact(i3)
    setemployeeeducationalattainment(i4)
    setemployeeposition(i5)
    setemployeestatus(i6)
    setemployeelot(i7)
    setemployeestreet(i8)
    setemployeecity(i9)
    setemployeeprovince(i10)
    setemployeezipcode(i11)
  }, [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11])
  const register = (employeeid) => {
    var a = document.forms["myform"]["ainput"].value;
    var b = document.forms["myform"]["binput"].value;
    var c = document.forms["myform"]["cinput"].value;
    var d = document.forms["myform"]["dinput"].value;
    var e = document.forms["myform"]["einput"].value;
    //var f = document.forms["myform"]["finput"].value;
    var g = document.forms["myform"]["ginput"].value;
    var h = document.forms["myform"]["hinput"].value;
    var i = document.forms["myform"]["iinput"].value;
    var j = document.forms["myform"]["jinput"].value;
    var k = document.forms["myform"]["kinput"].value;
    var l = document.forms["myform"]["linput"].value;
    if (a == "" ||b == "" ||c == "" ||d == "" ||e == "" ||g == "" ||h == "" ||i == "" ||j == "" ||k == "" ||l == "") {
      alert("Required fields must be filled out");
    }
    else {
      Axios.put("http://localhost:3001/employeelistupdate", {emp_id: x, employeename: employeename, employeefarm: employeefarm, employeecontact: employeecontact, employeelot: employeelot, employeestreet: employeestreet, employeecity: employeecity, employeeprovince: employeeprovince, employeezipcode: employeezipcode, employeeeducationalattainment: employeeeducationalattainment, employeeposition: employeeposition, employeestatus : employeestatus});
      navigate('/employeelist', { replace: true });
      window.location.reload();
      alert("Employee updated");
    }
  }
  return (
    <div className='App'>
        {employeeinfo.map((val) => {
            return (
                <div>
                    <div class="headform">
        <h1 class="titleheadform">{val.emp_name}'s Account Edit</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedJobDescription}>Edit Job Description File</button>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedIdPic}>Edit ID Picture File</button>
        <form class="formdiv" name="myform" required>
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Employee Name</label>
                <input name="ainput" type="text" class="form-control" placeholder={val.emp_name} defaultValue={val.emp_name} id="inputDefault" onChange={(e) =>{setemployeename(e.target.value)}} required/>
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Assign Farm</label>
                    <select  name="binput" required class="form-select" id="exampleSelect1" onChange={(e) =>{
          setemployeefarm(e.target.value)
        }}>
                        <option value={val.farm_id}>{val.farm_id}</option>
                        {farmlist.map((valu) => {
                          return (
                            <option value={valu.farm_id}>{valu.farm_id} {valu.farm_name}</option>
                          )
                        })}
                    </select>
                    </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              {employeeadress.map((valo)=> {
                return (
                  <div>
                    <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Lot</label>
                <input name="dinput" type="text" class="form-control" placeholder={valo.lot} defaultValue={valo.lot} id="inputDefault" onChange={(e) =>{setemployeelot(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Street</label>
                <input name="einput" type="text" class="form-control" placeholder={valo.street} defaultValue={valo.street}  id="inputDefault" onChange={(e) =>{setemployeestreet(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">City</label>
                <input name="ginput" type="text" class="form-control" placeholder={valo.city} defaultValue={valo.city}  id="inputDefault" onChange={(e) =>{setemployeecity(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Province</label>
                <input name="hinput" type="text" class="form-control" placeholder={valo.province} defaultValue={valo.province}  id="inputDefault" onChange={(e) =>{setemployeeprovince(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Zip Code</label>
                <input name="cinput" type="text" class="form-control" placeholder={valo.zipcode} defaultValue={valo.zipcode}  id="inputDefault" onChange={(e) =>{setemployeezipcode(e.target.value)}} />
              </div>
                  </div>
                )
              })}
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number</label>
                <input name="iinput" type="text" class="form-control" placeholder={val.contact_num} defaultValue={val.contact_num}  id="inputDefault" onChange={(e) =>{setemployeecontact(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment</label>
                <input name="jinput" type="text" class="form-control" placeholder={val.educational_attainment} defaultValue={val.educational_attainment}  id="inputDefault" onChange={(e) =>{setemployeeeducationalattainment(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position</label>
                <input name="kinput" type="text" class="form-control" placeholder={val.emp_pos} defaultValue={val.emp_pos}  id="inputDefault" onChange={(e) =>{setemployeeposition(e.target.value)}} required />
              </div>
              <fieldset class="form-group" name="linput" onChange={(e) =>{setemployeestatus(e.target.value)}} required>
                <legend class="mt-4">Status *</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Full Time" defaultChecked={val.emp_status === 'Full Time'} />
                  <label class="form-check-label" for="optionsRadios1">
                    Full Time
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="Part Time" defaultChecked={val.emp_status === 'Part Time'} />
                  <label class="form-check-label" for="optionsRadios2">
                    Part Time
                  </label>
                </div>
              </fieldset>
              <button type="submit" value="Submit" class="btn btn-outline-success submitbutton" onClick={() => {register(employeeid)}}>Submit</button>
              
        </form>
        </main>
                </div>
            )
        })}    
    </div>
  );
}

export default Employeelistedit;