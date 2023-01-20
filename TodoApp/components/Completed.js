import React from 'react'

function Completed({list,func1,func2}) {

	const handler = (e) => {	
		if(e.target.checked == false){
			func2(e.target.name)
		}
	}

	const styles = {
		background:'rgba(255,0,0,0.1)',
		borderBottom:'1px solid red'
	}

	return (
		<div className='pending'>
			<h2>Completed Work</h2>
			{list.map(item => {
				return (
					<div className='item' style={styles} key={item}>
						<input type='checkbox' name={item} checked={true} onChange={handler}/>
						<p>{item}</p>
						<button className='remove' onClick={() => func1(item)}>Remove</button>
					</div>
				)
			})}
		</div>
	)
}

export default Completed