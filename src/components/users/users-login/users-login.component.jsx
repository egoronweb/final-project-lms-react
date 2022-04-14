import React from "react";
import HomeTitle from "../../home-title/home-title.component";

import './user-login.style.css';
class UserLogin extends React.Component{


    render(){
        return(
            <div className="home-contents">
               <HomeTitle />

                <div className="user-login">
                    <form method="get" onSubmit={this.userSubmit}>
                        <div className="form-btn-options">
                            <a href="/"><button type="button" className="guest-option-btn">Guest</button></a>
                            <a href="/admin-login"><button type="button" className="admin-option-btn">Admin</button></a>
                        </div>
                        <div className="login-title">Login as Guest</div>
                        <div class="mb-3">
                            <label for="user_email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="user_email" required/>
                        </div>
                        <div class="mb-3">
                            <label for="admin_password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="admin_password" required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );

    }
}

export default UserLogin;