import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';

function Iteminventorystockinhistoryfull() {
    const navigate = useNavigate();
    const { supply_id } = useParams()
    const x = supply_id
    const status = "Stocked In"
  const [itemlist, setitemlist] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:3001/iteminventorystockinhistory/${x}/${status}`).then((response) => {
      setitemlist(response.data);
    })
  }, [x, status])
  const handleProceed = (e) => {
    x && navigate(generatePath("/iteminventorystockouthistory/:x", { x }));
  };
  const handleProceedPartial = (e) => {
    x && navigate(generatePath("/iteminventorystockinhistorypartial/:x", { x }));
  };
  return (
    <div className='App'>
        <div class="headform">
        <h1 class="titleheadform">Fully Stocked In History for Item {x}</h1>
      </div>
      <main class="container-fluid">
      <Link to="/iteminventory"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
      <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>View Stock Out History</button>
        <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceedPartial}>View Partial Stocked In History</button>
        <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search ID" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        <div class="tablediv">
            <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">Purchase Order ID</th>
                      <th scope="col">Ordered Quantity</th>
                      <th scope="col">Price per Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemlist.map((val)=> {
                        return (
                            <tr class="table-active tractive">
                                <th scope="col">{val.po_id}</th>
                                <th scope="col">{val.po_quantity}</th>
                                <th scope="col">{val.price_per_unit}</th>
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

export default Iteminventorystockinhistoryfull;

