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
  console.log(employeeinfo)
  const ea = employeeinfo[0]
  var i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18 = "hey";
  for (var key in ea) {
    if (ea.hasOwnProperty(key)) {
        if (key === "employeelastname"){
          i1 = ea[key]
        }
        if (key === "employeefirstname"){
          i2 = ea[key]
        }
        if (key === "employeemiddlename"){
          i3 = ea[key]
        }
        if (key === "employeeblock"){
          i4 = ea[key]
        }
        if (key === "employeelot"){
          i5 = ea[key]
        }
        if (key === "employeestreet"){
          i6 = ea[key]
        }
        if (key === "employeevillage"){
          i7 = ea[key]
        }
        if (key === "employeebarangay"){
          i8 = ea[key]
        }
        if (key === "employeecity"){
          i9 = ea[key]
        }
        if (key === "employeeprovince"){
          i10 = ea[key]
        }
        if (key === "employeezipcode"){
          i11 = ea[key]
        }
        if (key === "employeecontact1"){
          i12 = ea[key]
        }
        if (key === "employeecontact2"){
          i13 = ea[key]
        }
        if (key === "employeecontact3"){
          i14 = ea[key]
        }
        if (key === "employeecontact4"){
          i15 = ea[key]
        }
        if (key === "employeeeducationalattainment"){
          i16 = ea[key]
        }
        if (key === "employeeposition"){
          i17 = ea[key]
        }
        if (key === "employeestatus"){
          i18 = ea[key]
        }
    }
  }
  const [newemployeelastname, setnewemployeelastname] = useState("");
  const [newemployeefirstname, setnewemployeefirstname] = useState("");
  const [newemployeemiddlename, setnewemployeemiddlename] = useState("");
  const [newemployeeblock, setnewemployeeblock] = useState("");
  const [newemployeelot, setnewemployeelot] = useState("");
  const [newemployeestreet, setnewemployeestreet] = useState("");
  const [newemployeevillage, setnewemployeevillage] = useState("");
  const [newemployeebarangay, setnewemployeebarangay] = useState("");
  const [newemployeecity, setnewemployeecity] = useState("");
  const [newemployeeprovince, setnewemployeeprovince] = useState("");
  const [newemployeezipcode, setnewemployeezipcode] = useState("");
  const [newemployeecontact1, setnewemployeecontact1] = useState("");
  const [newemployeecontact2, setnewemployeecontact2] = useState("");
  const [newemployeecontact3, setnewemployeecontact3] = useState("");
  const [newemployeecontact4, setnewemployeecontact4] = useState("");
  const [newemployeeeducationalattainment, setnewemployeeeducationalattainment] = useState("");
  const [newemployeeposition, setnewemployeeposition] = useState("");
  const [newemployeestatus, setnewemployeestatus] = useState("");
  const [newemployeelist, setnewemployeelist] = useState([]);
  useEffect(() =>{
    setnewemployeelastname(i1)
    setnewemployeefirstname(i2)
    setnewemployeemiddlename(i3)
    setnewemployeeblock(i4)
    setnewemployeelot(i5)
    setnewemployeestreet(i6)
    setnewemployeevillage(i7)
    setnewemployeebarangay(i8)
    setnewemployeecity(i9)
    setnewemployeeprovince(i10)
    setnewemployeezipcode(i11)
    setnewemployeecontact1(i12)
    setnewemployeecontact2(i13)
    setnewemployeecontact3(i14)
    setnewemployeecontact4(i15)
    setnewemployeeeducationalattainment(i16)
    setnewemployeeposition(i17)
    setnewemployeestatus(i18)  
  }, [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18])
  console.log("newl: ", newemployeelastname)
  console.log("newf: ", newemployeefirstname)
  console.log("status: ", newemployeestatus)
  const register = (employeeid) => {
    var a = document.forms["myform"]["ainput"].value;
    var b = document.forms["myform"]["binput"].value;
    var c = document.forms["myform"]["cinput"].value;
    var d = document.forms["myform"]["dinput"].value;
    var e = document.forms["myform"]["einput"].value;
    var f = document.forms["myform"]["finput"].value;
    var g = document.forms["myform"]["ginput"].value;
    var h = document.forms["myform"]["hinput"].value;
    var i = document.forms["myform"]["iinput"].value;
    var j = document.forms["myform"]["jinput"].value;
    var k = document.forms["myform"]["kinput"].value;
    var l = document.forms["myform"]["linput"].value;
    if (a == "" ||b == "" ||c == "" ||d == "" ||e == "" ||f == "" ||g == "" ||h == "" ||i == "" ||j == "" ||k == "" ||l == "") {
      alert("Required fields must be filled out");
    }
    else {
      Axios.put("http://localhost:3001/employeelistupdate", {newemployeelastname: newemployeelastname, newemployeefirstname: newemployeefirstname, newemployeemiddlename: newemployeemiddlename, newemployeeblock: newemployeeblock, newemployeelot: newemployeelot, newemployeestreet: newemployeestreet, newemployeevillage: newemployeevillage, newemployeebarangay: newemployeebarangay, newemployeecity: newemployeecity, newemployeeprovince: newemployeeprovince, newemployeezipcode: newemployeezipcode, newemployeecontact1: newemployeecontact1, newemployeecontact2: newemployeecontact2, newemployeecontact3: newemployeecontact3, newemployeecontact4: newemployeecontact4, newemployeeeducationalattainment: newemployeeeducationalattainment, newemployeeposition: newemployeeposition, newemployeestatus: newemployeestatus, employeeid: employeeid});
      setnewemployeelist("");
      navigate('/employeelist', { replace: true });
      window.location.reload();
      alert("Employee recorded");
    }
  }
  return (
    <div className='App'>
        {employeeinfo.map((val) => {
            return (
                <div>
                    <div class="headform">
        <h1 class="titleheadform">{val.employeelastname}, {val.employeefirstname}'s Account Edit</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedJobDescription}>Edit Job Description File</button>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedIdPic}>Edit ID Picture File</button>
        <form class="formdiv" name="myform" required>
          <h6><i>labels with asterisk (*) are required to be filled out</i></h6>
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Last Name *</label>
                <input name="ainput" type="text" class="form-control" placeholder={val.employeelastname} defaultValue={val.employeelastname} id="inputDefault" onChange={(e) =>{setnewemployeelastname(e.target.value)}} required/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">First Name *</label>
                <input name="binput" type="text" class="form-control" placeholder={val.employeefirstname} defaultValue={val.employeefirstname} id="inputDefault" onChange={(e) =>{setnewemployeefirstname(e.target.value)}} required/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Middle Name</label>
                <input type="text" class="form-control" placeholder={val.employeemiddlename} defaultValue={val.employeemiddlename} id="inputDefault" onChange={(e) =>{setnewemployeemiddlename(e.target.value)}} />
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              <div class="form-group">
                
                <label class="col-form-label mt-4" for="inputDefault">Block *</label>
                <input name="cinput" type="text" class="form-control" placeholder={val.employeeblock} defaultValue={val.employeeblock} id="inputDefault" onChange={(e) =>{setnewemployeeblock(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Lot *</label>
                <input name="dinput" type="text" class="form-control" placeholder={val.employeelot} defaultValue={val.employeelot} id="inputDefault" onChange={(e) =>{setnewemployeelot(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Street</label>
                <input type="text" class="form-control" placeholder={val.employeestreet} defaultValue={val.employeestreet}  id="inputDefault" onChange={(e) =>{setnewemployeestreet(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Village *</label>
                <input name="einput" type="text" class="form-control" placeholder={val.employeevillage} defaultValue={val.employeevillage}  id="inputDefault" onChange={(e) =>{setnewemployeevillage(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Barangay *</label>
                <input name="finput" type="text" class="form-control" placeholder={val.employeebarangay} defaultValue={val.employeebarangay}  id="inputDefault" onChange={(e) =>{setnewemployeebarangay(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">City *</label>
                <input name="ginput" type="text" class="form-control" placeholder={val.employeecity} defaultValue={val.employeecity}  id="inputDefault" onChange={(e) =>{setnewemployeecity(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Province *</label>
                <input name="hinput" type="text" class="form-control" placeholder={val.employeeprovince} defaultValue={val.employeeprovince}  id="inputDefault" onChange={(e) =>{setnewemployeeprovince(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Zip Code</label>
                <input type="text" class="form-control" placeholder={val.employeezipcode} defaultValue={val.employeezipcode}  id="inputDefault" onChange={(e) =>{setnewemployeezipcode(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #1 *</label>
                <input name="iinput" type="text" class="form-control" placeholder={val.employeecontact1} defaultValue={val.employeecontact1}  id="inputDefault" onChange={(e) =>{setnewemployeecontact1(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #2</label>
                <input type="text" class="form-control" placeholder={val.employeecontact2} defaultValue={val.employeecontact2} id="inputDefault" onChange={(e) =>{setnewemployeecontact2(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #3</label>
                <input type="text" class="form-control" placeholder={val.employeecontact3} defaultValue={val.employeecontact3}  id="inputDefault" onChange={(e) =>{setnewemployeecontact3(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #4</label>
                <input type="text" class="form-control" placeholder={val.employeecontact4} defaultValue={val.employeecontact3}  id="inputDefault" onChange={(e) =>{setnewemployeecontact4(e.target.value)}} />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment *</label>
                <input name="jinput" type="text" class="form-control" placeholder={val.employeeeducationalattainment} defaultValue={val.employeeeducationalattainment}  id="inputDefault" onChange={(e) =>{setnewemployeeeducationalattainment(e.target.value)}} required />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position *</label>
                <input name="kinput" type="text" class="form-control" placeholder={val.employeeposition} defaultValue={val.employeeposition}  id="inputDefault" onChange={(e) =>{setnewemployeeposition(e.target.value)}} required />
              </div>
              <fieldset class="form-group" name="linput" onChange={(e) =>{setnewemployeestatus(e.target.value)}} required>
                <legend class="mt-4">Status *</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Full Time" defaultChecked={val.employeestatus === 'Full Time'} />
                  <label class="form-check-label" for="optionsRadios1">
                    Full Time
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="Part Time" defaultChecked={val.employeestatus === 'Part Time'} />
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