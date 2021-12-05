import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import s from '../styles/navbar.module.css'
import Image from 'next/image'


export default function Home() {
return <div>
<div>
<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
</div>
<div>
<div className={s.navbar_BG}>
<Navbar collapseOnSelect expand="lg"  variant="dark">
   
  <Container>
  <Navbar.Brand href="#home">VPcake</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="Торты" id="collasible-nav-dropdown">
    
        <NavDropdown.Item >Корпоративные</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
      <Nav.Link href="#features">Прайс</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
 
</Navbar>
</div>
</div>
 Deploy
Hello
2
Typ
 World
Туоул dhdjj

</div>

}
