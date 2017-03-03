import React from 'react';
import OrgStructure from './OrgStructure'
import SubdivisionController from './SubdivisionController'

class DropDownMajor extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {SubdivVisible: false};
    this.ShowSubdivs = this.ShowSubdivs.bind(this);
    }
    
    ShowSubdivs () {
        if (!this.state.SubdivVisible)
            this.setState({SubdivVisible: true});
        else
            this.setState({SubdivVisible: false});
    }
    
    render() {
        return (
                <div className="DD">
                    <OrgStructure ShowSubdiv={this.ShowSubdivs} />
                    { this.state.SubdivVisible ? <SubdivisionController /> : null }
                </div>
                );
    }
    
};

export default DropDownMajor;