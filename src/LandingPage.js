import React, { Component } from 'react'
import { login } from './fetch-utils.js';

export default class LandingPage extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login(this.state.email, this.state.password);
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

                <h1>🌝</h1>
                <div className='login'>
                    <p >
                    🔭
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="email" placeholder="email" onChange={this.handleEmailChange} />
                        </label>
                        <label>
                            <input type="password" placeholder="password" onChange={this.handlePasswordChange} />
                        </label>
                        <button>Log In</button>
                    </form>
                </div>

            </div>
        )
    }
}
