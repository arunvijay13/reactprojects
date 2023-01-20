import React from 'react'
import {fetchData} from '../api/Api.js'

function Chosen({countries,func}) {
	if(!countries.length){
		return 'loading...'
	}
	return (
		<div className='m-2 row'>
			<div className='col'>
			<form className='d-flex justify-content-center align-items-center'>
				<select className='w-75' onChange={(e)=> func(e.target.value)}>
					<option key={global} value={'global'}>Global</option>
					{	
						countries.map(item => <option key={item.name} value={item.name}>{item.name}</option>)
					}
				</select>
			</form>
			</div>
		</div>
	)
}

export default Chosen