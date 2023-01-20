import React from 'react'
import {Link} from 'react-router-dom'

const Account = () => {

	return (
		<div>
			<div className='newcreate'>
			<p>New User ?</p>
			<Link to="registration">
				<button>Create Account</button>
			</Link>
			</div>
			<div className='newlogin'>
			<small>Already have an account ?</small>
			<Link to="/login">
				<button>Log In</button>
			</Link>
			</div>
		</div>
	)
}

export default Account