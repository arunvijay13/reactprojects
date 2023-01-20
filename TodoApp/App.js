import React,{useState} from 'react'

import Header from './components/Header.js'
import Pending from './components/Pending.js'
import Completed from './components/Completed.js'

function App() {

	const [pendingList,setpendingList] = useState([])
	const [completedList,setcompletedList] = useState([])

	const updatedList = (item) => {
		setpendingList([...pendingList,item])
	}

	const removedList = (key) => {
		const array = pendingList
		setpendingList(array.filter( item => item !== key))
	}

	const deletedList = (key) => {
		const array = completedList
		setcompletedList(array.filter( item => item !== key))
	}

	const finishedList = (key) => {
		const newList = pendingList
		newList.map( item => 
			{if( item == key)
				setcompletedList([...completedList,item]) 
			})
		setpendingList(newList.filter( item => item !== key))
	}

	const workover = (key) => {
		const addList = completedList
		addList.map( item => 
			{if( item == key)
				setpendingList([...pendingList,item]) 
			})
		setcompletedList(addList.filter( item => item !== key))
	}

	return (
		<div className='container'>
			<Header func={updatedList} />
			<Pending list={pendingList} func1={removedList} func2={finishedList} />
			<Completed list={completedList} func1={deletedList} func2={workover} />
		</div>
	)
}

export default App

