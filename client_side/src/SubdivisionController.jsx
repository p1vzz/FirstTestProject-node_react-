import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import SubdivisionsView from './SubdivisionsView'


class SubdivisionController extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {data: [], localdata: []};
    }

    loadDataFromServer() {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/Subdivision",
            dataType: "json",
            success: (arrdata) => {
                this.setState({data: arrdata});
                this.setState({localdata: arrdata});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    
    loadDataToServer(row){
        if(row.id)
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/Subdivision",
                data: {id: row.id, name: row.name},
                success: () => {
                    this.loadDataFromServer();
                },
                error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    
    deleteDataFromServer(row){
        $.ajax({
           url: 'http://localhost:3000/Subdivision' + '/' + row,
           type: 'DELETE',
           success: () => {
                    this.loadDataFromServer();
                },
                error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    
    updateDataOnServer(row){
        $.ajax({
           url: 'http://localhost:3000/Subdivision' + '/' + row.id,
           type: 'PUT',
           data: {name: row.name},
           success: () => {
                    this.loadDataFromServer();
                },
                error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    
    onAddRow(row){
        this.loadDataToServer(row);
    }
    
    onDeleteRow(rows){
        this.deleteDataFromServer(rows);
    }
    
    onUpdateRow(row){
      this.updateDataOnServer(row); 
    }
               
    componentDidMount() {
        this.loadDataFromServer();
    }
    
    onSearchChange(searchText){
       var text = searchText.trim();
        if (text === '') {
          this.setState({
          data: this.state.localdata
          });
           return;
        }
    
       var newData = this.state.localdata.filter(function(el){
          var name = el.name.toLowerCase();
          var id = el.id.toString();
          return name.indexOf(searchText) !== -1 || id.indexOf(searchText) !== -1;
       });
       
       this.setState({
           data: newData
       });
    }
    
    render() {
        return (
                <div className={'SubdivisionsTable'}>
                    <SubdivisionsView data={this.state.data} onAddRow={this.onAddRow.bind(this)} onDeleteRow={this.onDeleteRow.bind(this)} 
                    onUpdateRow={this.onUpdateRow.bind(this)} onSearchChange={this.onSearchChange.bind(this)}/>     
                </div>
                );
    }
};

export default SubdivisionController;