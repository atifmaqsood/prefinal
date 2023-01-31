import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <Navbar  expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
      <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae asperiores placeat voluptate dolor amet quaerat, consequatur hic ullam totam in aspernatur aperiam voluptas explicabo, iure sit. Facere ullam inventore molestiae ipsa pariatur vel perferendis, magnam maiores aut provident nostrum facilis veritatis laudantium porro sit labore. Quidem aliquam necessitatibus quaerat.</p>
      </Navbar.Collapse>
    </Navbar>

    </>
  )
}

export default Sidebar