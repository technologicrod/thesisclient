import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Allexpensespo() {
    const [polist, setpolist] = useState([])
    useEffect(() =>{
      Axios.get(`http://localhost:3001/purchaseorderexpenses`).then((response) => {
        setpolist(response.data);
      })
    }, [])
    const navigate = useNavigate();
    const handleChange = (e) => {
      navigate('/allexpensesoe', { replace: true });
    }
    return (
      <div className='App'>
          <div class="headform">
          <h1 class="titleheadform">Purchase Orders Expenses</h1>
          <main class="container-fluid">
        <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleChange}>View Paid Other Expenses</button>
        <form class="d-flex">
                  <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
              <div class="tablediv">
              <table class="table table-hover">
                  <thead>
                      <tr>
                        <th scope="col">Payment PO ID</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date Paid</th>
                      </tr>
                    </thead>
                        <tbody>
                          {polist.map((val)=> {
                            return(
                              <tr class="table-primary tractive">
                              <td scope="row">{val.payment_po_id}</td>
                              <td scope="row">{val.dp_amount}</td>
                              <td scope="row">{val.date_paid}</td>
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

export default Allexpensespo;


