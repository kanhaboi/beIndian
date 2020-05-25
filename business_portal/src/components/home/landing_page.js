import React, { Component } from "react";
import { cookieHandler } from "../../helper/cookie_handler.js";
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            imageSrc: ""
        }
    }
    componentDidMount() {
        const token = cookieHandler.getCookie("access_token").split('.');
        const data = JSON.parse(atob(token[1]));
        console.log(data);
        this.setState({
            email: data.email,
            name: data.name,
            imageSrc: data.image
        });

    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
                <h1>
                    {this.state.email}
                </h1>
                <div>
                    <img src={this.state.imageSrc}></img>
                </div>
            </div>
        )
    }
}
export default Landing