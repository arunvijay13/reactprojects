import {delete_Transaction} from './Action.js'
import {add_Transaction} from './Action.js'

const initialState = {
	transactions : [
		//{id:1,text:'spend',amount:-100},
		//{id:2,text:'car',amount:-400},
		//{id:3,text:'income',amount:500},
		//{id:4,text:'saving',amount:300},
	]
}

const reducer = (state = initialState,action) => {
	switch(action.type){
		case 'DELETE_TRANSACTION': return{
			...state,
			transactions: state.transactions.filter(item => item.id !== action.payload)
		}
		case 'ADD_TRANSACTION' : return{
			transactions: [...state.transactions,action.payload]
		}
		default: return	state
	}
}

export default reducer