import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Farmprofiles() {
  const [farmlist, setfarmlist] = useState([]);
  var id = 0;
  const navigate = useNavigate();
  useEffect(() =>{
    Axios.get('http://localhost:3001/farmlist').then((response) => {
      setfarmlist(response.data);
    })
  }, [])
  const ea = farmlist[0]
  var i1
  for (var key in ea) {
    if (ea.hasOwnProperty(key)) {
        if (key === "farm_id"){
          i1 = ea[key]
        }
    }
  }
  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to view.")
    }
    else {
      id && navigate(generatePath("/farmprofilesview/:id", { id }));
    }
  };

  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Farm Profiles</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View</button>
        {farmlist.map((val)=> {
          if (i1 == ""){
            return(
              <Link to="/farmprofilesadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
            )
          }
        })}
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Farm ID</th>
                      <th scope="col">Farm Name</th>
                      <th scope="col">Size in Hectares</th>
                      <th scope="col">Soil Type</th>
                      <th scope="col">Primary Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {farmlist.map((val) => {
                      return (
                        <tr class="table-active tractive" onClick={rowSelect.bind(this, val.farm_id)}>
                        <th scope="row">{val.farm_id}</th>
                        <th scope="row">{val.farm_name}</th>
                        <th scope="row">{val.size}</th>
                        <th scope="row">{val.soil_type}</th>
                        <th scope="row">{val.main_owner}</th>
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

export default Farmprofiles;
