import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './styles.module.css'
const Navigation = () => (
  <Navbar fixed="top"  expand="lg" className={`${styles.nav} boxShadow`}>
    <Link to='/'>
      <Navbar.Brand className={styles.brand}><img src={"/img/logo.PNG"} style={{width:50, marginTop: 0}}/>FACT 2020</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
    <Nav className="mr-auto">
        {/* <li className='nav-item'>
          <Link
            className={`nav-link fontCabin ${styles.link}`}
            to='/'
          >Home</Link>
        </li> */}
        <li className='nav-item'>
          <Link 
            className={`nav-link fontCabin ${styles.link}`}
            to='/team'
          >Meet The Team</Link>
        </li>
        <li className='nav-item'>
          <a href='https://www.facebook.com/psafact'
           className={`nav-link fontCabin ${styles.link}`}
           target="_blank"
           >
          Stay Tuned for More Updates!
          </a>
        </li>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
)
export default Navigation
