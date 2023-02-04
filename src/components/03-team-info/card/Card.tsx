import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/components/card.scss'
import { coachInterface } from '../../../models/interfaces';



function card(props:any) {
    const {name, position, img, about}:coachInterface = props.coach;
  return (
    <div className="card">
        <div className="card-img">
            <img src={img} alt="coach" />
        </div>
        <div className="card-info">
            <h1 className="card-name">{name}</h1>
            <h2 className="card-position">{position}</h2>
            <p className="card-about">{about}</p>
        </div>
    </div>
  )
}

card.propTypes = {
    coach: PropTypes.object.isRequired
}

export default card
