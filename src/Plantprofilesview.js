import React, {useEffect, useState} from 'react';
import './App.css';
import { Link, useNavigate, generatePath, useParams } from 'react-router-dom';
import Axios from 'axios';

function Plantprofilesview() {
  const { plantprofileid } = useParams();
  const x = plantprofileid
  const navigate = useNavigate();
  const handleProceed = (e) => {
    x && navigate(generatePath("/plantprofilesedit/:x", { x }));
  };
  const [plantprofilelist, setPlantprofilelist] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:3001/plantprofilesview/${x}`).then((response) => {
      setPlantprofilelist(response.data);
    })
  }, [x])
  return (
    <div className='App'>
        {plantprofilelist.map((val)=> {
          return (
            <div>
              <div class="headform">
               <  h1 class="titleheadform">View {val.plantprofileplantname} Profile</h1>
              </div>
              <main class="container-fluid">
              <Link to="/plantprofiles"><button type="button" class="btn btn-outline-dark backbutton">Back</button></Link>
                <button type="button" class="btn btn-outline-info secondarybutton" onClick={handleProceed}>Edit</button>
                <br></br>
                <div class="viewdiv">
                    <p><h3><b>Name: </b>{val.plantprofileplantname}</h3></p>
                    <p><h3><b>Category: </b>{val.plantprofilecategory}</h3></p>
                    <p><h3><b>Scientific Name: </b>{val.plantprofilescientificname}</h3></p>
                    <p><h3><b>Variety: </b>{val.plantprofilevariety}</h3></p>
                    <p><h3><b>Estimated # of Months to be Harvested :</b>{val.plantprofilemonths} Months</h3></p>
                    <p><h3><b>Description: </b>{val.plantprofiledescription}</h3></p>
                    <p><h3><b>Google Map: </b>placeholder</h3></p>
                    <ul>
                        <li>1. {val.plantprofiledisease1}</li>
                        <li>2. {val.plantprofiledisease2}</li>
                        <li>3. {val.plantprofiledisease3}</li>
                        <li>4. {val.plantprofiledisease4}</li>
                        <li>5. {val.plantprofiledisease5}</li>
                    </ul>
                </div>
                </main>
            </div>
          )
        })}
      </div>
  );
}

export default Plantprofilesview;
