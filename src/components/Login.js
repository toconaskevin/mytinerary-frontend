import React, { Component } from 'react'
import { borderWindow } from './borderWindowsStyle';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;

        console.log(state);

        this.setState(state);
    }

    signGoogle = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    }

    onSubmit = async () => {

        var user = this.state;

        await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => (
            localStorage.setItem('sessionKey', json.token),
            localStorage.setItem('firstName', json.user.firstName),
            localStorage.setItem('lastName', json.user.lastName),
            localStorage.setItem('email', json.user.email)
        )).catch(error => console.error('Error: ', error))

        if(localStorage.getItem('sessionKey') != null) {
            window.location.href = window.location.origin;
        }
    }

    render() {
        return (
            <div style={borderWindow}>
                <div className='d-flex flex-column'>
                    <h2 className='text-center mb-4'>Login</h2>
                    <div className='jumbotron'>
                        <form className="d-flex flex-column w-100">
                                <input className='form-control mb-2' placeholder='Username' name="userName" value={this.state.userName} type="text" onChange={this.onChange}/>

                                <input className='form-control mb-2' placeholder='Password' name="password" value={this.state.password} type="password" onChange={this.onChange}/>
                            
                            <label className='mt-3' >
                                <input className='mr-2' type='checkbox'/>
                                Remember me
                            </label>
                        </form>
                        <button onClick={this.onSubmit} className='btn btn-primary w-25 mt-1'>OK</button>

                    </div>
                    <button className='btn btn-secondary d-flex align-items-center pl-4' onClick={this.signGoogle}>
                        <img className='mr-3' width='15%' height='15%' src='https://icon-library.net/images/google-g-icon/google-g-icon-26.jpg'/>
                        Log in with Google
                    </button>
                    <div className='d-flex flex-column align-items-center mt-5'>
                        <p className='text-center'>Don't have a MYtinerary account yet? You should create one! It's totally free and only tankes a minute.</p>
                        <Link to='/register' style={{textDecorationLine: 'underline'}}>Create Account</Link>
                    </div>
                </div>
            </div>
        )
    }
}
