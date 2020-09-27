import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import './Slideshow.css'

const slideImages = [
    'images/banner.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
]

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow


