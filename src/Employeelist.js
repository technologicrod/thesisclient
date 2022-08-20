import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';


function Employeelist() {
  const [employeelist, setemployeelist] = useState([]);
  var id = {};
  var goat = "goat milk"
  const navigate = useNavigate();


  useEffect(() =>{
    Axios.get('http://localhost:3001/employeelist').then((response) => {
      setemployeelist(response.data);
    })
  }, [])

  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const handleProceed = (e) => {
    id && navigate(generatePath("/employeelistpositionhistory/:id", { id }));
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Employees List</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View</button>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Edit</button></Link>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Last Name</th>
                      <th scope="col">First Name</th>
                    </tr>
                  </thead>
                      <tbody>
                      {employeelist.map((val) => {
                          return(
                            <tr class="table-active tractive" onClick={rowSelect.bind(this, val.employeeid)}>
                            <td scope="row">{val.employeelastname}</td>
                            <td scope="row">{val.employeefirstname}</td>
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
export default Employeelist;
