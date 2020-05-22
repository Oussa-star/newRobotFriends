import React from 'react';
import './SearchZone.css';

const SearchZone = ({onSearchField}) => {
	return (
	<div className='search pa2'>
	<input
	 className='pa3 ma3 bg-light-green' 
	 type='search' 
	 placeholder = 'search for robots'
	 onChange={onSearchField}
	  />
	</div>
	);
}
export default SearchZone;