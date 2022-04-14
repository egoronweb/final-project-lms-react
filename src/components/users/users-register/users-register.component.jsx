import axios from "axios";
import React from "react";
import HomeTitle from "../../home-title/home-title.component";

import './users-register.style.css';
class UserRegister extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user_id: '',
            fullname: '',
            course: '',
            year: '',
            email: '',
            password: '',
            re_password: '',
        }

    }

    saveUser = async (e) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/user-register', this.state)
        .then(
            response => alert(JSON.stringify(response.data))
            
            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);
            
            });
    }
    render(){
        return(
            <div className="user-register">
               <HomeTitle />
               <form onSubmit={this.saveUser} className="user-register-form">
                    <div className="mb-3">
                        <label htmlFor="user_id" className="form-label">User ID</label>
                        <input type="text" name="user_id" onChange={e => {this.setState({user_id:e.target.value})}} value={this.state.user_id} className="form-control" id="user_id"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" name="fullname" onChange={e => {this.setState({fullname:e.target.value})}} value={this.state.fullname.toUpperCase()} className="form-control" id="fullname"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="course" className="form-label">Course</label>
                        <input type="text" name="course" onChange={e => {this.setState({course:e.target.value})}} value={this.state.course.toUpperCase()} className="form-control" id="course"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Year</label>
                        <input type="text" name="year" onChange={e => {this.setState({year:e.target.value})}} value={this.state.year} className="form-control" id="year"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" onChange={e => {this.setState({email:e.target.value})}} value={this.state.email} className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" onChange={e => {this.setState({password:e.target.value})}} value={this.state.password} className="form-control" id="password"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="re_password" className="form-label">Retype-Password</label>
                        <input type="password" name="re_password" onChange={e => {this.setState({re_password:e.target.value})}} value={this.state.re_password} className="form-control" id="re_password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>
        );
    }
}

export default UserRegister;