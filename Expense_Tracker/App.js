import React from 'react'
import {Provider} from 'react-redux'

import Balance from './components/Balance.js'
import AddTransaction from './components/AddTransaction.js'
import Calculation from './components/Calculation.js'
import Header from './components/Header.js'
import Transaction from './components/Transaction.js'

import store from './redux/Store.js'

function App() {
	return (
		<Provider store={store}>
		<div>
			<Header />
			<Balance />
			<Calculation />
			<AddTransaction />
			<Transaction />
		</div>
		</Provider>
	)
}

export default App