import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cityActions';
import BackgroundImage from './BackgroundImage';
import { borderWindow } from './borderWindowsStyle';
import store from '../store';
import TitleComponent from './TitleComponent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import BottomHomeButton from './BottomHomeButton';

class Cities extends Component {

    async componentDidMount() {
        await store.dispatch(getCities());
    }

    render() {
        
        const cities = this.props.cities;

        return(
            <div style={borderWindow}>
                <TitleComponent title='CITIES'/>
                <BackgroundImage cities={cities}/>
                <BottomHomeButton/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {cities: state.city.cities}
};

export default connect(mapStateToProps, {getCities})(Cities);