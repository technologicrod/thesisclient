import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Harvestinventorymedia() {
    const { harvest_id } = useParams();
    const x = harvest_id
    return(
        <div className="App">
            <div>
            <div class="headform">
            <h1 class="titleheadform">Image and Video of Harvest {x}</h1>
            </div>
            <main class="container-fluid">
            <Link to="/harvestcalendaronsale"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
                <h2>Image: placeholder</h2>
                <h2>Video: placeholder</h2>
            </main>

        </div>
        </div>
    )
}

export default Harvestinventorymedia;