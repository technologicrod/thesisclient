import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Employeeaccountsedit() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Rodwell Matchon's Account</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Username</label>
                <input type="text" class="form-control" placeholder="rodwellszxc" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Password</label>
                <input type="text" class="form-control" placeholder="********" id="inputDefault" />
              </div>
              <fieldset class="form-group">
                <legend class="mt-4">Account Type</legend>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                  <label class="form-check-label" for="optionsRadios1">
                    Admin
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                  <label class="form-check-label" for="optionsRadios2">
                    Basic
                  </label>
                </div>
              </fieldset>
              <Link to="/employeeaccounts"><button type="button" class="btn btn-outline-success submitbutton">Submit</button></Link>
        </div>
      </main>
    </div>
  );
}

export default Employeeaccountsedit;
