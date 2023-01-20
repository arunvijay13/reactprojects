import React  from 'react'

function Selects({info,func}){
	return <div>
				<div className='select'>
					<div className='row1'>
						<img src={info.Poster} alt='error'/>
						<p className='title'>{info.Title}</p>
					</div>
					<div >
						<p className='year'>Rating: {info.imdbID}</p>
						<p className='year'>Year: {info.Year}</p>
					</div>
				</div>
			<button onClick={()=>func()}>close</button>
		</div>
}

export default Selects