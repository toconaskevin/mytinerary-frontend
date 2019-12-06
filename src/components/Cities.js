import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cityActions';
import BackgroundImage from './BackgroundImage';
import { borderWindow } from './borderWindowsStyle';
import store from '../store';
import TitleComponent from './TitleComponent';
import BottomHomeButton from './BottomHomeButton';

class Cities extends Component {

    async componentDidMount() {
        await store.dispatch(getCities());
    }

    render() {
        
        const cities = this.props.cities;

        // console.log("loading de cities: " + this.props.isLoading);
        
        // if (this.props.isLoading) {
        //     return(
        //         <div style={borderWindow}>
        //             <TitleComponent title='CITIES'/>
        //             <div className="d-flex justify-content-center mt-5">
        //                 <div className="spinner-border" role="status">
        //                     <span className="sr-only">Loading...</span>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // } else {
            return(
                <div style={borderWindow}>
                    <TitleComponent title='CITIES'/>
                    <BackgroundImage cities={cities}/>
                    <BottomHomeButton/>
                </div>
            );
        // }
    }
}

const mapStateToProps = state => {
    return {
        cities: state.city.cities,
        // isLoading: state.city.isLoading
    }
};

export default connect(mapStateToProps, {getCities})(Cities);