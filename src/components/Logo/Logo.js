import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.png';
import './Logo.css';

const Logo = () => {
	return (
		<div>
		 <Tilt className=" Tilt br3 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner"> <img alt='logo' src={robot} /> </div>
     </Tilt>
     </div>
     );
}
export default Logo