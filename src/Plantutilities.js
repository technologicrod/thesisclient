import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plantutilities() {
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Plant Utilities</h1>
    </div>
    <main class="container-fluid">
    <Link to="/home"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <div class="row">
      <Link class="pubutton" to='/plantutilitiessoiltype'><b>Soil Type</b> <br></br> <i>(for farm profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesplantprofile'><b>Plant Category</b> <br></br> <i>(for plant profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesplanttype'><b>Plant Type</b> <br></br> <i>(for plant profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesitemcategory'><b>Item Category</b> <br></br> <i>(for item profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesotherexpense'><b>Other Expense Type</b> <br></br> <i>(for other expense)</i></Link>
      <Link class="pubutton" to='/plantutilitiesunitsofmeasurement'><b>Units of Measurement</b> <br></br> <i>(for measurements)</i></Link>
      <Link class="pubutton" to='/plantutilitiespaymentmethod'><b>Payment Methods</b> <br></br> <i>(for payments)</i></Link>
      </div>
      </main>
    </div>
  );
}

export default Plantutilities;
