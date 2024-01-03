import React from 'react'
import Navbabr from '../../Home/Components/Navbabr'
import ActiveTabs from '../ActiveTabs/ActiveTabs'

const DestinationDetails = () => {
  return (
    <div>
      <Navbabr />
      <div className='p-4 lg:p-10 '>
        <ActiveTabs />
      </div>
    </div>
  )
}

export default DestinationDetails
