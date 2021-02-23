import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';
import Resume from './resume.pdf';
import './Layout.scss';

function App({ children }) {
  return (
    <div className='App'>
      <Navbar>
        <NavbarBrand href='/'>Albert Zhang</NavbarBrand>
        <Nav className='ml-auto'>
          <NavItem>
            <NavLink href='/projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href={Resume}>Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href='/writing'>
              Writing
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      {children}
    </div>
  );
}

export default App;
