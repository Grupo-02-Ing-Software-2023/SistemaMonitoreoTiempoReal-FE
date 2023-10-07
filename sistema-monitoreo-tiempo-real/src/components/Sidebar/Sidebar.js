import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="#fff" backgroundColor="#333" className="sidebar-fixed">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to="/" className="text-decoration-none" style={{ color: "inherit" }}>
            Sidebar
          </NavLink>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              to="/dashboard"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/admin"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Admin</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/profile"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Profile</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Universidad de El Salvador
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
