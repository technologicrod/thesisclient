import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';


function Harvestcalendarreadyforsale() {
    const batch_status = "Ready for Sale"
    const [batchlist, setbatchlist] = useState([])
    useEffect(() =>{
    Axios.get(`http://localhost:3001/harvestbatchlist/${batch_status}`).then((response) => {
        setbatchlist(response.data);
    })
    }, [batch_status])
    var id = 0
    const navigate = useNavigate();
    function rowSelect(event) {
    id = event;
    console.log(id)
    }
    console.log("batch: ",batchlist)
    var id = 0
    const handleProceed = (e) => {
        if (id == 0){
          alert("Select a row to input.")
        }
        else {
          id && navigate(generatePath("/harvestinventoryinputvariations/:id", { id }));
        }
      };
    const handleProceedMedia = (e) => {
      if (id == 0){
        alert("Select a row to view.")
      }
      else {
        id && navigate(generatePath("/harvestinventorymedia/:id", { id }));
      }
    };

  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Ready for Sale Batches List</h1>
        <main class="container-fluid">
      <Link to="/harvestinventory"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Input Quantity Variations</button>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedMedia}>View Batch Media</button>
      <Link to="/harvestcalendarharvested"><button type="button" class="btn btn-outline-info secondarybutton">View Harvested Batches</button></Link>
      <Link to="/harvestcalendaronsale"><button type="button" class="btn btn-outline-info secondarybutton">View On Sale Batches</button></Link>
      <Link to="/harvestinventoryallvariations"><button type="button" class="btn btn-outline-info secondarybutton">View On Sale Crops</button></Link>
      

        <form class="d-flex">
                <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
                <div class="tablediv">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Harvest ID</th>
                        <th scope="col">Batch ID</th>
                        <th scope="col">Plant Planted</th>
                        <th scope="col">Date Harvested</th>
                        <th scope="col">Batch Quality</th>
                        <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                        <tbody>
                            {batchlist.map((val)=> {
                            return(
                                <tr class="table-active tractive" onClick={rowSelect.bind(this, val.harvest_id)}>
                                <td scope="row">{val.harvest_id}</td>
                                <td scope="row">{val.batch_id}</td>
                                <td scope="row">{val.plant_name}</td>
                                <td scope="row">{val.date_harvested}</td>
                                <td scope="row">{val.batch_quality}</td>
                                <td scope="row">{val.remarks}</td>
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
export default Harvestcalendarreadyforsale;