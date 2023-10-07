import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
  import HomePage from "./pages/HomePage";
  import ContactPage from "./pages/ContactPage";
  import "./App.css";
  import Sidebar from "./components/Sidebar";
  
  function App() {
	return (
	  <div className="App" style={{ display: "flex", height: "100vh" }}>
		<Sidebar />
		  <div style={{ flex: 1, overflowY: "scroll" }}>
			<Routes>
			  <Route path="/" element={<HomePage />} />
			  <Route path="/contact" element={<ContactPage />} />
			</Routes>
		  </div>
	  </div>
	);
  }
  
  export default App;
  