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

    render() {
        return (
            <div style={borderWindow}>
                <div className='d-flex flex-column'>
                    <h2 className='text-center mb-4'>Login</h2>
                    <div className='jumbotron'>
                        <form className="d-flex flex-column w-100" action="">
                            <label className='d-flex justify-content-center' htmlFor="">
                                <input className='form-control' placeholder='Username' name="userName" value={this.state.userName} type="text" onChange={this.onChange}/>
                            </label>

                            <label className='d-flex justify-content-center' htmlFor="">
                                <input className='form-control' placeholder='Password' name="password" value={this.state.password} type="password" onChange={this.onChange}/>
                            </label>
                        </form>
                        <label className='mt-3' >
                            <input className='mr-2' type='checkbox'/>
                            Remember me
                        </label>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary w-25 mt-1'>OK</button>
                        </div>
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
