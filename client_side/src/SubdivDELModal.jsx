import React from 'react';
import SubdivisionsView from './SubdivisionsView';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class SubdivDELModal extends React.Component {
    handleAlertDismiss(){
        this.props.closeModal();
    }
    
    handleAlertOK(){
        this.props.confirm(this.props.idForDel);
        this.props.closeModal();
    }
    
    render() {
        return(
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
                    <h4>Are you sure?</h4>
                    <p>Delete ID: {this.props.idForDel}</p>
                    <p>
                        <Button bsStyle="danger" onClick={this.handleAlertOK.bind(this)}>OK</Button>
                        <span> or </span>
                        <Button onClick={this.handleAlertDismiss.bind(this)}>Cancel</Button>
                    </p>
                </Alert>
                );
    }
};

export default SubdivDELModal;
