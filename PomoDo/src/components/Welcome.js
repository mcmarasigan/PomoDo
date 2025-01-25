import React from 'react';
import '../css/Welcome.css';
import {Link} from 'react-router-dom';

export default function Welcome() {
  return (
    <React.Fragment>
    <div className='container'>
        {/*Header */}
        <div className='header'>
            <h4>TASK LIST APP</h4>
            <h1>PomoDo</h1>
        </div>
        {/*Picture */}
        <div className='picture'>
            <img src={require('../pictures/logo.png')}alt='Brownies'/>
        </div>
        {/*Welcoming quotes */}
        <div className='paragraph'>
            <p>Jumpstart your productivity with PomoDo!</p> 
        </div>
        {/*Button to go to the timer or to add tasks. Just replace to='/componentName'*/}
        <div className='started'>
            <Link style={{textDecoration: 'none'}} to='/Tasklist'>
                <button>Get Started</button>
            </Link>
            <h4>Terms and Conditions</h4>
        </div>

    </div>
  </React.Fragment>
  );
}
