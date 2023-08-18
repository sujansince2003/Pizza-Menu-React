import React from 'react';

const Footer = () => {
const hour=new Date().getHours();
const openHour=1;
const closeHour=21;
const isOpen= hour>=openHour && hour<=closeHour;





    return (<footer className='footer'>
        {
            isOpen ? (
        <div className='order'>
            <p>
              We are open till {closeHour}:00 pm.Visit Us and taste Best Pizza😍
            </p>
            <button className='btn'>Order Now</button>

        </div>)
        : <p>Please Visit us between {openHour} and {closeHour}</p>
        }
        
        
        </footer>  );
}
 
export default Footer;