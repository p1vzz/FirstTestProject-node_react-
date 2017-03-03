import React from 'react';
import SubdivisionsView from './SubdivisionsView';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class SubdivUpdateModal extends React.Component{
    constructor(props) {
    super(props);
    this.state = {name: ''};
    }
    
    handleName(e){
        this.setState({ name: e.target.value });
    }
    
    closeModal(){
        this.props.closeModal();
    }
    
    confirmUpd(){
        var row = {id: this.props.idForUpd, name: this.state.name};
        this.props.confirm(row);
        this.props.closeModal();
    }
    
    render(){
        return(
        <div className="modal-containerUPD">
            <Modal container={this} animation={true} show={true}>
             <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title">Insert New Subdivision's Name</Modal.Title>
             </Modal.Header>
             <Modal.Body>
              <form>
               <ControlLabel>New Name</ControlLabel>
                <FormControl placeholder="Enter Name" onChange={this.handleName.bind(this)}/>
              </form>
             </Modal.Body>
             <Modal.Footer>
               <Button onClick={this.confirmUpd.bind(this)}>OK</Button>
               <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
             </Modal.Footer>
            </Modal>
        </div>
                );
    }
};

export default SubdivUpdateModal;