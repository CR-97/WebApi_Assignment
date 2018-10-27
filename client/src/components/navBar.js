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
import NavContent from './NavItems';
import axios from 'axios';


const url = 'http://localhost:5000/getComp';

class AppNavbar extends Component {
  constructor(){
    super();
    this.state ={
      main:[],
      id: ""
    };
  }

  componentDidMount() {
    axios
    .get(url) 
      .then(response =>{
        this.setState({
          main:response.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleNavigate = (id) =>{
    console.log(id);
    axios.post("http://localhost:5000/getCompetition",id);
  }

  
  render() {
    const comp = this.state.main;
    let item;
    item = comp.map((item) =>
      <NavContent item={item} onClick={this.handleNavigate}/> 
    );

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
                  {item}
                  {/* <DropdownItem >
                    OPtion
                </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/matches" to="/matches">
                    Matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/saved_items" to="/saved_items">
                    Saved
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