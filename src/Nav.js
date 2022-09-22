import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav me-auto">
      <Link class="nav-link" to='/'><li class="nav-item">Home</li></Link>
      <Link class="nav-link" to='/farmprofiles'><li class="nav-item">Farm Profiles</li></Link>
      <Link class="nav-link" to='/employeelist'><li class="nav-item">Employees</li></Link>
      <Link class="nav-link" to='/plantutilities'><li class="nav-item">Plant Utilities</li></Link>
      <Link class="nav-link" to='/plantprofiles'><li class="nav-item">Plant Profiles</li></Link>
      <Link class="nav-link" to='/harvestcalendarlist'><li class="nav-item">Harvest Calendars</li></Link>
      <Link class="nav-link" to='/harvestinventory'><li class="nav-item">Harvest Inventory</li></Link>
      <Link class="nav-link" to='/login'><li class="nav-item">Sales</li></Link>
      <Link class="nav-link" to='/login'><li class="nav-item">Items Inventory</li></Link>
      <Link class="nav-link" to='/login'><li class="nav-item">Purchase Orders</li></Link>
      <Link class="nav-link" to='/login'><li class="nav-item">Other Expenses</li></Link>
      <Link class="nav-link" to='/login'><li class="nav-item">Finance</li></Link>
      <Link class="nav-link" to='/employeeaccounts'><li class="nav-item">Employee Accounts</li></Link>
      </ul>
    </div>
  </div>
</nav>
  );
}


            
export default Nav;
