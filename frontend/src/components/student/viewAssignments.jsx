import React from 'react'
import Assignment from './assignment'

class ViewAssignemnts extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            assignments:null
        }
    }

    componentDidMount(){
        fetch("http://localhost:4000/api/student/get",{
            method: 'GET',
        }).then((response) => {
             response.json().then((body) => {
                this.setState({assignments:body.data});               
                console.log("View Assignemnts",body);
            }); 
        });
    }
    
    render(){
        return(
            <div>
                <h2>View Assigments page</h2>
                <div>
                    {this.state.assignments && this.state.assignments.length > 0 && this.state.assignments.forEach( (ass) => {
                        // <Assignment />
                    })}
                </div>
            </div>
        )
    }


}

export default ViewAssignemnts;