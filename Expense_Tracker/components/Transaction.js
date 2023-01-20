import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {delete_Transaction} from '../redux/Action.js'

function Transaction() {
	const transactions = useSelector(state => state.transactions)
	const dispatch = useDispatch()

	return (
		<div className='history' >
			<h3 className='add'>History</h3>
			{
				transactions.map( item => {
					return  <div key={item.id} style={{ borderColor : item.amount>0 ? 'green':'red'}} className='transaction'>
									<p>{item.text}</p>
									<span>${item.amount}
									<button className='close' onClick={() => dispatch(delete_Transaction(item.id))}>X</button></span>
							</div>
			})
		}
		</div>
	)
}

export default Transaction