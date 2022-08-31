import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useParams, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Plantprofilesedit() {
    const { plantprofileid } = useParams();
  const x = plantprofileid
  console.log(x)
  const [plantprofileplantname, setplantprofileplantname] = useState("")
  const [plantprofilecategory, setplantprofilecategory] = useState("")
  const [plantprofilescientificname, setplantprofilescientificname] = useState("")
  const [plantprofilevariety, setplantprofilevariety] = useState("")
  const [plantprofileplanttype, setplantprofileplanttype] = useState("")
  const [plantprofilemonths, setplantprofilemonths] = useState("")
  const [plantprofiledescription, setplantprofiledescription] = useState("")
  const [plantprofiledisease1, setplantprofiledisease1] = useState("")
  const [plantprofiledisease2, setplantprofiledisease2] = useState("")
  const [plantprofiledisease3, setplantprofiledisease3] = useState("")
  const [plantprofiledisease4, setplantprofiledisease4] = useState("")
  const [plantprofiledisease5, setplantprofiledisease5] = useState("")
  const [plantprofilelist, setplantprofilelist] = useState([]);
  const [plantcategorylist, setplantcategorylist] = useState([]); //for category
  const [planttypelist, setplanttypelist] = useState([]); //for type
  const navigate = useNavigate();
  useEffect(() =>{
    Axios.get(`http://localhost:3001/plantprofilesview/${x}`).then((response) => {
      setplantprofilelist(response.data);
    })
  }, [x])
  console.log(plantprofilelist)
  const ea = plantprofilelist[0]
  var i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12;
  for (var key in ea) {
    if (ea.hasOwnProperty(key)) {
        if (key === "plantprofileplantname"){
          i1 = ea[key]
        }
        if (key === "plantprofilecategory"){
          i2 = ea[key]
        }
        if (key === "plantprofilescientificname"){
          i3 = ea[key]
        }
        if (key === "plantprofilevariety"){
          i4 = ea[key]
        }
        if (key === "plantprofileplanttype"){
          i5 = ea[key]
        }
        if (key === "plantprofilemonths"){
          i6 = ea[key]
        }
        if (key === "plantprofiledescription"){
          i7 = ea[key]
        }
        if (key === "plantprofiledisease1"){
          i8 = ea[key]
        }
        if (key === "plantprofiledisease2"){
          i9 = ea[key]
        }
        if (key === "plantprofiledisease3"){
          i10 = ea[key]
        }
        if (key === "plantprofiledisease4"){
          i11 = ea[key]
        }
        if (key === "plantprofiledisease5"){
          i12 = ea[key]
        }
    }
  }
  const handleProceedPic = (e) => {
    x && navigate(generatePath("/plantprofilespicedit/:x", { x }));
  };
  useEffect(() =>{
    setplantprofileplantname(i1)
    setplantprofilecategory(i2)
    setplantprofilescientificname(i3)
    setplantprofilevariety(i4)
    setplantprofileplanttype(i5)
    setplantprofilemonths(i6)
    setplantprofiledescription(i7)
    setplantprofiledisease1(i8)
    setplantprofiledisease2(i9)
    setplantprofiledisease3(i10)
    setplantprofiledisease4(i11)
    setplantprofiledisease5(i12)
  }, [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12])
  console.log("category: ", plantprofilecategory)
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiesplantprofile').then((response) => {
      setplantcategorylist(response.data);
    })
  }, [])
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiesplanttype').then((response) => {
      setplanttypelist(response.data);
    })
  }, [])
  const register = () => {
    // no ginput kay gilahi ang pic edit
    var a = document.forms["myform"]["ainput"].value;
    var b = document.forms["myform"]["binput"].value;
    var c = document.forms["myform"]["cinput"].value;
    var d = document.forms["myform"]["dinput"].value;
    var e = document.forms["myform"]["einput"].value;
    var f = document.forms["myform"]["finput"].value;
    var h = document.forms["myform"]["hinput"].value;
    if (a == "" ||b == "" || c == "" ||d == "" || e == "" ||f == "" ||h == "" ) {
      alert("Required fields must be filled out");
    }
    else {
        Axios.put("http://localhost:3001/plantprofileedit", {plantprofileplantname: plantprofileplantname, plantprofilecategory: plantprofilecategory, plantprofilescientificname: plantprofilescientificname, plantprofilevariety: plantprofilevariety, plantprofileplanttype: plantprofileplanttype, plantprofilemonths: plantprofilemonths, plantprofiledescription: plantprofiledescription, plantprofiledisease1: plantprofiledisease1, plantprofiledisease2: plantprofiledisease2, plantprofiledisease3: plantprofiledisease3, plantprofiledisease4: plantprofiledisease4, plantprofiledisease5: plantprofiledisease5, plantprofileid: plantprofileid});
        navigate('/plantprofiles', { replace: true });
        window.location.reload();
        alert("Plant Profile Updated");
    }
  }
  return (
    <div className='App'>
        {plantprofilelist.map((val)=> {
            return (
                <div>
                    <div class="headform">
        <h1 class="titleheadform">Edit {val.plantprofileplantname}</h1>
      </div>
      <main class="container-fluid">
      <Link to="/plantprofiles"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedPic}>Edit Plant Picture File</button>
        <form class="formdiv" name="myform" required>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Plant Name</label>
                <input name="ainput" required type="text" class="form-control" placeholder={val.plantprofileplantname} defaultValue={val.plantprofileplantname} id="inputDefault" onChange={(e) =>{
          setplantprofileplantname(e.target.value)
        }}/>
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Category</label>
                    <select  name="binput" required class="form-select" id="exampleSelect1" onChange={(e) =>{
          setplantprofilecategory(e.target.value)
        }}>
                    <option>{val.plantprofilecategory}</option>
                        {plantcategorylist.map((val) => {
                          return (
                            <option>{val.plantprofilename}</option>
                          )
                        })}
                    </select>
                    </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Scientific Name</label>
                <input  name="cinput" required type="text" class="form-control" placeholder={val.plantprofilescientificname} defaultValue={val.plantprofilescientificname} id="inputDefault" onChange={(e) =>{
          setplantprofilescientificname(e.target.value)
        }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Variety</label>
                <input  name="dinput" required type="text" class="form-control" placeholder={val.plantprofilevariety} defaultValue={val.plantprofilevariety} id="inputDefault" onChange={(e) =>{
          setplantprofilevariety(e.target.value)
        }}/>
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Plant Type</label>
                    <select name="einput" required class="form-select" id="exampleSelect1"onChange={(e) =>{
          setplantprofileplanttype(e.target.value)
        }}>
                    <option>{val.plantprofileplanttype}</option>
                      {planttypelist.map((val) => {
                        return (
                          <option>{val.planttypename}</option>
                        )
                      })}
                    </select>
                    </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Estimated # of Months to be Harvested</label>
                <input name="finput" required type="text" class="form-control" placeholder={val.plantprofilemonths} defaultValue={val.plantprofilemonths} id="inputDefault" onChange={(e) =>{
          setplantprofilemonths(e.target.value)
        }}/>
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Description</label>
                <input name="hinput" required type="text" class="form-control" placeholder={val.plantprofiledescription} defaultValue={val.plantprofiledescription} id="inputDefault" onChange={(e) =>{
          setplantprofiledescription(e.target.value)
        }}/>
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Plant Diseases</h3></label>
              <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault"> Plant Diesease 1</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder={val.plantprofiledisease1} defaultValue={val.plantprofiledisease1} aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofiledisease1(e.target.value)
        }}/>
                </div>
            </div>
            <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault"> Plant Diesease 2</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder={val.plantprofiledisease2} defaultValue={val.plantprofiledisease2} aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofiledisease2(e.target.value)
        }}/>
                </div>
            </div>
            <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault"> Plant Diesease 3</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder={val.plantprofiledisease3} defaultValue={val.plantprofiledisease3} aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofiledisease3(e.target.value)
        }}/>
                </div>
            </div>
            <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault"> Plant Diesease 4</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder={val.plantprofiledisease4} defaultValue={val.plantprofiledisease4} aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofiledisease4(e.target.value)
        }}/>
                </div>
            </div>
            <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault"> Plant Diesease 5</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder={val.plantprofiledisease5} defaultValue={val.plantprofiledisease5} aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofiledisease5(e.target.value)
        }}/>
                </div>
            </div>
              <button type="button" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
        </form>
        </main>
                </div>
            )
        })}
    </div>
  );
}

export default Plantprofilesedit;
