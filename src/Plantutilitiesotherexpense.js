import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Plantutilitiesotherexpense() {
  const [otherexpensesname, setotherexpensesname] = useState("")
  const [otherexpenseslist, setotherexpenseslist] = useState([]);
  useEffect(() =>{
    Axios.get('http://localhost:3001/plantutilitiesotherexpenses').then((response) => {
      setotherexpenseslist(response.data);
    })
  }, [])
  const [myid, setmyid] = useState("")
  const submitOtherExpenses = async () => {
    await Axios.post("http://localhost:3001/plantutilitiesotherexpensesadd", {otherexpensesname: otherexpensesname}).then((result) => {{console.log(result.data.insertId)}});
    console.log("id: ", myid)
    setotherexpenseslist([...otherexpenseslist, {otherexpensesname: otherexpensesname}]);
  };
  return (
    <div className='App'>
        <div class="headform">
      <h1 class="titleheadform">Utilities for Other Expense Type</h1>
    </div>
    <main class="container-fluid">
    <Link to="/plantutilities"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
        <div class="formdiv">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Other Expense" aria-label="Recipient's username" aria-describedby="button-addon2"onChange={(e) =>{
          setotherexpensesname(e.target.value)
        }}/>
            <button class="btn btn-primary" type="button" id="button-addon2" onClick={submitOtherExpenses}>Add</button>
        </div>
        </div>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Registered Other Expense</th>
                    </tr>
                  </thead>
                  <tbody>
                  {otherexpenseslist.map((val) => {
                          return(
                            <tr class="table-active tractive">
                            <td scope="row">{val.otherexpensesname}</td>
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

export default Plantutilitiesotherexpense;
