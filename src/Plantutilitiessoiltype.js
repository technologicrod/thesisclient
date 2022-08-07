import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plantutilitiessoiltype() {
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Plant Utilities for Soil Type</h1>
    </div>
    <main class="container-fluid">
    <Link to="/plantutilities"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Soil Type" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-primary" type="button" id="button-addon2">Add</button>
        </div>
        </div>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Registered Soil Types</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">Clay Soil</th>
                  </tr>
            </table>
        </div>
      </main>
    </div>
  );
}

export default Plantutilitiessoiltype;
