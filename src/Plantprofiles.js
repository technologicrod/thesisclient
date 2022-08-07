import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plantprofiles() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Plant Profiles</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/plantprofilesview"><button type="button" class="btn btn-outline-info secondarybutton">View</button></Link>
        <Link to="/plantprofilesadd"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <Link to="/plantprofilesadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Variety</th>
                      <th scope="col">Category</th>
                      <th scope="col">Estimate # of Months to be Harvested</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">Carabao Mango</th>
                    <th scope="row">Native</th>
                    <th scope="row">Fruit</th>
                    <th scope="row">12 months</th>
                  </tr>
            </table>
        </div>
        </main>
      </div>
  );
}

export default Plantprofiles;
