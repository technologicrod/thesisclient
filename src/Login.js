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
        <h5 class="login1">Admin System Login</h5>
        <br></br>
        <div class="form-group">
          <input
            type="text"
            class="form-control inputclass"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
            onChange={(e) =>{setUsername(e.target.value)}}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control inputclass"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) =>{setpass(e.target.value)}}
          />
        </div>
        <button type="button" class="btn btn-primary loginbutton" onClick={register}><b>Login</b></button>
        
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
