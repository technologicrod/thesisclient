import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';

function Purchaseorderconfirmation() {
    const { supplier_id } = useParams();
    const x = supplier_id
    const stat = "Pending"
    const [polist, setpolist] = useState([]);
    useEffect(() =>{
      Axios.get(`http://localhost:3001/purchaseorderinfogroup/${x}/${stat}`).then((response) => {
        setpolist(response.data);
      })
    }, [x,stat])
    const [supplierinfo, setsupplierinfo] = useState([]);
    useEffect(() =>{
        Axios.get(`http://localhost:3001/suppliersinfo/${x}`).then((response) => {
            setsupplierinfo(response.data);
        })
      }, [x])
    var poidlist = []
    var totalamount = 0
    var company_name
    for (let i = 0; i < polist.length; i++){
      for (var key in polist[i]){
        if(polist[i].hasOwnProperty(key)){
          if(key === "po_id"){
            poidlist.push(polist[i][key])
          }
          if(key === "total_payment"){
            totalamount += polist[i][key]
          }
      }
    }
    }
    const ea = supplierinfo[0]
    for (var key in ea) {
        if (ea.hasOwnProperty(key)) {
            if (key === "company_name"){
                company_name = ea[key]
            }
        }
      }
    const register = () => {
        Axios.post("http://localhost:3001/purchaseorderconfirmadd", {supplier_id: x, poidlist: poidlist, totalamount: totalamount});
        alert(poidlist)
    }
    return (
      <div className='App'>
          <div class="headform">
          <h1 class="titleheadform">Confirmation for Pending POs On Supplier {company_name}</h1>
          <h4>Total Amount: Php {totalamount}</h4>
        </div>
        <main class="container-fluid">
        <Link to="/purchaseorderlistinfo"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
          <br></br>
            <div class="tablediv">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                          <th scope="col">PO ID</th>
                          <th scope="col">Item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Units</th>
                          <th scope="col">Price per Unit</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      {polist.map((val)=> {
                        return (
                            <tbody>
                            <tr>
                              <th scope="row">{val.po_id}</th>
                              <th scope="row">{val.supply_name}</th>
                              <th scope="row">{val.po_quantity}</th>
                              <th scope="row">{val.units}</th>
                              <th scope="row">{val.price_per_unit}</th>
                              <th scope="row">{val.total_payment}</th>
                              </tr>
                              </tbody>
                          )
                      })}
                </table>
                <button type="button" class="btn btn-outline-primary" onClick={register}>Check Out PO</button>
                <br></br>
              </div>
          </main>
        </div>
    );
  }

export default Purchaseorderconfirmation;


