import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
  import DashboardPage from "./pages/DashboardPage";
  import ProfilePage from "./pages/ProfilePage";
  import "./App.css";
  import Sidebar from "./components/Sidebar";
  
  function App() {
	return (
	  <div className="App" style={{ display: "flex", height: "100vh" }}>
		<Sidebar />
		  <div style={{ flex: 1, overflowY: "scroll" }}>
			<Routes>
			  <Route path="/dashboard" element={<DashboardPage />} />
			  <Route path="/profile" element={<ProfilePage />} />
			</Routes>
		  </div>
	  </div>
	);
  }
  
  export default App;
  