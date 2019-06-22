import React,{Component} from 'react'
import axios from 'axios'
import AdminViewRow from './AdminViewRow'
import AdminAdd from './AdminAdd'
import Nav from '../Nav'
import '../../stylesheet/common.css'


export default class AdminView extends Component{
    constructor(props){
        super(props);
        this.state = {
            admins:[],
            showEdit:false
        }

        this.loadAdminView=this.loadAdminView.bind(this);
        this.showAdminTableOrEdit=this.showAdminTableOrEdit.bind(this);
        this.viewEditForm=this.viewEditForm
        .bind(this);
    }

    componentDidMount(){
        this.loadAdminView();
    }

    loadAdminView(){
        fetch('http://localhost:4000/api/admin/get', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes =>  {this.setState({admins:jsonRes}) 
                console.log(jsonRes)})
            .catch(err => console.log(err));
    }


    showAdminTableOrEdit(){
        var show = this.state.showEdit;
        console.log(show)
        if(show == false){
            return(
                <div>
                    {/* <Nav buttonType="logout"/> */}
                    <div className="container">
                    <br/><br/>
                    <h2 className="font head-font text-center">View Administrator</h2>
                    
                        <table className="table table-striped table-main">
                            <thead className="font table-head">
                                <tr>
                                    <th>Registration Number</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Qualification</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Reset Password</th>
                                </tr>
                            </thead>
                            <tbody className="font">
                                {this.state.admins.map((admin)=>{
                                    return <AdminViewRow key={admin._id} admin={admin} loadAdminView={this.loadAdminView} viewEditForm={this.viewEditForm}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } 
    }

    viewEditForm(){
        // this.setState({
        //     showEdit:true
        // });
        // this.showAdminTableOrEdit();
    }

    render(){
        return(
            <div>
                {this.showAdminTableOrEdit()}
            </div>
        )
    }
}