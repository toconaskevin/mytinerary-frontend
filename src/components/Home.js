import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from './Carousel';
import { borderWindow } from './borderWindowsStyle';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

class Home extends Component {

  render() {

    return (
      <div style={borderWindow}>
        <div className='d-flex flex-column'>
          <header className='d-flex justify-content-center'>
            <img className='mw-100' src='https://i.ibb.co/WfhMR9H/MYtinerary-Logo.png' alt="logo" />
          </header>
          <br></br>
          <p className="text-center font-italic">
          Find your perfect trip, designed by insiders<br/>
          who know and love their cities.
          </p>
          <br/>
          <div className='d-flex justify-content-center'>
            <Link to='/cities' style={{width: '25%', height: '25%'}}>
              <img className='img-fluid rounded-circle' src='https://i.ibb.co/4TffgrZ/circled-right-2.png' alt="button start"/>
            </Link>
          </div>
          <br/>
          <p style={{fontWeight: 'bold'}}>Popular MYtineraries</p>

          <Carousel/>
        </div>
      </div>
    );
  }
}

export default Home;