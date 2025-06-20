import React from 'react'
import './EventTile.css'
function EventTile( props ) {
    return (
        <div className='event-tile col-lg-4 col-md-6 col-12 my-2'>
            <div className='event-pic'>
                <img style={{objectFit:"fill"}} src={props.link} alt='event-pic' />
            </div>
            <div className="event-name-box">
                <center>
                    <p>{props.title}</p>
                    <h3 style={{overflow:"hidden"}}>{props.description}</h3>
                </center>
            </div>
        </div>
    )
}

export default EventTile