import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Employeelistadd() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">New Employee</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
          <label class="col-form-label mt-4" for="inputDefault"><h3>Employee Name</h3></label>
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
                
                <label class="col-form-label mt-4" for="inputDefault">Block</label>
                <input type="text" class="form-control" placeholder="Block" id="inputDefault" />
              </div>
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
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #1</label>
                <input type="text" class="form-control" placeholder="Contact Number #1" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #2</label>
                <input type="text" class="form-control" placeholder="Contact Number #2" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #3</label>
                <input type="text" class="form-control" placeholder="Contact Number #3" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Contact Number #4</label>
                <input type="text" class="form-control" placeholder="Contact Number #4" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Educational Attainment</label>
                <input type="text" class="form-control" placeholder="Educational Attainment" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Position</label>
                <input type="text" class="form-control" placeholder="Position" id="inputDefault" />
              </div>
              <fieldset class="form-group">
                <legend class="mt-4">Radio buttons</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                  <label class="form-check-label" for="optionsRadios1">
                    Daily
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  <label class="form-check-label" for="optionsRadios2">
                    Monthly
                  </label>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <legend class="mt-4">Radio buttons</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                  <label class="form-check-label" for="optionsRadios1">
                    Full Time
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  <label class="form-check-label" for="optionsRadios2">
                    Part Time
                  </label>
                </div>
              </fieldset>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Job Description</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">ID Picture</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <Link to="/employeelist"><button type="button" class="btn btn-outline-success submitbutton">Submit</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Employeelistadd;
