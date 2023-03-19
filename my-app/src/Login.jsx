import React from 'react';

function Login(){
	return(
	<form action='/login' method='POST'>			
		<input type="text"  placeholder="User name" name='username'/>
		<input type="password"  placeholder="Password" name='password'/>			
		<button type="submit"> Submit </button>					
	</form>
	)
}
				
export default Login;