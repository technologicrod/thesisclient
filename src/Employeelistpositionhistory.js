import React, {useEffect, useState} from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function Employeelistpositionhistory() {
  const { employeeid } = useParams();
  const x = employeeid
  console.log(x)
  const [employeelist, setemployeelist] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:3001/employeelistpositionhistory/${x}`).then((response) => {
      setemployeelist(response.data);
    })
  }, [x])
  console.log(employeelist)
  return (
    <div className='App'>
      {employeelist.map((val) => {
        return (
          <div>
          
    <div class="headform">
        <h1 class="titleheadform">{val.employeelastname}, {val.employeefirstname}'s Position History</h1>
        <h4>Employee ID:  {employeeid}</h4>
      </div>
      <main class="container-fluid">
      <Link to="/employeelist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <Link to="/employeelist"><button type="button" class="btn btn-outline-info secondarybutton">View</button></Link>
        <Link to="/employeelistadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Position</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr class="table-active tractive">
                            <td scope="row">{val.employeelastname}</td>
                            <td scope="row">{val.employeefirstname}</td>
                            <td scope="row">{val.employeeposition}</td>
                            </tr>
                  </tbody>
            </table>
            </div>
      </main>
          </div>
        )
      })}
    </div>
  );
}

export default Employeelistpositionhistory;
