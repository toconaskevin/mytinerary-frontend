import React, { Component } from 'react';
import { borderWindow } from './borderWindowsStyle';

export default class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem('email'),
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            inputType: '-plaintext',
            
        }
    }
    
    onChange = (e) => {
        const state = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }

        state[e.target.name] = e.target.value;

        console.log(state);

        this.setState({
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName
        })
    }

    modify = () => {
        if (this.state.inputType === '-plaintext') {
            this.setState({inputType: ''})
            
        } else {
            this.setState({inputType: '-plaintext'})
        }
    }

    render() {
        return (
            <div>
                <div style = { borderWindow }>
                <h2 className='text-center mb-4'>My Profile</h2>
                <div className='d-flex flex-column align-items-center jumbotron'>
                    <div className='d-flex flex-column align-items-center justify-content-center text-center mb-4'>
                        <div className='d-flex align-items-center justify-content-center border border-navy text-center bg-light mb-4' style={{borderRadius: '50%', width: '10rem', height: '10rem'}}>
                            My Avatar
                        </div>
                    </div>
                    <div className='d-flex flex-column w-100'>
                       
                            {/* <input className='form-control mb-2' placeholder='Username' type='text' name="userName" value={this.state.userName}/> */}
                            <div className='d-flex align-items-center'>
                                <label className='w-50'>Password:</label>
                                <input className='form-control-plaintext ml-3 mb-2 border pl-2' type='password' value="mypassword"/>
                            </div>
                            
                            <div className='d-flex align-items-center'>
                                <label className='w-50'>Email:</label>
                                <input className={'form-control' + this.state.inputType + ' ml-3 mb-2 border pl-2'} name="email" type='text' value={this.state.email}/>
                            </div>

                            <div className='d-flex align-items-center'>
                                <label className='w-50'>First Name:</label>
                                <input className={'form-control' + this.state.inputType + ' ml-3 mb-2 border pl-2'} type='text' value={this.state.firstName}/>
                            </div>

                            <div className='d-flex align-items-center'>
                                <label className='w-50'>Last Name:</label>
                                <input className={'form-control' + this.state.inputType + ' ml-3 mb-2 border pl-2'} type='text' value={this.state.lastName}/>
                            </div>

                            <button className='btn btn-danger mt-5' onClick={this.modify}>Modify</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
