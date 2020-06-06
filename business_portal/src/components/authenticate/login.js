import React, { Component } from "react";
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Email</span>
                    </div>
                    <input type="email" class="form-control" aria-label="With textarea" />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Password</span>
                    </div>
                    <input type="password" class="form-control" aria-label="With textarea" />
                </div>
            </div>
        )
    }
}

export default Login;