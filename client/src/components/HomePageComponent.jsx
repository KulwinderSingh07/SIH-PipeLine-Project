import React from 'react'
import '../CSS/HomePageComponent.css'
import DataCard from './DataCard'

const HomePageComponent = () => {
  return (
    <div className='mainHomePageCompDiv'>
        <div className='homePageDivTop'>
            <div className='homePageDivTopSubUnitOne'>
                <p style={{fontSize:'30px',fontWeight:'500'}}>Welcome,</p>
                <p style={{fontSize:'15px'}}>Sunday 29th October, 2023</p>
            </div>
            <div className='homePageDivTopSubUnitTwo'>
                <DataCard/>
                <DataCard/>
                <DataCard/>
                <DataCard/>
            </div>
        </div>
        <div className='homePageDivBottom'>
            <div className='homePageDivBottomLeftUnit'>
                <h1>Left Bottom</h1>
            </div>
            <div className='homePageDivBottomRightUnit'>
                <h1>Right Bottom</h1>
            </div>
        </div>
    </div>
  )
}

export default HomePageComponent