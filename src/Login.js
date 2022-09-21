import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Login() {
  function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  if(cityName == "User"){
    document.body.style.backgroundColor = "#f4c2c2";
  }
  else{
    document.body.style.backgroundColor = "#8ea6e4"; /* darkerblue: #2A3244*/
  }


}
  return (
    <div className="App">
    <div class="maindiv">
    <h1 class="company">Farm MIS</h1>
<h2 class="datsys">Farm Management Information System</h2>
    
<div class="login_body">
<center><div class="tab" >
    <x><button class="tablinks" onclick={openCity('User')} id="user" >Log in as User</button></x>
    <x class="tab2"><button class="tablinks" onclick={openCity('Admin')} id="admin" >Log in as Admin</button></x>
</div></center>

<div id = "User" class=" tabcontent">
    <div class="login_box">
      <form class="" method="POST" >
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required/>
          <div class="outer">
            <div class="inner"><input type="submit" value="Login"/></div> 
          </div>
        <p>--- Or Register using ---</p> 
        <button type="button"  class="ff fa fa-android"></button>
        <button type="button"  class="ff fa fa-google"></button>
      </form>
    </div>
</div>
    

<div id="Admin"  class="tabcontent">
    <div class="login_box_admin">
    <form class=""  action="{% url 'login_admin' %}" method="POST" >
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
    </div>
  );
}

export default Login;
