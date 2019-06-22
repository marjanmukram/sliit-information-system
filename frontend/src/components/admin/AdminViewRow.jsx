import React,{Component} from 'react'
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import axios from 'axios'
import '../../stylesheet/common.css'


export default class AdminView extends Component{
    constructor(props){
        super(props);
        this.state = {
            admin:props.admin,
           
        }

        this.deleteAdmin=this.deleteAdmin.bind(this);
        this.resetPassword=this.resetPassword.bind(this);
        this.passwordCreator = this.passwordCreator.bind(this);
    }

    deleteAdmin() {
      console.log(document.getElementById('delete').name)
      var regId = document.getElementById('delete').name;

      
      axios.delete('/admin/delete/'+this.state.admin.regId)
        .then(res => {
          {this.props.loadAdminView()}
          console.log(res)
          alert("Deleted Successfully!")
        })

      console.log(document.getElementById('delete').name)
      var regId = document.getElementById('delete').name;


    }

    passwordCreator = () => {
        var length           = 10;
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    resetPassword() {
        console.log(document.getElementById('delete').name)
        var regId = document.getElementById('delete').name;

        const newPassword = this.passwordCreator()
        
        const admin = {
            "regId":this.state.admin.regId,
            "email":this.state.admin.email,
            "password":newPassword
        }
        console.log(admin,this.state.admin._id)

        axios.put("/admin/updatePassword/"+this.state.admin._id,admin)
            .then(res => {
                alert("New password has been sent by email!")
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <tr>
                <td>{this.state.admin.regId}</td>
                <td>{this.state.admin.name}</td>
                <td>{this.state.admin.email}</td>
                <td>{this.state.admin.gender}</td>
                <td>{this.state.admin.qualification}</td>
                <td>{this.state.admin.address}</td>
                <td>{this.state.admin.phone}</td>
                <td><NavLink to={`/admin/editAdmin/${this.state.admin._id}`}><button type="button" class="btn btn-info" >Edit</button></NavLink></td>
                <td><button id="delete" name={this.state.admin.regId} type="button" class="btn btn-danger" onClick={this.deleteAdmin}>Delete</button></td>
                <td><button id="reset" name={this.state.admin.regId} type="button" class="btn btn-warning" onClick={this.resetPassword}>Reset</button></td>
            </tr>
        )
    }

}