import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

class NavigationBar extends Component {
    render() {

        // const navbarContainer = {
        //     display: 'flex',
        //     overflow: 'hidden',
        //     backgroundColor: 'black',
        //     position: 'fixed',
        //     top: '0',
        //     width: '100%',
        //     maxHeight: '10vh',
        //     justifyContent: 'space-between',
        //     paddingLeft: '10px',
        //     paddingRight: '10px'
        // }

        // const buttonNav = {
        //     paddingTop: 1,
        //     paddingBottom: 1,
        //     width: '5%',
        //     height: '10%',
        //     backgroundColor: 'red'
        // }

        // const buttonMore = {
        //     width: '100%',
        //     height: '100%',
        //     backgroundImage: `url(https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg)`,
        //     backgroundSize: '100%',
        //     backgroundPosition: 'center'
        // }

        // const buttonProfile = {
        //     width: '100%',
        //     height: '100%',
        //     backgroundImage: `url(https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg)`,
        //     backgroundSize: '100%',
        //     backgroundPosition: 'center'
        // }

        return(
            <ul className="nav nav-pills fixed-top p-1 bg-white d-flex justify-content-between mr-0 ml-2">
            <li className="nav-item dropdown">
                <span className="navbar-brand" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle" width="30" height="30" src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-101-e1485815933252.jpg" alt='profile user avatar'/>
                </span>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="#">My Profile</a>
                <a className="dropdown-item" href="#">Configurations</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Logout</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <span className="navbar-brand " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded" width="35" height="35" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" alt='hamburger icon'/>
                </span>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="/cities">Cities</a>
                <a className="dropdown-item" href="#">Activities</a>
                </div>
            </li>
            </ul>
        );
    }
}

export default NavigationBar;