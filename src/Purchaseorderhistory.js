import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';

function Purchaseorderhistory() {
    const navigate = useNavigate();
    const po_status = "Paid"
    const [polist, setpolist] = useState([]);
    useEffect(() =>{
      Axios.get(`http://localhost:3001/purchaseorderconfirmedlist/${po_status}`).then((response) => {
        setpolist(response.data);
      })
    }, [po_status])
    console.log(polist)
    var id = 0
    function rowSelect(event) {
      id = event;
      console.log(id)
    }
    const handleProceed = (e) => {
      if (id == 0){
        alert("Select a row to edit.")
      }
      else {
        id && navigate(generatePath("/purchaseorderstockin/:id", { id }));
        window.location.reload()
      }
    };
    return (
      <div className='App'>
          <div class="headform">
          <h1 class="titleheadform">Paid Purchase Orders</h1>
        </div>
        <main class="container-fluid">
        <Link to="/purchaseorders"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Stock In PO</button>
            <div class="tablediv">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Date Paid</th>
                        <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                      {polist.map((val)=> {
                        return (
                            <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.final_po_id)}>
                            <th scope="row">{val.final_po_id}</th>
                            <th scope="row">{val.company_name}</th>
                            <th scope="row">Php {val.total_amount}</th>
                            <th scope="row">{val.date_paid}</th>
                            <th scope="row">{val.po_status}</th>
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

export default Purchaseorderhistory;


