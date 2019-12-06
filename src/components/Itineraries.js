import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findItinerariesByCityId } from '../actions/itineraryActions';
import { findCityByCityId } from '../actions/cityActions';
import store from '../store'
import { borderWindow } from './borderWindowsStyle';
import BackgroundImage from './BackgroundImage';
import BottomHomeButton from './BottomHomeButton';
import TitleComponent from './TitleComponent';
import ItineraryBox from './ItineraryBox';

class Itineraries extends Component {

    async componentDidMount() {

        let cityId = await this.props.match.params;

        await store.dispatch(findItinerariesByCityId(cityId));
        await store.dispatch(findCityByCityId(cityId))
     
        // window.location.reload();
        // [findItinerariesByCityId(cityId), findCityByCityId(cityId)].forEach(store.dispatch);
    }
    

    render() {
        

        const itineraries = this.props.itineraries;
        const cities = this.props.cities;
        
        // if(this.props.isLoading) {
        //     return(
        //     <div style={borderWindow}>
        //         <TitleComponent title='ITINERARIES'/>
        //         <BackgroundImage cities={cities}/>
        //         <div className="d-flex justify-content-center mt-5">
        //             <div className="spinner-border" role="status">
        //                 <span className="sr-only">Loading...</span>
        //             </div>
        //         </div>
        //     </div>
        //     )
        // } else {
            return(
                <div style={borderWindow}>
                    <TitleComponent title='ITINERARIES'/>
                    <BackgroundImage cities={cities}/>
                    {itineraries ? itineraries.map((itinerary, id) => (
                        console.log("itineraries id: "+itinerary._id),
                        
                    <ItineraryBox key={id} id={id} itinerary={itinerary}/>
                    )) : <div></div>}
                    <BottomHomeButton/>
                </div>
            );
        // }
    }
}

const mapStateToProps = state => {
    
    return {
        itineraries: state.itinerary.itineraries,
        cities: state.city.cities,
        // isLoading: state.itinerary.isLoading
    }
};

export default connect(mapStateToProps, {findItinerariesByCityId, findCityByCityId})(Itineraries);