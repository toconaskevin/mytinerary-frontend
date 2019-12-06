import React, { Component } from 'react'
import { borderWindow } from './borderWindowsStyle';
import { Link } from 'react-router-dom';

export default class CreateAccount extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            country: ''
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;

        console.log(state);

        this.setState(state);
    }

    onSubmit = (user) => {
        
    }

    render() {
        return (
            <div style = { borderWindow }>
                <h2 className='text-center mb-4'>Create Account</h2>
                <div className='d-flex flex-column align-items-center jumbotron'>
                    <form onSubmit={this.onSubmit} className='d-flex flex-column'>
                        <div className='d-flex flex-column align-items-center justify-content-center text-center mb-4'>
                            <div className='d-flex align-items-center justify-content-center border border-navy text-center bg-light mb-4' style={{borderRadius: '50%', width: '10rem', height: '10rem'}}>
                                Add Photo
                            </div>
                            <input type="file" className="form-control-file "/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <input className='form-control' placeholder='Username' type='text' name="userName" value={this.state.userName} onChange={this.onChange}/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <input className='form-control' placeholder='Password' type='password' name="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <input className='form-control' placeholder='Email' type='text' name="email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <input className='form-control' placeholder='First Name' type='text' name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <input className='form-control' placeholder='Last Name' type='text' name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                        </div>
                        <div className='d-flex flex-row-reverse w-100 mb-2'>
                            <div className='w-100'>
                                <select className='form-control' placeholder='Country' name='country'>
                                    <option>Country</option>
                                    <option>-------</option>
                                    <option value='op1' name='country'>Op1</option>
                                    <option value='op2' name='country'>Op2</option>
                                    <option value='op3' name='country'>Op3</option>
                                    <option value='op4' name='country'>Op4</option>
                                </select>
                            </div>
                            {/* <label className='pr-2'>Country: </label> */}
                        </div>
                    </form>
                    <div className='mt-3'>
                        <input className='mr-1' type='checkbox'/>
                        I agree to MYtinerary's&nbsp;<Link to='#' style={{textDecorationLine: 'underline'}}>Terms & Conditions</Link>
                    </div>
                    <div className='mt-3'>
                        <button type='submit' className='btn btn-primary'>OK</button>
                    </div>
                </div>
            </div>
        )
    }
}
