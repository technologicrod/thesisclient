import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';


function Harvestcalendarharvested() {
    const batch_status = "Harvested"
    const [batchlist, setbatchlist] = useState([])
    useEffect(() =>{
    Axios.get(`http://localhost:3001/plantbatchlist/${batch_status}`).then((response) => {
        setbatchlist(response.data);
    })
    }, [batch_status])
    var id = 0
    const navigate = useNavigate();
    function rowSelect(event) {
    id = event;
    console.log(id)
    }
    const [latestlist, setlatestlist] = useState([])
    useEffect(() =>{
    Axios.get(`http://localhost:3001/plantbatchlistlatestinfo`).then((response) => {
        setlatestlist(response.data);
    })
    }, [])
    console.log(batchlist)
    var id = 0
    const handleProceed = (e) => {
        if (id == 0){
          alert("Select a row to input.")
        }
        else {
          id && navigate(generatePath("/harvestinventoryinput/:id", { id }));
        }
      };

  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Harvested Batches List</h1>
        <main class="container-fluid">
      <Link to="/harvestinventory"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Input for Sales</button>
      <Link to="/harvestcalendarreadyforsale"><button type="button" class="btn btn-outline-info secondarybutton">View Ready for Sale Batches</button></Link>
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
                        <th scope="col">Batch ID</th>
                        <th scope="col">Plant Planted</th>
                        <th scope="col">Current Stage</th>
                        <th scope="col">Date Harvested</th>
                        <th scope="col">Quantity Harvested</th>
                        <th scope="col">Latest Remarks</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            {batchlist.map((val)=> {
                            return(
                                <tr class="table-active tractive" onClick={rowSelect.bind(this, val.batch_id)}>
                                <td scope="row">{val.batch_id}</td>
                                <td scope="row">{val.plant_name}</td>
                                {latestlist.map((valo)=> {
                                if(valo.batch_id == val.batch_id){
                                    return(
                                    <td scope="row">{valo.plant_stage}</td>
                                    )
                                }
                                })}
                                <td scope="row">{val.date_harvested}</td>
                                {latestlist.map((valo)=> {
                                if(valo.batch_id == val.batch_id){
                                    return(
                                    <td scope="row">{valo.quantity}</td>
                                    )
                                }
                                })}
                                {latestlist.map((valo)=> {
                                if(valo.batch_id == val.batch_id){
                                    return(
                                    <td scope="row">{valo.remarks}</td>
                                    )
                                }
                                })}
                                <td scope="row">{val.batch_status}</td>
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
export default Harvestcalendarharvested;
