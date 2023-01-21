import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
 import './HomeCart.css'

const HomeCart = () => {
  return (
    <Fragment>
    <div className="main-div">
      
      
      <div className="tours-list">
        <div>JUL16</div>
        <div>DETROIT, MI</div>
        <div>DTE ENERGY MUSIC THEATRE</div>
        <Button>BUY TICKETS</Button>
        
      </div>
    </div>
      <div className='line-main'>
      <div className='line'></div>
      </div>
      </Fragment>

  )
}

export default HomeCart;
