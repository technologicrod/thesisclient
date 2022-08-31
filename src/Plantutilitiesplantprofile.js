import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Plantutilitiesplantprofile() {
  const [plantprofilename, setplantprofilename] = useState("")
  const [plantprofilelist, setplantprofilelist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiesplantprofile').then((response) => {
      setplantprofilelist(response.data);
    })
  }, [])
  const submitPlantProfile = () => {
    Axios.post("http://localhost:3001/plantutilitiesplantprofileadd", {plantprofilename: plantprofilename});
    setplantprofilename([...plantprofilelist, {plantprofilename: plantprofilename}]);
  };
  console.log(plantprofilelist)
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Plant Utilities for Plant Profile</h1>
    </div>
    <main class="container-fluid">
    <Link to="/plantutilities"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Plant Profile" aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setplantprofilename(e.target.value)
        }}/>
            <button class="btn btn-primary" type="button" id="button-addon2"onClick={submitPlantProfile}>Add</button>
        </div>
        </div>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Registered Plant Profiles</th>
                    </tr>
                  </thead>
                  <tbody>
                  {plantprofilelist.map((val) => {
                          return(
                            <tr class="table-active tractive">
                            <td scope="row">{val.plantprofilename}</td>
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

export default Plantutilitiesplantprofile;
