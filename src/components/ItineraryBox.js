import React, { Component } from 'react';
import Activities from './Activities';

const img_url="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-101-e1485815933252.jpg"

export default class ItineraryBox extends Component {

    render() {

        return (
            <div className='d-flex flex-column jumbotron p-1'>
                <div className='d-flex flex-row'>
                    <div className='pr-3'>
                        <img className='rounded-circle' width='80rem' height='80rem' src={img_url} alt='profile user avatar'/>
                        <p className='text-center'>{this.props.itinerary.author}</p>
                    </div>
                    <div className='d-flex flex-column w-100 p-1 mb-1'>
                        <p className='h5'>Gaudi In A Day</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p>Likes: {this.props.itinerary.rating}</p>
                            <p>{this.props.itinerary.duration} Hours</p>
                            <p>${this.props.itinerary.cost}</p>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center'>
                     
                            {this.props.itinerary.hashtags ? this.props.itinerary.hashtags.map((hashtag, id) => (
                                <p key={id} className='ml-1 mr-1'>{Object.values(hashtag)}</p>
                            )) :
                                <div></div>
                            }

                        </div>
                    </div>
                </div>
                {console.log("itibox: " +this.props.itinerary._id)
                }
                <Activities id={this.props.id} itineraryId={this.props.itinerary._id}/> 
            
            </div>
        )
    }
}
