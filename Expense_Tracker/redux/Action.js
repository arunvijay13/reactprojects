export const delete_Transaction = (id) =>{
	return{
		type:'DELETE_TRANSACTION',
		payload:id
	}
}

export const add_Transaction = (obj) =>{
	return{
		type:'ADD_TRANSACTION',
		payload:obj
	}
}