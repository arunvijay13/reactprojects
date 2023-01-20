import React, {useState} from 'react'
import Results from './Results.js'
import Selects from './Selects.js'
import 'regenerator-runtime/runtime'

function App(){

	const [search,setSearch] = useState('')
	const [result,setResult] = useState([])
	const [selected,setSelected] = useState({})
	const [change,setChange] = useState(true)

	

	const pullRequest = async (event) => {
		if(event.key == 'Enter' && search !== ''){
			const response = await fetch(`http://www.omdbapi.com/?apikey=9be2edc4&s=${search}`)
			const data = await response.json()
			setResult(data.Search)	
			console.log(data)
		}
	}

	const handleChange = (event) => {
		setSearch(event.target.value)
	}

	const selectChange = (key) => {
		result.map( take => {
			if(take.imdbID == key){
				setSelected(take)
				setChange(prevChange => !prevChange)
			}
		})
	}

	const closeChange = () => {
		setChange(prevChange => !prevChange)
	}

	return (
		<div className='container'>
			<h1 className="heading">Movie Gallery</h1>
			<main>
				<input 
					type='text' 
					placeholder='Enter Movie Name'
					value = {search}
					onChange = {handleChange} 
					onKeyPress = {pullRequest}
				/>
			</main>
			<div className='show'>
			{ change ? <Results array={result} func={selectChange} /> : <Selects info={selected} func={closeChange}/> }
			</div>
		</div>
		)

}

export default App

