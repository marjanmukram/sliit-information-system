import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import AdminHome from '../components/admin/AdminHome'
import AdminAdd from '../components/admin/AdminAdd'
import AdminView from '../components/admin/AdminView'
import AdminEdit from '../components/admin/AdminEdit'
import InstructorAdd from '../components/admin/InstructorAdd'
// import InstructorView from '../components/admin/InstructorView'
import Header from '../components/admin/Header'
import CourseAdd from '../components/admin/CourseAdd';

export default class AdminRouter extends Component {


    render(){
        return(
            <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/admin" component={Header} />
                <Route path="/admin/addAdmin" component={AdminAdd} />
                <Route path="/admin/viewAdmin" component={AdminView} />
                <Route path="/admin/editAdmin/:id" component={AdminEdit} />
                <Route path="/instructor/addInstructor" component={InstructorAdd} />
                {/* <Route path="/admin/viewInstructor" component={InstructorView} /> */}
                <Route path="/course/addcourse" component={CourseAdd} />
            </Switch>
        </div>
    </BrowserRouter>
        )
    }
    
};
