import React,{useState,useEffect} from 'react'
import {Line,Bar} from 'react-chartjs-2'
import {fetchDaily} from '../api/Api.js'

function Graph({bool,detail:{confirmed,recovered,deaths}}) {

	if(!confirmed){
		return 'loading'
	}

	const [dailydata,setDailydata] = useState([])

	useEffect(()=>{
		async function fetchInfo(){
			setDailydata(await fetchDaily())
		}
		fetchInfo()	
	},[])

	

	const data = {
		labels : dailydata.map(item => item.date),
		datasets : [{
			label:['confirmed'],
			data:dailydata.map(item => item.confirmed),
			borderColor:'#3333ff',
			fill:true
		},{
			label:['death'],
			data:dailydata.map(item => item.deaths),
			borderColor:'rgba(255,0,0,0.7)',
			fill:true
		}]
	}

	const obj = {
		labels : ['confirmed','infected','deaths'],
		datasets:[{
			label:['confirmed','infected','deaths'],
			data:[confirmed.value,recovered.value,deaths.value],
			backgroundColor: ['blue','green','red']
		}]
	}
	

	return (
		<div className='m-4 row graph-container'>
			<div className='col-sm-12 graph'>
			{bool ? <Bar data={obj} /> : <Line data={data} />}
			</div>
		</div>
	)
}

export default Graph


