import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Plantutilitiessoiltype() {
  const [soiltypename, setsoiltypename] = useState("")
  const [soiltypelist, setsoiltypelist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiessoiltype').then((response) => {
      setsoiltypelist(response.data);
    })
  }, [])
  const submitSoilType = () => {
    Axios.post("http://localhost:3001/plantutilitiessoiltypeadd", {soiltypename: soiltypename});
    setsoiltypelist([...soiltypelist, {soiltypename: soiltypename}]);
  };
  console.log(soiltypelist)
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Utilities for Soil Type</h1>
    </div>
    <main class="container-fluid">
    <Link to="/plantutilities"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Soil Type" aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setsoiltypename(e.target.value)
        }}/>
            <button class="btn btn-primary" type="button" id="button-addon2" onClick={submitSoilType}>Add</button>
        </div>
        </div>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Registered Soil Types</th>
                    </tr>
                  </thead>
                  <tbody>
                  {soiltypelist.map((val) => {
                          return(
                            <tr class="table-active tractive">
                            <td scope="row">{val.soiltypename}</td>
                            </tr>
                              )
                      })}
                  </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}

export default Plantutilitiessoiltype;
