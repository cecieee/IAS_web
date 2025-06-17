import React from 'react'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import './Styles/EventDetail.css'
import Squares from '../Components/Squares/Squares'
import details from "./details"
import { useLocation} from 'react-router-dom';

function EventDetail(props) {
const Location = useLocation();
var id = Location.state.id
console.log(id)
    return (
        <div className='event-detail container-fluid mb-5'>
            
            <div className="event-detail-header m-5 row">
            
                <Heading title={details.event[id].title} />
                <Line />
            </div>
            <div className='row'>
                <div className="event-img col-lg-5">
                    <img style={{objectFit:"contain"}} src={details.event[id].image} alt="" />
                </div>
                <div className="details col-lg-id col-12">
                    <p>{details.event[id].qoute}</p>

                       <p>{details.event[id].intro}</p>

                       <p>{details.event[id].content}</p>

                        <p>{details.event[id].date}</p>

                    <div className="details-bottom mt-3">
                        <a href={details.event[id].title}><button >
                            Register
                        </button></a>
                        <Squares />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail