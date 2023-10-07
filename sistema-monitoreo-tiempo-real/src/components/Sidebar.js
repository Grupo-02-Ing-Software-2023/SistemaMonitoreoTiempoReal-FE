import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from "cdbreact";
  import { Link } from "react-router-dom";
  import "./Sidebar.css"; // Import your custom CSS file for styling
  
  const Sidebar = () => {
    return (
      <div className="sidebar-container"> {/* Add a container div */}
        <CDBSidebar
          textColor="#fff"
          backgroundColor="#333"
          className="sidebar-fixed"
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </Link>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/" className="text-decoration-none">
                <CDBSidebarMenuItem>Dashboard</CDBSidebarMenuItem>
              </Link>
              <Link to="/contact" className="text-decoration-none">
                <CDBSidebarMenuItem>Tables</CDBSidebarMenuItem>
              </Link>
              <Link to="/profile" className="text-decoration-none">
                <CDBSidebarMenuItem>Profile page</CDBSidebarMenuItem>
              </Link>
              <Link to="/analytics" className="text-decoration-none">
                <CDBSidebarMenuItem>Analytics</CDBSidebarMenuItem>
              </Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              Universidad de El Salvador
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;
  