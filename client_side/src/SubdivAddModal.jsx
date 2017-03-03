import React from 'react';
import SubdivisionsView from './SubdivisionsView';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SubdivAddModal extends React.Component{
    constructor(props) {
    super(props);
    this.state = {id: '', name: ''};
    }
    
    handleID(e){
        this.setState({ id: e.target.value });
    }
    
    handleName(e){
        this.setState({ name: e.target.value });
    }
    
    closeModal(){
        this.props.closeModal();
    }
    
    confirmAdd(){
        var row = {id: this.state.id, name: this.state.name};
        this.props.confirm(row);
        this.props.closeModal();
    }
    
    render(){
        return(
        <div className="modal-containerADD">
            <Modal container={this} animation={true} show={true}>
             <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title">Insert New Subdivision</Modal.Title>
             </Modal.Header>
             <Modal.Body>
              <form>
               <ControlLabel>New ID</ControlLabel>
                <FormControl placeholder="Enter ID" onChange={this.handleID.bind(this)}/>
                <FormControl placeholder="Enter Name" onChange={this.handleName.bind(this)}/>
              </form>
             </Modal.Body>
             <Modal.Footer>
               <Button onClick={this.confirmAdd.bind(this)}>OK</Button>
               <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
             </Modal.Footer>
            </Modal>
        </div>
        );
    }
    
};

export default SubdivAddModal;

