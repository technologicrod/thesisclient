import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Plantprofiles() {
  const [plantprofilelist, setplantprofilelist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantprofile').then((response) => {
      setplantprofilelist(response.data);
    })
  }, [])
  console.log("pr: ",plantprofilelist)
  var id = 0;
  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const navigate = useNavigate();
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to view.")
    }
    else {
      id && navigate(generatePath("/plantprofilesview/:id", { id }));
    }
  };
  const handleProceedEdit = (e) => {
    if (id == 0){
      alert("Select a row to edit.")
    }
    else {
      id && navigate(generatePath("/plantprofilesedit/:id", { id }));
    }
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Plant Profiles</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View</button>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedEdit}>Edit</button>
        <Link to="/plantprofilesadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Variety</th>
                      <th scope="col">Category</th>
                      <th scope="col">Estimate # of Months to be Harvested</th>
                    </tr>
                  </thead>
                  <tbody>
                  {plantprofilelist.map((val) => {
                          return(
                            <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.plant_id)}>
                              <th scope="row">{val.plant_name}</th>
                              <th scope="row">{val.variety}</th>
                              <th scope="row">{val.category}</th>
                              <th scope="row">{val.num_of_mon_to_harvest}</th>
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

export default Plantprofiles;