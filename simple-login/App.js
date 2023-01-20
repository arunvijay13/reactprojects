import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Login from './components/Login.js'
import {LogProvider} from './context/context.js'
import Account from './components/Account.js'
import Registration from './components/Registration.js'
import Welcome from './components/Welcome.js'

const App = () => {

	const [value,setValue] = useState('true')

	return (
		<LogProvider>
		<div className='container'>
			{value ? <button className='start-btn' onClick={()=> setValue(false)}>Get Started</button> : 
			<Router>
				<div>
				<Switch>				
					<Route path ='/login' component={Login} />
					<Route path ='/welcome' component={Welcome} />
					<Route path ='/registration' component={Registration} />
					<Route path ='/account' component={Account} />
				</Switch>
				</div>
			</Router> }
		</div>
		</LogProvider>
	)
}

export default App
