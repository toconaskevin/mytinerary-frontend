import React, { Component } from 'react';

export default class Activities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: null,
            // isLoading: true
        }
    }

    componentDidMount() {
        console.log("activ: "+this.props.itineraryId);
        

        fetch('http://localhost:5000/api/activities/' + this.props.itineraryId)
        .then((response) => response.json())
        .then((json) => {
            this.setState({ activities: json.activities })
        })
    }

    render() {
        
        const container = {
            margin: '0rem 0.5rem 1rem 0.5rem',
            height: '6rem',
            overflow: 'scroll'
        }

        const carousel = {
            width: '100%',
            height: '100%',
            borderRadius: '3px',
            display: 'flex',
            justifyContent: 'flex-start',
        }

        const slider = {
            display: 'flex',
            flexShrink: '0'
        }
        
        const box = {
            width: '100%',
            height: '100%',
            padding: '0.0rem 0.2rem 0.0rem 0.2rem'
        }

        const image = {
            width: '8rem',
            backgroundPosition: 'center'
        }

        // if (this.state.isLoading) {
        //     return (
        //         <div className="d-flex justify-content-center mb-2">
        //             <div className="spinner-border" role="status">
        //                 <span className="sr-only">Loading...</span>
        //             </div>
        //         </div>
        //     )
        // } else {
            return (
                <div className='d-flex flex-column'>
                    <div className='collapse' id={'collapseExample' + this.props.id}>
                        <div style={container}>
                            <div style={carousel}>
                                <div style={slider}>

                                    {this.state.activities ? this.state.activities.map((activity, id) => (
                                         //ONCLICK CHANGE STATE COMMENT FUNC
                                        <div key={id} style={box}>
                                            <img style={image} src={activity.details[0].activityIm}/>
                                        </div> 
                                    )): <div></div>}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column p-2'>
                            <label>Comments:</label>
                            <input type='text'></input>
                        </div>
                    </div>

                    <a className='btn btn-primary' data-toggle='collapse' href={'#collapseExample' + this.props.id} role='button' aria-expanded='false' aria-controls='collapseExample'>
                        View All
                    </a>
                </div>
            )
        // }
    }
}

