import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CompanyPage from "./components/CompanyPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect, useState } from "react";
import {GlobalContextProvider} from './contexts/GlobalContext.js'
import UpdateModal from "./components/UpdateModal.jsx";
function App() {
  const [isLogin,setIsLogin] = useState(false);
  const token = localStorage.getItem("authToken");
    useEffect(() => {
    
      if(token){
        setIsLogin(true)
      }
    }, [isLogin])
    

  return (
    <div>
      
      <Router>
      {isLogin &&<Navbar/>}
     
          <Routes>
            
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/home" element={{token} ? <Home /> : <Navigate to="/login" />}/>
            <Route path="/companypage/:companyId" element={<CompanyPage />} />
            <Route path="/updatecopy/:copyName/:companyId/:copyId" element={<UpdateModal />} />
          </Routes>

      </Router>
    </div>
  )
}

export default App;
