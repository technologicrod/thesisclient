import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Supplierslist() {
  const [supplierslist, setsupplierslist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/supplierslist').then((response) => {
      setsupplierslist(response.data);
    })
  }, [])
  const [addresslist, setaddresslist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/addresslist').then((response) => {
      setaddresslist(response.data);
    })
  }, [])
  const [contactinfolist, setcontactinfolist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/contactinfolist').then((response) => {
      setcontactinfolist(response.data);
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
      id && navigate(generatePath("/suppliersedit/:id", { id }));
    }
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Suppliers List</h1>
      </div>
      <main class="container-fluid">
      <Link to="/home"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/suppliersadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Edit</button>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Company ID</th>
                      <th scope="col">Cpmpany Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Contact Person</th>
                      <th scope="col">Contact Person Position</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Contact Email</th>
                    </tr>
                  </thead>
                  <tbody>
                          {supplierslist.map((val)=> {
                            return (
                              <tr class="table-active tractive" onClick={rowSelect.bind(this, val.supplier_id)}>
                              <th scope="row">{val.supplier_id}</th>
                              <th scope="row">{val.company_name}</th>
                              {addresslist.map((valo)=> {
                                if(val.supplier_id == valo.supplier_id){
                                  return (
                                    <td scope="row">Block {valo.block} Lot {valo.lot} {valo.street}, Brgy. {valo.barangay}, {valo.city}, {valo.province}, {valo.zipcode}</td>
                                  )
                                }
                              })}
                              {contactinfolist.map((valo)=> {
                                if(val.supplier_id == valo.supplier_id){
                                  return (
                                      <th scope="row">{valo.contact_person_name}</th>
                                  )
                                }
                              })}
                              {contactinfolist.map((valo)=> {
                                if(val.supplier_id == valo.supplier_id){
                                  return (
                                      <th scope="row">{valo.position}</th>
                                  )
                                }
                              })}
                              {contactinfolist.map((valo)=> {
                                if(val.supplier_id == valo.supplier_id){
                                  return (
                                      <th scope="row">{valo.contact_num}</th>
                                  )
                                }
                              })}
                              {contactinfolist.map((valo)=> {
                                if(val.supplier_id == valo.supplier_id){
                                  return (
                                      <th scope="row">{valo.contact_email}</th>
                                  )
                                }
                              })}
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

export default Supplierslist;


