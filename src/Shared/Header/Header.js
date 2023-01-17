import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <>
        <Navbar className='header' bg="light" variant="light" sticky="top" collapseOnSelect expand="lg"  >
        <Navbar.Brand className='fs-1 fw-bold text-info' href="#home">Jannet Dekker </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_link">
                <Link to="/">Home</Link>
                {user?.email && <>
                <Link to="/myReviews">My Review</Link>
                <Link to="/addService">Add Service</Link>
                </>}
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            {!user?.email ?
                <Link to="/login">Login</Link>:
                <button onClick={()=>{logOut()}} className='btn btn-danger fw-bold logout_btn'>Log out</button>
            }
            </Nav>
            </Navbar.Collapse> 
        </Navbar>
        </>
    );
};

export default Header;