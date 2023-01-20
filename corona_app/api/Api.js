const url = 'https://covid19.mathdro.id/api'


export const fetchData = async (country) => {
	
	let newValue = url	
	
	if(country !== 'global' && country !== '' ){
		newValue = `${url}/countries/${country}`
	}

	const response = await fetch(newValue)
	const {confirmed,recovered,deaths,lastUpdate} =  await response.json()
	return {confirmed,recovered,deaths,lastUpdate}
}

export const fetchCountry = async () => {
	const response = await fetch(url + '/countries')
	const data = await response.json()
	return data.countries
}

export const fetchDaily = async () => {
	const response = await fetch(`${url}/daily`)
	const data  = await response.json()
	//console.log(data)
	const modifiedData = data.map(item => ({
		confirmed:item.confirmed.total,
		deaths:item.deaths.total,
		date:item.reportDate 
	}))
	//console.log(modifiedData)
	return modifiedData
}


