import React,{useState,useContext} from 'react'
import {LogContext} from '../context/context.js'
import {Link} from 'react-router-dom'

const Login = () => {

	const {user,userChange} = useContext(LogContext)
	const [name,setName] = useState('')

	const handleChange = (e) => {
		setName(e.target.value)
	}

	return (
		<div>
			<form>
				<div>
					<label>UserName</label>
					<input type='text' placeholder='username' value={name} onChange={handleChange} required/>
				</div>
				<div>
					<label>PassWord</label>
					<input type='password' placeholder='Password' required/>
				</div>
				<Link to='welcome'>
					<button onClick={()=>{userChange(name)}} >Submit</button>
				</Link>
			</form>
		</div>
	)
}

export default Login