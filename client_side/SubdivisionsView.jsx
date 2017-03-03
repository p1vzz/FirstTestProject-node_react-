import React from 'react';
import SubdivisionController from './SubdivisionController'
import SubdivAddModal from './SubdivAddModal'
import SubdivDELModal from './SubdivDELModal'
import SubdivUpdateModal from './SubdivUpdateModal'
import { Table } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SubdivisionsView extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {AddVisible: false, DeleteVisible: false, UpdateVisible: false, idForDel: '', idForUpd: ''};
    }
    
    addNew(){
        if (!this.state.AddVisible)
            this.setState({AddVisible: true});
        else
            this.setState({AddVisible: false});
    }
    
    delete(e){
        if(e)
            this.setState({idForDel: e.target.getAttribute("data-id")});
        if (!this.state.DeleteVisible)
            this.setState({DeleteVisible: true});
        else
            this.setState({DeleteVisible: false});
    }
    
    update(e){
        if(e)
            this.setState({idForUpd: e.target.getAttribute("data-id")});
        if (!this.state.UpdateVisible)
            this.setState({UpdateVisible: true});
        else
            this.setState({UpdateVisible: false});
    }
    
    render() {
        const data = this.props.data;
        const tableHeader = function(){
            return(
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    );
        };
        const table = data.map((item) => {
            return (
                    <tr key={item.id}>
                        <td><Glyphicon glyph="trash" data-id={item.id} onClick={this.delete.bind(this)}/> 
                        <Glyphicon glyph="pencil" data-id={item.id} onClick={this.update.bind(this)}/></td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                    );
        });
        
        	return(
                        <div className="SubdivTable">
                        <Glyphicon glyph="eject" onClick={this.addNew.bind(this)}/>Add New
                        <Table striped bordered condensed hover>
                          <thead>
                          {tableHeader()}
                          </thead>
                          <tbody>
                          {table}
                          </tbody>
                         </Table>
                         { this.state.AddVisible ? <SubdivAddModal confirm={this.props.onAddRow} closeModal={this.addNew.bind(this)}/> : null }
                         { this.state.DeleteVisible ? <SubdivDELModal confirm={this.props.onDeleteRow} closeModal={this.delete.bind(this)} idForDel={this.state.idForDel}/> : null }
                         { this.state.UpdateVisible ? <SubdivUpdateModal confirm={this.props.onUpdateRow} closeModal={this.update.bind(this)} idForUpd={this.state.idForUpd}/> : null }
                         </div>
                    );
    }
};

export default SubdivisionsView;
    
    
    