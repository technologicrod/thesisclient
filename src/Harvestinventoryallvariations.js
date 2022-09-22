import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';


function Harvestinventoryallvariations() {
  const [batchlist, setbatchlist] = useState([])
  useEffect(() =>{
    Axios.get(`http://localhost:3001/harvestvariationslist`).then((response) => {
      setbatchlist(response.data);
    })
  }, [])
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Variations List On Sale</h1>
        <main class="container-fluid">
      <Link to="/harvestinventory"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Quantity ID</th>
                      <th scope="col">Harvest ID</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Quantity Harvested</th>
                      <th scope="col">Units</th>
                      <th scope="col">Price per Unit</th>
                    </tr>
                  </thead>
                      <tbody>
                        {batchlist.map((val)=> {
                          return(
                            <tr class="table-active tractive">
                            <td scope="row">{val.quantity_id}</td>
                            <td scope="row">{val.harvest_id}</td>
                            <td scope="row">{val.grade}</td>
                            <td scope="row">{val.quantity_harvested}</td>
                            <td scope="row">{val.units}</td>
                            <td scope="row">{val.price_per_unit}</td>
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
export default Harvestinventoryallvariations;
