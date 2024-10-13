import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <div className='containerInfo'>
               <div className="innerInfo">
               <div className="boxInfoLocation">
                    <p class="infoTitle">Location</p>
                    <p className='info Loc1'>1 Te Aro, Wellington</p>
                    <p  className='info Loc2'>Te Aro, Wellington</p>
                </div>
                <div className="boxInfoHours">
                    <p class="infoTitle">Hours</p>
                    <p className='info HorText1'>Tuesday to Friday 7AM - 3PM</p>
                    <p className='info HorText2'>Saturday to Sunday 8AM - 3PM</p>
                </div>
                <div className="boxInfoDays">
                    <p class="infoTitle">Hours</p>
                    <p className='info HorText2'>We are closed on Mondays to reflect and refuel</p>
                </div>

               </div>

        </div>




    )
}

export default Info