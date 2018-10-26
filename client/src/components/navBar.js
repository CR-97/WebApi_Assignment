import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import axios from 'axios';


const url = 'http://localhost:5000/getComp';

class AppNavbar extends Component {
  constructor(){
    super();
    this.state ={
      main:[]
    };
  }

  componentDidMount() {
    axios
    .get(url) 
      .then(response => 
        response.data.map(main =>({
          id: `${main.comp_id}`,
          name: `${main.comp_name}`,
          area: `${main.comp_area}`
        }))
      )
      .then(main=>{
        this.setState({
          main
        });
      })
      .catch(error => 
        this.setState({
          error
        }) 
      );
  }

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const comp = this.state.main.map(item =>{
      return(
        <DropdownItem key={item.id} href="/">
            {item.name}({item.area})
        </DropdownItem>
      )
    })


    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Sports Football</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Competitions
                </DropdownToggle>
                <DropdownMenu right>
                  {comp}
                  {/* <DropdownItem >
                    OPtion
                </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#" to="#">
                    Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Favourites
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;