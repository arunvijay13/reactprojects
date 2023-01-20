import React,{useContext} from 'react'
import {LogContext} from '../context/context.js'
import {Link} from 'react-router-dom'

const Welcome = () => {

	const {user} = useContext(LogContext)

	return (
		<div>
			<p className='welcome'>welcome {user}</p>
			<Link to='./account'>
				<button>Back to Home</button>
			</Link>
		</div>
	)
}

export default Welcome