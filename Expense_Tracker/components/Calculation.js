import React from 'react'
import {useSelector} from 'react-redux'

function Calculation() {
	const transactions = useSelector(state => state.transactions)
	
	const amounts = transactions.map(item => item.amount)
	const income = amounts.filter(item => item > 0 ).reduce((a,i) => a+i,0).toFixed(2)
	const expense = amounts.filter(item => item < 0 ).reduce((a,i) => a+i,0).toFixed(2)

	return (
		<div className='calculation'>
			<div className='income'>
				<p>Income</p>
				<p style={{color:'green'}}>$+{income}</p>
			</div>
			<div className='expense'>
				<p>Expense</p>
				<p style={{color:'red'}}>${expense}</p>
			</div>
		</div>
	)
}

export default Calculation