import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BottomHomeButton extends Component {
    render() {
        return (
            <div className='fixed-bottom p-2 bg-white text-dark d-flex justify-content-center'>
                <Link to='/' className=''>
                    <img src='https://i.ibb.co/cD5nt6F/homeIcon.png' width='30' height='30' alt="bottom home button"/>
                </Link>
            </div>
        )
    }
}

export default BottomHomeButton;