import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plantprofilesview() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">View Plant Profile</h1>
      </div>
      <main class="container-fluid">
      <Link to="/plantprofiles"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/plantprofilesadd"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <br></br>
        <div class="viewdiv">
            <p><h3><b>Name:</b>Carabao Mango</h3></p>
            <p><h3><b>Category:</b>Fruit</h3></p>
            <p><h3><b>Scientific Name:</b>Mangifera indica L.</h3></p>
            <p><h3><b>Variety:</b>Native</h3></p>
            <p><h3><b>Estimated # of Months to be Harvested:</b>12 Months</h3></p>
            <p><h3><b>Description:</b>Our carabao mango.</h3></p>
            <p><h3><b>Google Map:</b>Picture</h3></p>
            <p><h3><b>Plant Diseases:</b></h3></p>
            <ul>
                <li>Mildew</li>
                <li>Black Mold</li>
            </ul>
        </div>
            
        </main>
      </div>
  );
}

export default Plantprofilesview;
