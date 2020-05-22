import React from 'react';


const Card = ({id, name, email}) => {
	return (
  <div className='tc bg-light-blue dib pa3 ma2 br3 shadow-5 grow '>	
  <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
  <div>
	<p> {name} </p>
	<p> {email} </p>
	</div>
	</div>
	);
}
export default Card;