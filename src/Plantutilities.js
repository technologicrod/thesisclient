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
    <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <div class="row">
      <Link class="pubutton" to='/plantutilitiessoiltype'>Soil Type <i>(for farm profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesplantprofile'>Plant Category <i>(for plant profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesplanttype'>Plant Type <i>(for plant profile)</i></Link>
      <Link class="pubutton" to='/plantutilitiesotherexpense'>Other Expense Name <i>(for other expense)</i></Link>
      </div>
      </main>
    </div>
  );
}

export default Plantutilities;
