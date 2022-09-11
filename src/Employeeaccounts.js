import React, {useState, useEffect} from 'react';
import './App.css';
import { Link, useNavigate, generatePath } from 'react-router-dom';
import Axios from 'axios';

function Employeeaccounts() {
  const [employeelist, setemployeelist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/employeesaccount').then((response) => {
      setemployeelist(response.data);
    })
  }, [])
  var id = 0;
  function rowSelect(event) {
    id = event;
    console.log(id)
  }
  const navigate = useNavigate();
  const handleProceed = (e) => {
    if (id == 0){
      alert("Select a row to view.")
    }
    else {
      id && navigate(generatePath("/employeeaccountsedit/:id", { id }));
    }
  };
  return (
    <div className='App'>
      
      <div>
        <div class="headform">
        <h1 class="titleheadform">Employee Accounts</h1>
      </div>
      <main class="container-fluid">
      <Link to="/"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Edit</button>
        <Link to="/employeeaccountsadd"><button type="button" class="btn btn-outline-info secondarybutton">Add</button></Link>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Employee ID</th>
                      <th scope="col">Employee Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Account Type</th>
                    </tr>
                  </thead>
                  <tbody>
                  {employeelist.map((val)=> {
                    return (
                    <tr class="table-primary tractive" onClick={rowSelect.bind(this, val.emp_id)}>
                    <th scope="row">{val.emp_id}</th>
                    <th scope="row">{val.emp_name}</th>
                    <th scope="row">{val.username}</th>
                    <th scope="row">{val.account_type}</th>
                  </tr>
                    )
                  })}
                  </tbody>
            </table>
        </div>
      </main>
          </div>
    </div>
  );
}

export default Employeeaccounts;
