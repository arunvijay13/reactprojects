import React,{createContext,useState} from 'react'

export const LogContext = createContext()

export const LogProvider = ({children}) => {

	const [user,setUser] = useState('')

	const userChange = (name) => {
		setUser(name)
	}

	return <LogContext.Provider value={{user,userChange}}>
		{children}
	</LogContext.Provider>

}