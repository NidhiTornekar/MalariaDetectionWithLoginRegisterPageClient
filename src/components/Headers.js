import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none">Malaria Detection App </NavLink>
          <Nav className="">
            <NavLink to="/user/loginotp" className="mt-3 mx-2 text-light text-decoration-none">Log in using Mobile instead?</NavLink>
            <img src="/logo192.png" style={{width:50}} alt="" />
            
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers