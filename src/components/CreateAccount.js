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

    onSubmit = async () => {
        
        var user = this.state;

        await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => (
            console.log('Success: ', json),
            alert(json.response)
        )).catch(error => console.error('Error: ', error))
        
    }

    render() {
        return (
            <div style = { borderWindow }>
                <h2 className='text-center mb-4'>Create Account</h2>
                <div className='d-flex flex-column align-items-center jumbotron'>
                    <div className='d-flex flex-column align-items-center justify-content-center text-center mb-4'>
                        <div className='d-flex align-items-center justify-content-center border border-navy text-center bg-light mb-4' style={{borderRadius: '50%', width: '10rem', height: '10rem'}}>
                            Add Photo
                        </div>
                        {/* <input type="file" className="form-control-file "/> */}
                    </div>
                    <form className='d-flex flex-column'>
                       
                            <input className='form-control mb-2' placeholder='Username' type='text' name="userName" value={this.state.userName} onChange={this.onChange}/>
                            
                            <input className='form-control mb-2' placeholder='Password' type='password' name="password" value={this.state.password} onChange={this.onChange}/>
                            
                            <input className='form-control mb-2' placeholder='Email' type='text' name="email" value={this.state.email} onChange={this.onChange}/>
                            
                            <input className='form-control mb-2' placeholder='First Name' type='text' name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                            
                            <input className='form-control mb-2' placeholder='Last Name' type='text' name="lastName" value={this.state.lastName} onChange={this.onChange}/>

                            <select className='form-control mb-2' placeholder='Country' name='country'>
                                <option>Country</option>
                                <option>-------</option>
                                <option value='op1' name='country'>Op1</option>
                                <option value='op2' name='country'>Op2</option>
                                <option value='op3' name='country'>Op3</option>
                                <option value='op4' name='country'>Op4</option>
                            </select>

                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <input className='mr-1' type='checkbox'/>
                            I agree to MYtinerary's&nbsp;<Link to='#' style={{textDecorationLine: 'underline'}}>Terms & Conditions</Link>
                        </div>
                        
                    </form>
                        <button onClick={this.onSubmit} className='btn btn-primary mt-5'>OK</button>
                </div>
            </div>
        )
    }
}
