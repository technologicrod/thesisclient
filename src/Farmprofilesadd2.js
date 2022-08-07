import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Farmprofilesadd2() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Social Information</h1>
      </div>
      <main class="container-fluid">
      <Link to="/farmprofilesadd1"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Information #1</label>
                <input type="text" class="form-control" placeholder="Contact Information #1" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Information #2</label>
                <input type="text" class="form-control" placeholder="Contact Information #2" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Information #3</label>
                <input type="text" class="form-control" placeholder="Contact Information #3" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Information #4</label>
                <input type="text" class="form-control" placeholder="Contact Information #4" id="inputDefault" />
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Contact Person</h3></label>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Middle Name</label>
                <input type="text" class="form-control" placeholder="Middle Code" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position</label>
                <input type="text" class="form-control" placeholder="Position" id="inputDefault" />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Organizational Chart</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Google Map</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Image Map</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <Link to="/farmprofilesadd1"><button type="button" class="btn btn-outline-success prevbutton">Prev</button></Link>
              <Link to="/farmprofilesadd3"><button type="button" class="btn btn-outline-success submitbutton">Next</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Farmprofilesadd2;
