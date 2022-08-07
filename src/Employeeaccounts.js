import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Employeeaccounts() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Employee Accounts</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/employeeaccountsedit"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <Link to="/employeeaccountsadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Employee Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Account Type</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">Rodwell Matchon</th>
                    <td>rodwellszxc</td>
                    <td>Admin</td>
                  </tr>
            </table>
        </div>
      </main>
    </div>
  );
}

export default Employeeaccounts;
