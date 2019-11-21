import React, { Component } from 'react';

class TitleComponent extends Component {
    render() {
        
        const titleStyle = {
            letterSpacing: '2vw',
            textIndent: '5vw',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '10vw',
        }

        return (
            <div>
                <h1 style={titleStyle}>{this.props.title}</h1>
            </div>
        )
    }
}

export default TitleComponent;