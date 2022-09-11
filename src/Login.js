import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
    <div class="maindiv">
    <h1 class="company">Farm MIS</h1>
<h2 class="datsys">Farm Management Information System</h2>

<div class="login_body">
<center><div class="tab" >
    <x><button class="tablinks" onclick="openCity(event, 'User')" id="user" >Log in as User</button></x>
    <x class="tab2"><button class="tablinks" onclick="openCity(event, 'Admin')" id="admin" >Log in as Admin</button></x>
</div></center>

<div id = "User" class=" tabcontent">
    <div class="login_box">
      <div class="" method="POST" >
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required/>
          <div class="outer">
            <div class="inner"><input type="submit" value="Login"/></div> 
          </div>
        <p>--- Or Register using ---</p>
      </div>
      </div>
    </div>
</div>
    

<div id="Admin"  class="tabcontent">
    <div class="login_box_admin">
    <form class=""   method="POST" >
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required/>
        <div class="outer">
            <div class="inner"><input type="submit" value="Login"/></div>
        </div>
    </form>
    </div>
</div>
    </div>
    </div>
  );
}

export default Login;
