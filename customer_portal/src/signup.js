import React, { Component } from "react";
import GoogleBtn from "./GoogleBtn";
export default class SignUp extends Component {
    render() {
        return (
            <>
            <form>
                <h3>Sign Up</h3>
              
                <div className="form-group d-flex ">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group d-flex">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group d-flex">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group d-flex">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="">sign in?</a>
                </p>
                
            </form>
           
            <div>
             <GoogleBtn/>
            </div>
           </>
        );
    }
}