import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Farmprofilesadd3() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">General Information</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
        <label class="col-form-label mt-4" for="inputDefault"><h3>Owner's Name</h3></label>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">First Name</label>
                <input type="text" class="form-control" placeholder="First Name" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Middle Name</label>
                <input type="text" class="form-control" placeholder="Middle Name" id="inputDefault" />
              </div>
              <label class="col-form-label mt-4" for="inputDefault"><h3>Address</h3></label>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Home Address</label>
                <input type="text" class="form-control" placeholder="Home Address" id="inputDefault" />
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
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment</label>
                <input type="text" class="form-control" placeholder="Educational Attainment" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Job Description</label>
                <input type="text" class="form-control" placeholder="Job Description" id="inputDefault" />
              </div>
              <div class="form-group">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked="true" />
            <label class="btn btn-outline-primary" for="btnradio1">Owner 1</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked="true" />
            <label class="btn btn-outline-primary" for="btnradio2">Owner 2</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked="true" />
            <label class="btn btn-outline-primary" for="btnradio3">Owner 3</label>
            </div>
              </div>
              <Link to="/farmprofilesadd2"><button type="button" class="btn btn-outline-success prevbutton">Prev</button></Link>
              <Link to="/farmprofiles"><button type="button" class="btn btn-outline-success submitbutton">Submit</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Farmprofilesadd3;
