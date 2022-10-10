import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';


function Purchaseorderadd() {
    const { supply_id } = useParams()
    const x = supply_id
    const navigate = useNavigate();
    const [supplierlist, setsupplierlist] = useState([]);
    useEffect(() =>{
        Axios.get('http://localhost:3001/supplierslist').then((response) => {
            setsupplierlist(response.data);
        })
      }, [])
    const [supplier_id, setsupplier_id] = useState("")
    const [quantity, setquantity] = useState("")
    const [units, setunits] = useState("")
    const [price_per_unit, setprice_per_unit] = useState("")
    var total_payment
    const status = "Pending"
    const register = () => {
        var a = document.forms["myform"]["ainput"].value;
        var b = document.forms["myform"]["binput"].value;
        var c = document.forms["myform"]["cinput"].value;
        var d = document.forms["myform"]["dinput"].value;
        if (a == "" ||b == "" || c == "" ||d == "") {
          alert("Required fields must be filled out");
        }
        else {
            total_payment = quantity*price_per_unit
            Axios.post("http://localhost:3001/purchaseorderadd", {supply_id: x, supplier_id: supplier_id, quantity: quantity, units: units, price_per_unit: price_per_unit, total_payment: total_payment, status: status});
            navigate('/purchaseorderlistinfo', { replace: true });
            window.location.reload();
            alert("Purchase Order Recorded");
        }
      }
    return(
        <div className="App">
            <div class="headform">
            <h1 class="titleheadform">Pending Purchase Order</h1>
            </div>
            <main class="container-fluid">
            <Link to="/purchaseorderlist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
                <form class="formdiv" name="myform" required>
                <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Select Supplier</label>
                    <select  name="ainput" required class="form-select" id="exampleSelect1" onChange={(e) =>{setsupplier_id(e.target.value)}}>
                        <option value="">Select Supplier</option>
                        {supplierlist.map((val) => {
                          return (
                            <option value={val.supplier_id}>{val.supplier_id} {val.company_name}</option>
                          )
                        })}
                    </select>
                    </div>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Quantity</label>
                    <input name="binput" type="number" class="form-control" placeholder="Quantity" id="inputDefault" onChange={(e) =>{setquantity(e.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Units of Measurement</label>
                    <input name="cinput" type="text" class="form-control" placeholder="Unit of Measurement" id="inputDefault" onChange={(e) =>{setunits(e.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Price per Unit in Peso</label>
                    <input name="dinput" type="number" class="form-control" placeholder="Price per Unit" id="inputDefault" onChange={(e) =>{setprice_per_unit(e.target.value)}} required/>
                </div>
                <button type="button" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
                </form>
            </main>

        </div>
    )
}

export default Purchaseorderadd;