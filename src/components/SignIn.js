import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signIn } from '../utils/server-utils';

export default function SignIn({setToken}) {

    const [{emailInput, passwordInput}, setState] = useState({
        emailInput: '',
        passwordInput: '',
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await signIn(emailInput, passwordInput)
        setToken(token)
        navigate('../')
    } 

    const handleChange = (e) => {
        setState((state) => ({
            ...state,
            [e.target.name]: e.target.value 
        }))
    }

    return (
        <div  className='main'>

            <h1>🌝</h1>
            <div className='login'>
                <p >
                🔭 Dark Sky Observer App
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="email" placeholder="email" name="emailInput" value={emailInput} onChange={handleChange} />
                    </label>
                    <label>
                        <input type="password" placeholder="password" name="passwordInput" value={passwordInput} onChange={handleChange} />
                    </label>
                    <button>Log In</button>
                </form>
            </div>

        </div>
    )
}
