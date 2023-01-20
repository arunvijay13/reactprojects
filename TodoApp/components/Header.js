import React,{useState} from 'react'


function Header({func}) {

	const [data,setData] = useState('')

	const addItem = () => {
		if(data !== ''){
			func(data)
			setData('')
		}
	}

	return (
		<div className='header'>
			<h1 className='title'>Simple Task List</h1>
			<div className='field'>
				<input className='text'
					type="text"
					placeholder="Enter List"
					value={data}
					onChange={(e)=>setData(e.target.value)}  
				/>
				<button className='add' onClick={addItem}>Add to list</button>
			</div>
		</div>
	)
}

export default Header