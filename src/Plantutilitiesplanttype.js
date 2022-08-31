import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Plantutilitiesplanttype() {
  const [planttypename, setplanttypename] = useState("")
  const [planttypelist, setplanttypelist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiesplanttype').then((response) => {
      setplanttypelist(response.data);
    })
  }, [])
  const submitPlantType = () => {
    Axios.post("http://localhost:3001/plantutilitiesplanttypeadd", {planttypename: planttypename});
    console.log(planttypename)
    setplanttypelist([...planttypelist, {planttypename: planttypename}]);
  };
  console.log(planttypelist)
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Plant Utilities for Plant Type</h1>
    </div>
    <main class="container-fluid">
    <Link to="/plantutilities"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Plant Type" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) =>{
          setplanttypename(e.target.value)
        }}/>
            <button class="btn btn-primary" type="button" id="button-addon2" onClick={submitPlantType}>Add</button>
        </div>
        </div>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Registered Plant Types</th>
                    </tr>
                  </thead>
                  <tbody>
                  {planttypelist.map((val) => {
                          return(
                            <tr class="table-active tractive">
                            <td scope="row">{val.planttypename}</td>
                            </tr>
                              )
                      })}
                  </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}

export default Plantutilitiesplanttype;
