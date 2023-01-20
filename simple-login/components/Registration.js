import React,{useState,useContext} from 'react'
import {LogContext} from '../context/context.js'
import {Link} from 'react-router-dom'

const Registration = () => {

	const {user,userChange} = useContext(LogContext)
	const [name,setName] = useState('')
	const handleChange = (e) => {
		setName(e.target.value)
	}

	return (
		<div className='reg'>
			<div>
			<label>UserName</label>
			<input type='text' placeholder='name' onChange={handleChange} />
			</div>
			<div>
			<label>Password</label>
			<input type='password' placeholder='password' />
			</div>
			<div>
			<label>Email-iD</label>
			<input type='email' placeholder='Email' />
			</div>
			<Link to='Welcome'>
			<button onClick={()=> userChange(name)}>Confirm</button>
			</Link>
		</div>
	)
}

export default Registration