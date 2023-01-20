import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {add_Transaction} from '../redux/Action.js'

function AddTransaction() {
	const [text,setText]  = useState('')
	const [amount,setAmount]  = useState('')
	const dispatch = useDispatch()

	const addValue = (e) => {
		e.preventDefault()
		if (text !== '' && amount !== '')
			{
				const obj = {
					id : Math.floor(Math.random()*100) + 1,
					text: text,
					amount:+amount
				}
				dispatch(add_Transaction(obj))
				setText('')
				setAmount('')
			}
	}

	return (
		<div>
			< h3 className='add'>Add Transaction</h3>
			<form onSubmit={addValue}>
				<div>
					<label>Text</label>
					<input type='text' value={text} placeholder='Enter text...' 
					onChange={(e)=> setText(e.target.value)}/>
				</div>
				<div>
					<label>Amount</label>
					<input type='text' value={amount} placeholder='Enter Amount...' 
					onChange={(e)=> setAmount(e.target.value)}/>
				</div>
				<button className='btn'>ADD TRANSACTION</button>
			</form>
		</div>
	)
}

export default AddTransaction