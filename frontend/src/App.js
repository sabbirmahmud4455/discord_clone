import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './pages/authPages/login/LoginPage';
import RegisterPage from './pages/authPages/register/RegisterPage';
import DashboardPage from './pages/Dashboard';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
    
    <Router>
      <Routes>

        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/register" element={<RegisterPage/>}></Route>
        <Route exact path="/dashboard" element={<DashboardPage/>}></Route>
        <Route exact path="/" element={<Navigate replace to="/dashboard" />}></Route>

      </Routes>
    </Router>
    <AlertNotification></AlertNotification>
    </>
    
  );
}

export default App;
