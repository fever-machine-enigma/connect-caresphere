import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import _Dashboard from "./components/_Dashboard";
import _Appointment from "./components/_Appointment";
import _Login from "./components/_Login";
import _Register from "./components/_Register";
import Landing from "./Landing";
import _Prescription from "./components/_Prescription";
import _Medication from "./components/_Medication";
import _Vaccination from "./components/_Vaccination";
import _Feedback from "./components/_Feedback";
import _Settings from "./components/_Settings";
import _Help from "./components/_Help";
import _Profile from "./components/_Profile";
import _Missing from "./components/_Missing";
import _MedCart from "./components/MedCart";
import { Client } from 'appwrite';

function App() {
  const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658021b595082e4d07bd');
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<_Dashboard />} />
          <Route path="appointment" element={<_Appointment />} />
          <Route path="prescription" element={<_Prescription />} />
          <Route path="medication" element={<_Medication />} />
          <Route path="vaccination" element={<_Vaccination />} />
          <Route path="feedback" element={<_Feedback />} />
          <Route path="settings" element={<_Settings />} />
          <Route path="help" element={<_Help />} />
          <Route path="profile" element={<_Profile />} />
          <Route path="medCart" element={<_MedCart />} />
        </Route>
        <Route path="login" element={<_Login />} />
        <Route path="register" element={<_Register />} />
        <Route path="home" element={<Landing />} />
        <Route path="404" element={<_Missing />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
