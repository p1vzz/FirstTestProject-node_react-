import React from 'react';
import DropDownMajor from './MainMenu'
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


class OrgStructure extends React.Component{

    notifySubdiv(){
        this.props.ShowSubdiv();
    }

    render(){
        return (
                <Dropdown id="firstdd">
                    <Button bsStyle="info">
                        Org Structure
                    </Button>
                    <Dropdown.Toggle bsStyle="info"/>
                    <Dropdown.Menu className="DDMenu1">
                        <MenuItem onClick={this.notifySubdiv.bind(this)}>Subdivisions</MenuItem>
                        <MenuItem>Titles</MenuItem>
                        <MenuItem>Departments</MenuItem>
                        <MenuItem>Employees</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
                );
    }
};

export default OrgStructure;