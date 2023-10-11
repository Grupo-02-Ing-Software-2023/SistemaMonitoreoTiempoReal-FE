import React, { useState } from 'react';
import {
	Routes,
	Route,
  } from "react-router-dom";
  import DashboardPage from "./pages/DashboardPage";
  import AdminPage from "./pages/AdminPage";
  import ProfilePage from "./pages/ProfilePage";
  import LoginPage from "./components/login/LoginPage";
  import "./App.css";
  import Sidebar from "./components/Sidebar/Sidebar";
  
  function App() {
	const [token, setToken] = useState();
	if(!token) {
		return <LoginPage setToken={setToken} />
	  }

	return (
	  <div className="App" style={{ display: "flex", height: "100vh" }}>
		<Sidebar />
		  <div style={{ flex: 1, overflowY: "scroll" }}>
			<Routes>
			  <Route path="/dashboard" element={<DashboardPage />} />
			  <Route path="/admin" element={<AdminPage />} />
			  <Route path="/profile" element={<ProfilePage />} />
			  <Route path="/login" element={<LoginPage />} />
			</Routes>
		  </div>
	  </div>
	);
  }
  
  export default App;
  