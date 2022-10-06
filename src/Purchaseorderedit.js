import React, { useState, useEffect } from "react";
import './App.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Purchaseorderedit() {
    const { po_id } = useParams();
    const x = po_id
    console.log(x)
    const navigate = useNavigate()
    const [poinfo, setpoinfo] = useState([]);
    useEffect(() =>{
        Axios.get(`http://localhost:3001/purchaseorderinfo/${x}`).then((response) => {
            setpoinfo(response.data);
        })
    }, [x])
    const [status, setstatus] = useState("")
    const ea = poinfo[0]
    var i1
    for (var key in ea) {
        if (ea.hasOwnProperty(key)) {
            if (key === "status"){
              i1 = ea[key]
            }
        }
      }
      useEffect(() =>{
        setstatus(i1)
      }, [i1])
    const register = () => {
        Axios.put("http://localhost:3001/purchaseorderupdate", {status: status, po_id: x});
        navigate('/purchaseorderlistinfo', { replace: true });
        window.location.reload();
        alert("PO updated");
      }
    return(
        <div className="App">
            {poinfo.map((val)=>{
                return(
                    <div>
            <div class="headform">
            <h1 class="titleheadform">Edit PO {val.po_id} Status</h1>
            </div>
            <main class="container-fluid">
            <Link to="/purchaseorderlistinfo"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
                <form class="formdiv" name="myform" required>
                    <fieldset name="binput" class="form-group" onChange={(e) =>{setstatus(e.target.value)}} required>
                        <legend class="mt-4">Status</legend>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Pending" defaultChecked={val.status === "Pending"}/>
                        <label class="form-check-label" for="optionsRadios1">
                        Pending
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="Inactive" defaultChecked={val.status === "Inactive"}/>
                        <label class="form-check-label" for="optionsRadios2">
                            Inactive 
                        </label>
                        </div>
                    </fieldset>
                <button type="button" class="btn btn-outline-success submitbutton" onClick={register}>Submit</button>
                </form>
            </main>

                     </div>   
                )
            })}
        </div>
    )
}

export default Purchaseorderedit;