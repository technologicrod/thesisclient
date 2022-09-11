import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';


function Employeelist() {
  const [employeelist, setemployeelist] = useState([]);
  var id = 0;
  var goat = "goat milk"
  const navigate = useNavigate();


  useEffect(() =>{
    Axios.get('http://localhost:3001/employeelist').then((response) => {
      setemployeelist(response.data);
    })
  }, [])
  console.log(employeelist)

  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  console.log("This is the id: ", id)
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to view.")
    }
    else {
      id && navigate(generatePath("/employeelistpositionhistory/:id", { id }));
    }
  };
  const handleProceedEdit = (e) => {
    if (id == 0){
      alert("Select a row to edit.")
    }
    else {
      id && navigate(generatePath("/employeelistedit/:id", { id }));
      console.log(id)
    }
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Employees List</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View</button>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedEdit}>Edit</button>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Employee Name</th>
                      <th scope="col">Farm Name</th>
                    </tr>
                  </thead>
                      <tbody>
                      {employeelist.map((val) => {
                          return(
                            <tr class="table-active tractive" onClick={rowSelect.bind(this, val.emp_id)}>
                            <td scope="row">{val.emp_name}</td>
                            <td scope="row">{val.farm_id}</td>
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
