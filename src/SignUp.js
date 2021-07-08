import React, { Component } from 'react'
import { signUp } from "./fetch-utils.js";


export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await signUp(this.state.email, this.state.password);
        this.props.login(token);
        this.props.history.push('/main');
    } 

    handleEmailChange = async (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = async (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div  className='main'>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="email" placeholder="email" onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        <input type="password" placeholder="password" onChange={this.handlePasswordChange} />
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
