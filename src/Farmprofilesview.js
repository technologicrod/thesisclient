import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Farmprofilesview() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">View Farm Profile</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/farmprofilesadd1"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <br></br>
        <div class="viewdiv">
            <p><b><h1>General Information</h1></b></p>
            <br></br>
            <p><h3><b>Farm ID:</b>0001</h3></p>
            <p><h3><b>Name:</b>Little Farm</h3></p>
            <p><h3><b>Date Added:</b>December 1, 2021</h3></p>
            <p><h3><b>Address:</b>Lot 17, Calmness St., NHA, Buhangin, Davao City, Davao Del Sur, 8000</h3></p>
            <p><h3><b>Size in Hectares:</b>10 Hectares</h3></p>
            <p><h3><b>Description:</b>Our little farm</h3></p>
            <p><h3><b>Types of Soil:</b>Clay Soil, Loamy Soil</h3></p>
            <p><h3><b>Title:</b>Heavyweight Title</h3></p>
            <br></br>
            <p><h1>Social Information</h1></p>
            <br></br>
            <p><h3><b>Contact Information:</b>09123456789, 09987654321, 208-1234, 208-5678</h3></p>
            <p><h3><b>Contact Person:</b>Alexander Graham Bell</h3></p>
            <p><h3><b>Organizational Chart:</b>Picture</h3></p>
            <p><h3><b>Google Map:</b>Picture</h3></p>
            <p><h3><b>Image Map:</b>Picture</h3></p>
            <p><h1>Owner Information</h1></p>
        </div>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Owner Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Contact Information</th>
                      <th scope="col">Educational Attainment</th>
                      <th scope="col">Position</th>
                      <th scope="col">Job Description</th>
                    </tr>
                  </thead>
                  <tr class="table-primary">
                    <th scope="row">Rodwell Matchon</th>
                    <th scope="row">Buhangin, Davao City</th>
                    <th scope="row">09284539325</th>
                    <th scope="row">college Student</th>
                    <th scope="row">Owner</th>
                    <th scope="row">Owns the farm</th>
                  </tr>
            </table>
        </div>
        </main>
      </div>
  );
}

export default Farmprofilesview;
