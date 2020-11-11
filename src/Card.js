import React from 'react'
import './index.css'
const Card = ({name, id, place}) => {
    return(<div className="card-container">
           <div className="card-element">
               {name}
           </div>
           <div className="card-element">
               {id}
           </div>
           <div className="card-element">
               {place}
           </div>
        </div>
    )
}

export default Card