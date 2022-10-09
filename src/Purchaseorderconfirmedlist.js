import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Purchaseorderconfirmedlist() {
    const [polist, setpolist] = useState([]);
    const po_status = "Active"
    useEffect(() =>{
      Axios.get(`http://localhost:3001/purchaseorderconfirmedlist/${po_status}`).then((response) => {
        setpolist(response.data);
      })
    }, [po_status])
    var id = 0
    function rowSelect(event) {
      id = event;
      console.log(id)
    }
    const navigate = useNavigate();
    const handleProceed = (e) => {
      if (id == 0){
        alert("Select a row to add.")
      }
      else {
        id && navigate(generatePath("/purchaseorderconfirmedinfo/:id", { id }));
      }
    };
    return (
      <div className='App'>
          <div class="headform">
          <h1 class="titleheadform">Confirmed Purchase Orders</h1>
        </div>
        <main class="container-fluid">
        <Link to="/purchaseorders"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
          <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View PO</button>
          <form class="d-flex">
              <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          <div class="tablediv">
              <table class="table table-hover">
                  <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Date Confirmed</th>
                      </tr>
                    </thead>
                    <tbody>
                    {polist.map((val)=> {
                        return (
                            <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.final_po_id)}>
                            <th scope="row">{val.final_po_id}</th>
                            <th scope="row">{val.company_name}</th>
                            <th scope="row">Php {val.total_amount}</th>
                            <th scope="row">{val.date_confirmed}</th>
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

export default Purchaseorderconfirmedlist;


