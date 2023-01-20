import React  from 'react'

function Results({array,func}){
	const newItem = array.map( take => {
				return	<div onClick={()=> func(take.imdbID)} key={take.imdbID} className='single'>
						<img src={take.Poster} alt='error' />
						<p className='title'>{take.Title}</p>
					</div>
	} )
	return <div className='item'>
		{newItem}
	</div>
}

export default Results 