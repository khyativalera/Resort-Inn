import '../assets/css/App.css';
import '../assets/css/utilities.css';
import '../assets/css/footer.css';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Property from '../Pages/Property';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import PropertyDescription from '../Pages/PropertyDescription';
import PropertyTypeList from '../Pages/PropertyTypeList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="Property" element={<Property/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="Login" element={<Login/>}/>
      
      <Route path="/property/:id" element={<PropertyDescription />} />
      <Route path="/properties/type/:type" element={<PropertyTypeList />} />
      
    </Routes>   
    </BrowserRouter>
  );
}

{/* <Route path="PropertyDescription" element={<PropertyDescription/>}/>
      <Route path="PropertyTypeList" element={<PropertyTypeList/>}/> */}

export default App;
