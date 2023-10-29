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

const logout = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="#fff" backgroundColor="#333" className="sidebar-fixed">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to="/dashboard" className="text-decoration-none" style={{ color: "inherit" }}>
            Simotre
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
              to="/users"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Usuarios</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/employees"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Empleados</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/sessions"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Sesiones</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/rooms"
              className="text-decoration-none"
              activeClassName="active-link" 
            >
              <CDBSidebarMenuItem>Salas</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
        <img
              className="align-center"
              src="/minerva.png"
              alt="Rooms Index"
              style={{ width: "100px" }}
            />


          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Universidad de El Salvador
          </div> 
            <NavLink
             onClickCapture={logout}
              className="text-decoration-none"
              activeClassName="active-link" 
              style={{ color: "white" }}
            >
              <CDBSidebarMenuItem>Cerrar Sesion</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
