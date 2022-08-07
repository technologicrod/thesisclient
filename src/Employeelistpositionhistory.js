import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Employeelistpositionhistory() {
  return (
    <div className='App'>
    <div class="headform">
        <h1 class="titleheadform">Rodwell Matchon's Position History</h1>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/employeelist"><button type="button" class="btn btn-outline-info secondarybutton">View</button></Link>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Position</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">March 20, 2022</th>
                    <td>Purchase Order Manager</td>
                    <td>Full Time</td>
                  </tr>
            </table>
        </div>
      </main>
      </div>
  );
}

export default Employeelistpositionhistory;
