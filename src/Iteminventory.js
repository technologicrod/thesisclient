import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Iteminventory() {
  const [itemlist, setitemlist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/iteminventory').then((response) => {
      setitemlist(response.data);
    })
  }, [])
  var id = 0
  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const navigate = useNavigate();
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to edit.")
    }
    else {
      id && navigate(generatePath("/iteminventoryedit/:id", { id }));
    }
  };
  const handleProceedHistory = (e) => {
    if (id == 0){
      alert("Select a row to view history.")
    }
    else {
      id && navigate(generatePath("/iteminventorystockouthistory/:id", { id }));
    }
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Item Inventory</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/iteminventoryadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Edit</button>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedHistory}>View History</button>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Item ID</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity On-Hand</th>
                      <th scope="col">Reorder Level Quantity</th>
                      <th scope="col">Unit of Measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                      {itemlist.map((val)=> {
                        if (val.quantity <= val.re_order_lvl) {
                          return (
                            <tr class="table-danger tractive" onClick={rowSelect.bind(this, val.supply_id)}>
                            <th scope="row">{val.supply_id}</th>
                            <th scope="row">{val.supply_name}</th>
                            <th scope="row">{val.quantity}</th>
                            <th scope="row">{val.re_order_lvl}</th>
                            <th scope="row">{val.units}</th>
                            </tr>
                          )
                        }
                        else {
                          return (
                            <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.supply_id)}>
                            <th scope="row">{val.supply_id}</th>
                            <th scope="row">{val.supply_name}</th>
                            <th scope="row">{val.quantity}</th>
                            <th scope="row">{val.re_order_lvl}</th>
                            <th scope="row">{val.units}</th>
                            </tr>
                          )
                        }
                      })}
                  </tbody>
            </table>
            </div>
        </main>
      </div>
  );
}

export default Iteminventory;

