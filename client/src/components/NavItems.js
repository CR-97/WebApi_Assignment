import React, { Component } from 'react';
import {
  DropdownItem 
} from 'reactstrap';

const NavItems = props =>{

  function handleSubmit(){
    props.onClick({
      id: props.item.comp_id,
    });
  }

  return(
    <DropdownItem onClick={handleSubmit}>
            {props.item.comp_name}({props.item.comp_area})
    </DropdownItem>
  );
};


export default NavItems;