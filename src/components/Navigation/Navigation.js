import React from 'react';

const Navigation = ({isSignedIn , onRouteChange}) => {
	if (isSignedIn) {
	return (
	<nav style={{display:'flex', justifyContent: 'flex-end'}} >
	<p onClick={() => onRouteChange('signout')} className='pa2 ma4 f3 black grow underline pointer' > Sign Out </p>
	</nav>
	   );
      } else {
      	return (
          <nav style={{display:'flex', justifyContent: 'flex-end'}} >
	     <p onClick={()=> onRouteChange('register')} className='pa2 ma4 f3 black grow underline pointer' > Register </p>
	     <p onClick={()=> onRouteChange('signin')} className='pa2 ma4 f3 black grow underline pointer' > Sign in </p>
	     </nav>
      		);
      }
}
export default Navigation;