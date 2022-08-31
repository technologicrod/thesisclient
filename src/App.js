import React from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Notfound from './Notfound';
import Employeelist from './Employeelist';
import Employeelistadd from './Employeelistadd';
import Employeelistpositionhistory from './Employeelistpositionhistory';
import Employeelistedit from './Employeelistedit';
import Employeeidpicedit from './Employeeidpicedit';
import Employeejobdescriptionedit from './Employeejobdescriptionedit';
import Employeeaccounts from './Employeeaccounts';
import Employeeaccountsedit from './Employeeaccountsedit';
import Employeeaccountsadd from './Employeeaccountsadd';
import Plantutilities from './Plantutilities';
import Plantutilitiessoiltype from './Plantutilitiessoiltype';
import Plantutilitiesplantprofile from './Plantutilitiesplantprofile';
import Plantutilitiesplanttype from './Plantutilitiesplanttype';
import Plantutilitiesotherexpense from './Plantutilitiesotherexpense';
import Farmprofiles from './Farmprofiles';
import Farmprofilesadd1 from './Farmprofilesadd1';
import Farmprofilesadd2 from './Farmprofilesadd2';
import Farmprofilesadd3 from './Farmprofilesadd3';
import Farmprofilesview from './Farmprofilesview';
import Plantprofiles from './Plantprofiles';
import Plantprofilesadd from './Plantprofilesadd';
import Plantprofilesview from './Plantprofilesview';
import Plantprofilesedit from './Plantprofilesedit';
import Plantprofilespicedit from './Plantprofilespicedit';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Crud from './Crud';
import Test from './Test';

const SidebarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route element={<SidebarLayout/>}>
              <Route exact path="/" element={<Home />} />
              <Route path='*' element={<Notfound />} />
              <Route exact path="/employeelist" element={<Employeelist />} />
              <Route exact path="/employeelistadd" element={<Employeelistadd />} />
              <Route path="/employeelistedit/:employeeid" element={<Employeelistedit  />} />
              <Route path="/employeelistpositionhistory/:employeeid" element={<Employeelistpositionhistory  />} />
              <Route path="/employeeidpicedit/:employeeid" element={<Employeeidpicedit />} />
              <Route path="/employeejobdescriptionedit/:employeeid" element={<Employeejobdescriptionedit />} />
              <Route exact path="/employeeaccounts" element={<Employeeaccounts />} />
              <Route path="/employeeaccountsedit/:employeeid" element={<Employeeaccountsedit />} />
              <Route exact path="/employeeaccountsadd" element={<Employeeaccountsadd />} />
              <Route exact path="/plantutilities" element={<Plantutilities />} />
              <Route exact path="/plantutilitiessoiltype" element={<Plantutilitiessoiltype />} />
              <Route exact path="/plantutilitiesplantprofile" element={<Plantutilitiesplantprofile />} />
              <Route exact path="/plantutilitiesplanttype" element={<Plantutilitiesplanttype />} />
              <Route exact path="/plantutilitiesotherexpense" element={<Plantutilitiesotherexpense />} />
              <Route exact path="/farmprofiles" element={<Farmprofiles />} />
              <Route exact path="/farmprofilesadd1" element={<Farmprofilesadd1 />} />
              <Route exact path="/farmprofilesadd2" element={<Farmprofilesadd2 />} />
              <Route exact path="/farmprofilesadd3" element={<Farmprofilesadd3 />} />
              <Route exact path="/farmprofilesview" element={<Farmprofilesview />} />
              <Route exact path="/plantprofiles" element={<Plantprofiles />} />
              <Route exact path="/plantprofilesadd" element={<Plantprofilesadd />} />
              <Route path="/plantprofilesview/:plantprofileid" element={<Plantprofilesview />} />
              <Route path="/plantprofilesedit/:plantprofileid" element={<Plantprofilesedit />} />
              <Route path="/plantprofilespicedit/:plantprofileid" element={<Plantprofilespicedit />} />
              <Route exact path="/crud" element={< Crud />} />
              <Route exact path="/test" element={< Test />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
