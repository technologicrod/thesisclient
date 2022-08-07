import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Farmprofilesadd1() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">General Information</h1>
      </div>
      <main class="container-fluid">
      <Link to="/farmprofiles"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Farm Name</label>
                <input type="text" class="form-control" placeholder="Farm Name" id="inputDefault" />
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Lot</label>
                <input type="text" class="form-control" placeholder="Lot" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Street</label>
                <input type="text" class="form-control" placeholder="Street" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">City</label>
                <input type="text" class="form-control" placeholder="City" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Province</label>
                <input type="text" class="form-control" placeholder="Province" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Zip Code</label>
                <input type="text" class="form-control" placeholder="Zip Code" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Size in Hectares</label>
                <input type="text" class="form-control" placeholder="Size in Hectares" id="inputDefault" />
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Type of Soil #1</label>
                    <select class="form-select" id="exampleSelect1">
                        <option>Clay Soil</option>
                        <option>Loamy soil</option>
                    </select>
                    </div>
                <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Type of Soil #2</label>
                    <select class="form-select" id="exampleSelect1">
                        <option>Clay Soil</option>
                        <option>Loamy soil</option>
                    </select>
                    </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Description</label>
                <input type="text" class="form-control" placeholder="Description" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Title</label>
                <input type="text" class="form-control" placeholder="Title" id="inputDefault" />
              </div>
              
              <Link to="/farmprofilesadd2"><button type="button" class="btn btn-outline-success submitbutton">Next</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Farmprofilesadd1;
