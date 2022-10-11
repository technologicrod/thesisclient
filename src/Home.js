import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div class="headform">
      <h1 class="titleheadform">Main Form</h1>
    </div>
    <main class="container-fluid">
    <Link to="/login"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <div class="row">
      <Link class="mainbutton" to='/farmprofiles'>Farm Profiles</Link>
      <Link class="mainbutton" to='/employeelist'>Employees</Link>
      <Link class="mainbutton" to='/plantutilities'>Plant Utilities</Link>
      <Link class="mainbutton" to='/plantprofiles'>Plant Profiles</Link>
      <Link class="mainbutton" to='/harvestcalendarlist'>Harvest Calendars</Link>
      <Link class="mainbutton" to='/harvestinventory'>Harvest Inventory</Link>
      <Link class="mainbutton" to='/availableplants'>Available and Wasted Plants</Link>
      <Link class="mainbutton" to='/iteminventory'>Item Inventory</Link>
      <Link class="mainbutton" to='/purchaseorders'>Purchase Orders</Link>
      <Link class="mainbutton" to='/otherexpenseslist'>Other Expenses</Link>
      <Link class="mainbutton" to='/allexpensespo'>All Expenses</Link>
      <Link class="mainbutton" to='/employeeaccounts'>Employee Accounts</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
