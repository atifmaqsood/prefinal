import React, { useState } from "react";
import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function UserSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
 
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
          <Nav className="flex-column">
            <Nav.Item >
              <Nav.Link  className={`${location.pathname==="/userDashboard"?'navActive' : "" }`} as={Link} to="/userDashboard">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/orderStatus"?'navActive' : "" }`} to="/orderStatus">
                Order Status
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/orderHistory"?'navActive' : "" }`} to="/orderHistory">
                Order History
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/myWishlist"?'navActive' : "" }`} to="/myWishlist">
                {" "}
                My Wishlist{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/changePassword"?'navActive' : "" }`} to="/changePassword">
                {" "}
                Change Password{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==='/logout'?'navActive' : "" }`} to="/logout">
                {" "}
                Logout{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default UserSidebar;
