import React from 'react'

function Pending({list,func1,func2}) {

	const handler = (e) => {
		
		if(e.target.checked){
			func2(e.target.name)
		}
	}
	
	return (
		<div className='pending'>
			<h2>Pending Work</h2>
			{	list.map( item => {
									return <div className='item' key={item}>
										<input type='checkbox' name={item}  onChange={handler}/>
										<p>{item}</p>
										<button className='remove' onClick={() => func1(item)}>Remove</button>
									</div>
								}
				)
			}
		</div>
	)
}

export default Pending