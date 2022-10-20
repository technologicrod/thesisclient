import React, {useEffect, useState} from 'react';
import './App.css';
import { Link, Navigate  } from 'react-router-dom';
import Axios from 'axios';

function Nav() {
  const [userinfo, setuserinfo] = useState(0);
  useEffect(() =>{
    async function fetchData(){
      await Axios.get(`http://localhost:3001/`).then((response) => {
        setuserinfo(response.data);
      })
      }
  fetchData()
  }, [])
  console.log(userinfo)
  if (userinfo.length <= 0 || userinfo == undefined){
    alert("Not logged in")
    return (<Navigate to="/" />);
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navi" id="navbarColor01">
    <ul class="navbar-nav me-auto">
    <Link class="nav-link" to='/home'><li class="nav-item">Home</li></Link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profiles</a>
            <div class="dropdown-menu">
            <Link class="nav-link" to='/farmprofiles'><li class="nav-item">Farm</li></Link>
            <Link class="nav-link" to='/employeelist'><li class="nav-item">Employees</li></Link>
            <Link class="nav-link" to='/iteminventory'><li class="nav-item">Items</li></Link>
            <Link class="nav-link" to='/plantprofiles'><li class="nav-item">Plants</li></Link>
            <Link class="nav-link" to='/supplierslist'><li class="nav-item">Suppliers</li></Link>
            <Link class="nav-link" to='/plantutilities'><li class="nav-item">Utilities</li></Link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Harvests</a>
            <div class="dropdown-menu">
            <Link class="nav-link" to='/harvestcalendarlist'><li class="nav-item">Harvest Calendars</li></Link>
            <Link class="nav-link" to='/harvestinventory'><li class="nav-item">Harvest Inventory</li></Link>
            <Link class="nav-link" to='/availableplants'><li class="nav-item">Available and Wasted Plants</li></Link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Expenses</a>
            <div class="dropdown-menu">
            <Link class="nav-link" to='/purchaseorders'><li class="nav-item">Purchase Orders</li></Link>
            <Link class="nav-link" to='/otherexpenseslist'><li class="nav-item">Other Expenses</li></Link>
            <Link class="nav-link" to='/allexpensespo'><li class="nav-item">All Expenses</li></Link>
            </div>
          </li>
        <Link class="nav-link" to='/employeeaccounts'><li class="nav-item">Employee Accounts</li></Link>
      </ul>
    </div>
  </div>
</nav>
  );
}


            
export default Nav;
