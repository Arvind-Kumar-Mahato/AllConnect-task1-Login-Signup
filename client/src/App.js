
import './App.css';

import Login from './Components/Login';
import {Routes, Route} from "react-router-dom";
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import PasswordReset from './Components/PasswordReset';
import ForgotPassword from './Components/ForgotPassword';
import Update from './Components/Update';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
        <Route path="/profile" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
