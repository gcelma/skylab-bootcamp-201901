import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CanvasLanding from '../CanvasLanding'
import './index.sass'


class Landing extends Component {
    
    render() {
        return <div className="canvasLanding">
            <CanvasLanding />
        </div>
    }
}

export default withRouter(Landing)