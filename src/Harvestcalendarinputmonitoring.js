import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, useParams, generatePath } from 'react-router-dom';
import Axios from 'axios';


function Harvestcalendarinputmonitoring() {
    const navigate = useNavigate();
    const {values} = useParams();
    const w = JSON.parse(values)
    const wnew = JSON.stringify(w)
    var x,y,z // x for id, y for start date, z for start
    for (var key in w) {
      if (w.hasOwnProperty(key)) {
          if (key === "id"){
            x = w[key]
          }
          if (key === "startd"){
            y = w[key]
          }
          if (key === "endd"){
            z = w[key]
          }
      }
    }
    /*var yy = new Date(y);
    var zz = new Date(z);
    function convertTZ(date, tzString) {
      return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
    }
    const ydate = convertTZ(yy, "Asia/Manila")
    const zdate = convertTZ(zz, "Asia/Manila")
    console.log("start manila: ", ydate)
    console.log("end manila: ", zdate)*/
    //alert("Plant Monitoring for Batch "+x+"\nFrom: "+ydate+"\nTo: "+zdate)
    const handleProceed = (e) => {
        wnew && navigate(generatePath("/harvestcalendarmonitoring/:wnew", { wnew }));
      };
    const [plant_stage, setplant_stage] = useState("")
    const [quantity, setquantity] = useState("")
    const [curr_height, setcurr_height] = useState("")
    const [curr_width, setcurr_width] = useState("")
    const [remarks, setremarks] = useState("")
    const [act_increment, setact_increment] = useState(0)
    const batch_id = x
    const date_from = y
    const date_to = z
    const survival_rate = 100
    const [harvestmonitoringinfo, setharvestmonitoringinfo] = useState([]);
    useEffect(() =>{
      async function fetchData(){
          await Axios.get(`http://localhost:3001/harvestmonitoring/${x}`).then((response) => {
            setharvestmonitoringinfo(response.data);
      })
      }
      fetchData()
    }, [x])
    const ea = harvestmonitoringinfo[0]
    var i1, i2, i3, i4, i5, i6, i7 = 1
    for (var key in ea) {
      if (ea.hasOwnProperty(key)) {
          if (key === "plant_stage"){
            i1 = ea[key]
          }
          if (key === "survival_rate"){
            i2 = ea[key] //di magamit ang initial value
          }
          if (key === "quantity"){
            i3 = ea[key]
          }
          if (key === "curr_height"){
            i4 = ea[key]
          }
          if (key === "curr_width"){
            i5 = ea[key]
          }
          if (key === "remarks"){
            i6 = ea[key]
          }
          if (key === "act_increment"){
            i7 = ea[key]
            if (!Number.isInteger(i7)) {
              i7 = 1
            }
            else {
              i7 = i7 + 1
            }
          }
        }
    }
    console.log(i7)
    useEffect(() =>{
      setplant_stage(i1)
      setquantity(i3)
      setcurr_height(i4)
      setcurr_width(i5)
      setremarks(i6)
      setact_increment(i7)
    }, [i1, i2, i3, i4, i5, i6, i7])
    const register = () => {
      var a = document.forms["myform"]["ainput"].value;
      var b = document.forms["myform"]["binput"].value;
      var c = document.forms["myform"]["cinput"].value;
      var d = document.forms["myform"]["dinput"].value;
      var e = document.forms["myform"]["einput"].value;
      if (a == "" ||b == "" || c == "" ||d == "" || e == "") {
        alert("Required fields must be filled out");
      }
      if (i1 == plant_stage && i3 == quantity && i4 == curr_height && i5 == curr_width && i6 == remarks) {
        alert("No changes of values detected.");
      }
      else {
        Axios.post("http://localhost:3001/harvestcalendarmonitoringadd", {batch_id: batch_id, plant_stage: plant_stage, date_from: date_from, date_to: date_to, survival_rate: survival_rate, remarks: remarks, curr_height: curr_height, curr_width: curr_width, quantity: quantity, act_increment: act_increment});
        console.log(batch_id)
        console.log(plant_stage)
        console.log(date_from)
        console.log(date_to)
        console.log(survival_rate)
        console.log(remarks)
        console.log(curr_height)
        console.log(curr_width)
        console.log(remarks)
        console.log(act_increment)
        x && navigate(generatePath("/harvestcalendar/:x", { x }));
        window.location.reload();
        alert("Monitoring recorded.")
      }
    }
    if(i1 == null){
      return(
        <div className="App">
            <div class="headform">
            <h1 class="titleheadform">Input Monitoring for Batch {x}</h1>
            <h6>From: {y} To: {z}</h6>
            </div>
            <main class="container-fluid">
            <button type="button" class="btn btn-outline-dark backbutton" onClick={handleProceed}>Back</button>
            <form class="formdiv" name="myform" required>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Plant Stage</label>
                  <input name="ainput" type="text" class="form-control" placeholder="Plant Stage" id="inputDefault" onChange={(e) =>{setplant_stage(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Quantity</label>
                  <input name="binput" type="text" class="form-control" placeholder="Quantity" id="inputDefault" onChange={(e) =>{setquantity(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Average Height in Meters:</label>
                  <input name="cinput" type="text" class="form-control" placeholder="Avg. Height in M" id="inputDefault" onChange={(e) =>{setcurr_height(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Average Width in Meters:</label>
                  <input name="dinput" type="text" class="form-control" placeholder="Avg. Width in M" id="inputDefault" onChange={(e) =>{setcurr_width(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Remarks</label>
                  <input name="einput" type="text" class="form-control" placeholder="Remarks" id="inputDefault" onChange={(e) =>{setremarks(e.target.value)}} required/>
              </div>
              <button type="button" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
            </form>
            </main>
        </div>
    )
    }
    else{
      return(
        <div className="App">
            <div class="headform">
            <h1 class="titleheadform">Input Monitoring for Batch {x}</h1>
            <h6>From: {y} To: {z}</h6>
            </div>
            <main class="container-fluid">
            <button type="button" class="btn btn-outline-dark backbutton" onClick={handleProceed}>Back</button>
            <form class="formdiv" name="myform" required>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Plant Stage</label>
                  <input name="ainput" type="text" class="form-control" placeholder={i1} defaultValue={i1} id="inputDefault" onChange={(e) =>{setplant_stage(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Quantity</label>
                  <input name="binput" type="text" class="form-control" placeholder={i3} defaultValue={i3} id="inputDefault" onChange={(e) =>{setquantity(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Average Height in Meters:</label>
                  <input name="cinput" type="text" class="form-control" placeholder={i4} defaultValue={i4} id="inputDefault" onChange={(e) =>{setcurr_height(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Average Width in Meters:</label>
                  <input name="dinput" type="text" class="form-control" placeholder={i5} defaultValue={i5} id="inputDefault" onChange={(e) =>{setcurr_width(e.target.value)}} required/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Remarks</label>
                  <input name="einput" type="text" class="form-control" placeholder={i6} defaultValue={i6} id="inputDefault" onChange={(e) =>{setremarks(e.target.value)}} required/>
              </div>
              <button type="button" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
            </form>
            </main>
        </div>
    )
    }
}

export default Harvestcalendarinputmonitoring;