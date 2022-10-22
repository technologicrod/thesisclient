import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Link, useNavigate, generatePath } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("")
  const [pass, setpass] = useState("")
  const navigate = useNavigate();
  const register = () => {
    if(username == "" || pass == ""){
      alert("No inputs")
    }
    else {
      Axios.post("http://localhost:3001/auth", {username: username, pass: pass}).then((response)=>{
        let rdata = response.data
        if (rdata.length > 0){
          alert("Hello, " + rdata)
          navigate(generatePath("/home", {}));
        }
        else {
          alert("Unknown inputted account.")
        }
      });
    }
  }
  const [userinfo, setuserinfo] = useState("");
  useEffect(() =>{
    async function fetchData(){
      await Axios.get(`http://localhost:3001/`).then((response) => {
        setuserinfo(response.data);
      })
      }
  fetchData()
  }, [])
  console.log(userinfo)
  if (userinfo.length <= 0 || userinfo == undefined){
    return (
      <div className="App">
        <div class="maindiv2">
        <h1 class="login1">Admin System Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4"
            >Username</label
          >
          <input
            type="text"
            class="form-control phcolor"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={(e) =>{setUsername(e.target.value)}}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) =>{setpass(e.target.value)}}
          />
        </div>
        <button type="button" class="btn btn-primary loginbutton" onClick={register}>Submit</button>
        
        </div>
      </div>
    );
  }
  else {
    return (
      <div class="App">
        <div class="headform">
        <h1 class="titleheadform">You are already logged in as {userinfo}.</h1>
        </div>
        <Link to="/home"><button type="button" class="btn btn-outline-primary">Home</button></Link>
      </div>
    )
  }
}

export default Login;
