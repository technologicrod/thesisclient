import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';


function Otherexpensespaid() {
  const y = "Paid"
  const [oelist, setoelist] = useState([])
  useEffect(() =>{
    Axios.get(`http://localhost:3001/otherexpensespaid/${y}`).then((response) => {
        setoelist(response.data);
    })
  }, [y])
  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate('/otherexpensesadd', { replace: true });
  }
  const handlePending = (e) => {
    navigate('/otherexpenseslist', { replace: true });
  }
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Pending Other Expenses</h1>
        <main class="container-fluid">
      <Link to="/otherexpenseslist"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleChange}>Add New Other Expense</button>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handlePending}>View Pending Other Expenses</button>
      <form class="d-flex">
                <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Other Expenses ID</th>
                      <th scope="col">Other Expenses Type</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Period From</th>
                      <th scope="col">Period To</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Barcode/Receipt No.</th>
                      <th scope="col">Managed by</th>
                      <th scope="col">Paid To</th>
                      <th scope="col">Amount Paid</th>
                      <th scope="col">Date Paid</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Account ID</th>
                      <th scope="col">Account Name</th>
                    </tr>
                  </thead>
                      <tbody>
                        {oelist.map((val)=> {
                          return(
                            <tr class="table-primary tractive">
                            <td scope="row">{val.other_expenses_id}</td>
                            <td scope="row">{val.otherexpensesname}</td>
                            <td scope="row">Php {val.total_amount}</td>
                            <td scope="row">{val.period_from}</td>
                            <td scope="row">{val.period_to}</td>
                            <td scope="row">{val.due_date}</td>
                            <td scope="row">{val.barcode_or_receipt}</td>
                            <td scope="row">{val.emp_name}</td>
                            <td scope="row">{val.paid_to}</td>
                            <td scope="row">Php {val.total_payment}</td>
                            <td scope="row">{val.date_paid}</td>
                            <td scope="row">{val.payment_method}</td>
                            <td scope="row">{val.account_id}</td>
                            <td scope="row">{val.account_name}</td>
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
export default Otherexpensespaid;
