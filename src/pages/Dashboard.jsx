import React from "react";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CBadge,
  CSidebarToggler,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { CIcon } from "@coreui/icons-react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-emerald-900 text-white py-2 px-6 shadow-md">
          <h2 className="text-lg font-bold text-center">WELCOME  TO  DASHBOARD</h2>
        </nav>

        <div className="flex flex-grow">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r">
            <CSidebar className="h-full">
              <CSidebarHeader className="border-b">
                <CSidebarBrand>KRISHI AI</CSidebarBrand>
              </CSidebarHeader>
              <CSidebarNav>
                <CNavTitle>Dashboard</CNavTitle>
                <Link to="/dashboard/profile">
                  <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon="" /> Profile
                  </CNavItem>
                </Link>

                <Link to="/dashboard/schemes">
                <CNavItem href="#">
                  <CIcon customClassName="nav-icon" icon="" /> Schemes{" "}
                  <CBadge color="primary ms-auto">NEW</CBadge>
                </CNavItem>
                </Link>

                <CNavGroup
                  toggler={
                    <>
                      <CIcon customClassName="nav-icon" icon="" /> Features
                    </>
                  }
                >
                  <Link to="/dashboard/croprecommendation">
                  <CNavItem href="#">
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>{" "}
                    Crop-Recommendation
                  </CNavItem>
                  </Link>

                  <Link to="/dashboard/fertilizerrecommendation">
                  <CNavItem href="#">
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>{" "}
                    Fertilizer-Recommendation
                  </CNavItem>
                  </Link>
                  
                  
                  <Link to="/dashboard/cropclinic">
                  <CNavItem href="#">
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>{" "}
                    Crop-Clinic
                  </CNavItem>
                  </Link>

                  <Link to="/dashboard/farmcare">
                  <CNavItem href="#">
                    <span className="nav-icon">
                      <span className="nav-icon-bullet"></span>
                    </span>{" "}
                    Farm-Care
                  </CNavItem>
                  </Link>

                </CNavGroup>

                <Link to="/dashboard/ourcommunity">
                <CNavItem href="#">
                  <CIcon customClassName="nav-icon" icon="" /> Our Community
                </CNavItem>
                </Link>

                <CNavItem href="#">
                  <CIcon customClassName="nav-icon" icon="" /> Settings
                </CNavItem>
              </CSidebarNav>
              <CSidebarHeader className="border-t">
                <CSidebarToggler />
              </CSidebarHeader>
            </CSidebar>
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-6 bg-gray-100">
            {/* The Outlet will render the child route components */}
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
