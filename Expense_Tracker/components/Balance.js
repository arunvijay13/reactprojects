import React from 'react'
import {useSelector} from 'react-redux'

function Balance() {
	const transactions = useSelector(state => state.transactions)
	
	const amounts = transactions.map(item => item.amount)
	const total = amounts.reduce((a,i) => a+i ,0)

	return (
			<div className='balance'>
				<p>YOUR BALANCE</p>
				<p>${total}</p>
			</div>
	)
}

export default Balance