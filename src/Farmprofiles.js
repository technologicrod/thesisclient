import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Farmprofiles() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Farm Profiles</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/farmprofilesview"><button type="button" class="btn btn-outline-info secondarybutton">View</button></Link>
        <Link to="/farmprofilesadd1"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Farm ID</th>
                      <th scope="col">Farm Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Size in Hectares</th>
                      <th scope="col">Owner/s</th>
                      <th scope="col">Contact Information</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">ID</th>
                    <th scope="row">Little Farm</th>
                    <th scope="row">Buhangin, Davao City</th>
                    <th scope="row">10 Hectares</th>
                    <th scope="row">Mickey Moose</th>
                    <th scope="row">09123456789</th>
                  </tr>
            </table>
        </div>
        </main>
      </div>
  );
}

export default Farmprofiles;
