import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plantprofilesadd() {
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">New Plant Profile</h1>
      </div>
      <main class="container-fluid">
      <Link to="/plantprofiles"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Plant Name</label>
                <input type="text" class="form-control" placeholder="Plant Name" id="inputDefault" />
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Category</label>
                    <select class="form-select" id="exampleSelect1">
                        <option>Tomato</option>
                        <option>Mango</option>
                    </select>
                    </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Scientific Name</label>
                <input type="text" class="form-control" placeholder="Scientific Name" id="inputDefault" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Variety</label>
                <input type="text" class="form-control" placeholder="Variety" id="inputDefault" />
              </div>
              <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Plant Type</label>
                    <select class="form-select" id="exampleSelect1">
                        <option>Vegetable</option>
                        <option>Fruit</option>
                    </select>
                    </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Estimated # of Months to be Harvested</label>
                <input type="text" class="form-control" placeholder="# of Months" id="inputDefault" />
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Plant Picture</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputDefault">Description</label>
                <input type="text" class="form-control" placeholder="Description" id="inputDefault" />
              </div>
              <div class="formdiv">
                <label class="col-form-label mt-4" for="inputDefault">Plant Diseases</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Plant Diseases" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-primary" type="button" id="button-addon2">Add</button>
                </div>
                <ul>
                    <li>Mildew</li>
                    <li>Black Mold</li>
                </ul>
            </div>
              <Link to="/plantprofiles"><button type="button" class="btn btn-outline-success submitbutton">Submit</button></Link>
        </div>
        </main>
      </div>
  );
}

export default Plantprofilesadd;
