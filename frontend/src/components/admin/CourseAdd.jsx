import React,{Component} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import '../../stylesheet/common.css'
import Nav from '../Nav'
import App from '../../App'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class CourseAdd extends Component{

    constructor(props){
        super(props);
        this.state = {
          startDate: new Date(),

          code:"",
          name:"",
          instructors:[],
          instName:[],
          instId:[],
          selectedInstructors:[],
          values: []
        };

        this.onValueChange= this.onValueChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.addInstructors = this.addInstructors.bind(this);
    }

    componentDidMount(){
        fetch('/api/instructor/get', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes =>  {this.setState({instructors:jsonRes.data}) 
                console.log(jsonRes)})
            .catch(err => console.log(err));

            // this.addInstructors();
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const code = this.state.code;
        const name = this.state.name;
        const available = document.getElementById('available').value;
        
        console.log(this.state.values)
    }

    // addInstructors(){
    //     return this.state.instructors.map((ins)=>{
    //         this.state.instName.push(ins.name);
    //         this.state.instId.push(ins._id)
    //         console.log(this.state.instId)
    //         return <option key={ins._id}>{ins.name}</option>
    //     })
    // }

    handleChangeSelect = (event, index, values) => this.setState({values});

    menuItems(values) {
      return this.state.instructors.map((ins) => (

        this.state.instName.push(ins.name),
        this.state.instId.push(ins._id),

        <MenuItem
          key={ins._id}
          insetChildren={true}
          checked={this.state.values && this.state.values.indexOf(ins) > -1}
          value={ins}
          primaryText={ins.name}
        />
      ));
    }

    render(){
        const {values} = this.state;
        return(
            <div>
                <div className="container form">
                <h2 className="font text-center">Add Course</h2>
                    <br/>
                    <br/>
                    <form  onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <input 
                                id="code"
                                value={this.state.code}
                                onChange={this.onValueChange}  
                                placeholder="Course Code" 
                                className="form-control" 
                                name="code"/>
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                id="name" 
                                value={this.state.name}
                                onChange={this.onValueChange}  
                                placeholder="Name" 
                                className="form-control" 
                                name="name"/>
                        </div>
                        <div className="input-group mb-3">
                            <select id="available" className="form-control">
                                <option>Select a Availability status</option>
                                <option>Available</option>
                                <option>Unavailable</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <MuiThemeProvider>
                                <SelectField
                                    multiple={true}
                                    hintText="Select an Instructor"
                                    value={values}
                                    onChange={this.handleChangeSelect}
                                    style={{width:"840px"}}
                                >
                                    {this.menuItems(values)}
                                </SelectField>
                            </MuiThemeProvider>
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type="submit"  className="btn btn-success font">Insert</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
