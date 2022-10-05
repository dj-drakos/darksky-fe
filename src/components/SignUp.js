import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from "../utils/fetch-utils"


export default function SignUp({setToken}) {
    const [{emailInput, passwordInput}, setState] = useState({
        emailInput: '',
        passwordInput: '',
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await signUp(emailInput, passwordInput)
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
            <h1>Sign Up</h1>
            <div className='login'>
                <p >
                🪐 Create a free account to access search tools, local weather conditions, and a journal to keep track of your Dark Sky adventures. 
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="email" placeholder="email" name="emailInput" value={emailInput} onChange={handleChange} />
                    </label>
                    <label>
                        <input type="password" placeholder="password" name="passwordInput" value={passwordInput} onChange={handleChange} />
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
