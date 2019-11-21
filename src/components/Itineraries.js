import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findItinerariesByCityId } from '../actions/itineraryActions';
import { findCityByCityId } from '../actions/cityActions';
import store from '../store'
import { borderWindow } from './borderWindowsStyle';
import BackgroundImage from './BackgroundImage';
import BottomHomeButton from './BottomHomeButton';
import TitleComponent from './TitleComponent';

class Itineraries extends Component {

    async componentDidMount() {

        let cityId = await this.props.match.params;

        await store.dispatch(findItinerariesByCityId(cityId));
        await store.dispatch(findCityByCityId(cityId))
    
        // [findItinerariesByCityId(cityId), findCityByCityId(cityId)].forEach(store.dispatch);

    }

    render() {
        
        const itineraries = this.props.itineraries;
        const cities = this.props.cities;
        
        return(
            <div style={borderWindow}>
                <TitleComponent title='ITINERARIES'/>
                <BackgroundImage cities={cities}/>
                <ul>
                {itineraries.map((itinerary, id) => (
                  <li key={id}>{itinerary.author} - {itinerary.rating}</li>
                ))}
                </ul>
                <BottomHomeButton/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        itineraries: state.itinerary.itineraries,
        cities: state.city.cities
    }
};

export default connect(mapStateToProps, {findItinerariesByCityId, findCityByCityId})(Itineraries);