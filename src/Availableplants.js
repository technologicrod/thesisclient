import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';


function Availableplants() {
  const y = "Active"
  const [batchlist, setbatchlist] = useState([])
  useEffect(() =>{
    Axios.get(`http://localhost:3001/harvestvariationslist/${y}`).then((response) => {
      setbatchlist(response.data);
    })
  }, [y])
  var id = 0
  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const navigate = useNavigate();
  const status = "Wasted"
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to mark as wasted.")
    }
    else {
        Axios.put("http://localhost:3001/availablewastedplantsupdate", {status: status, quantity_id: id});
        alert("Plant Status Updated")
        navigate('/availableplants', { replace: true });
        window.location.reload();
    }
  };
  const handleChange = (e) => {
    navigate('/availableplantswasted', { replace: true });
  }
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Available Plants for Sale</h1>
        <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-danger secondarybutton" onClick={handleProceed}>Mark as Wasted</button>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleChange}>View Wasted Plants</button>
      <form class="d-flex">
                <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Quantity ID</th>
                      <th scope="col">Harvest ID</th>
                      <th scope="col">Plant</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Quantity Harvested</th>
                      <th scope="col">Units</th>
                      <th scope="col">Price per Unit</th>
                      <th scope="col">Active</th>
                    </tr>
                  </thead>
                      <tbody>
                        {batchlist.map((val)=> {
                          return(
                            <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.quantity_id)}>
                            <td scope="row">{val.quantity_id}</td>
                            <td scope="row">{val.harvest_id}</td>
                            <td scope="row">{val.plant_name}</td>
                            <td scope="row">{val.grade}</td>
                            <td scope="row">{val.quantity_harvested}</td>
                            <td scope="row">{val.units}</td>
                            <td scope="row">{val.price_per_unit}</td>
                            <td scope="row">{val.var_status}</td>
                            </tr>
                          )
                        })}
                      </tbody>
            </table>
            </div>
        </main>
      </div>
      </div>
  );
}
export default Availableplants;