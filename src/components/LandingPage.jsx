import React from 'react'
import '../stylesheets/LandingPage.css'
import {BiFootball} from 'react-icons/bi';

function LandingPage( { setStart } ) {
    return (
        <div className='landing'>
            <h1>Guess the footballer</h1>
            <BiFootball className='ball' onClick={() => setStart(true)}/>
        </div>
    )
}

export default LandingPage
