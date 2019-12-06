import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackgroundImage extends Component {

    render() {

        const textStyle = {
            fontSize: '5vw',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '5%',
            textShadow: '5px 5px 10px #000'
        }
        
        // console.log("locatioL : "+window.location.pathname);

        if (window.location.pathname.includes("itineraries")) {
            console.log("contain itineraries");
            return(
                <div>
                    {this.props.cities ? this.props.cities.map((city, id) => (
                        <div key={id} style={
                            {
                                backgroundImage: `url(${city.img})`, 
                                backgroundPosition: 'center', 
                                backgroundSize: '100%'
                            }}>
                                <p style={textStyle}>{city.name} - {city.country}</p>
                        </div>
                    )): <div></div>}
                </div>
            );
        } else {
            console.log("not contain itineraries");
            return(
                <div>
                    {this.props.cities ? this.props.cities.map((city, id) => (
                        <div key={id} style={
                            {
                                backgroundImage: `url(${city.img})`, 
                                backgroundPosition: 'center', 
                                backgroundSize: '100%'
                            }}>
                            <Link to={'/cities/'+city._id+'/itineraries'} style={{textDecoration: 'none'}}>
                                <p style={textStyle}>{city.name} - {city.country}</p>
                            </Link>
                        </div>
                    )): <div></div>}
                </div>
            );
        }
    }
}

export default BackgroundImage;