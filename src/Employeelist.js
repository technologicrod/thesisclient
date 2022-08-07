import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Employeelist() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Employees List</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/employeelistpositionhistory"><button type="button" class="btn btn-outline-info secondarybutton">View</button></Link>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Employees List</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">Rodwell Matchon</th>
                  </tr>
            </table>
        </div>
        </main>
      </div>
  );
}

export default Employeelist;
