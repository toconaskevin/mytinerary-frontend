import React, { Component } from 'react'

export default class Logout extends Component {
    render() {
        return (
            <div>
                {
                    localStorage.removeItem('sessionKey'),
                    window.location.href = window.location.reload
                }
            </div>
        )
    }
}
