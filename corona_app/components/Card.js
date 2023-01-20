import React from 'react'
import CountUp from 'react-CountUp'
 
function Card({detail:{confirmed,recovered,deaths,lastUpdate}}) {
	if(!confirmed){
		return 'loading...';
	}
	return (
		<div className='row m-2'>
			<div className='col-sm-4 my-2'>
				<div className='card'>
				<div className='card-title text-uppercase text-center font-weight-bold'><h5>confirmed</h5></div>
				<div className='card-body'>
					<div className='card-text text-center'>
						<CountUp className='font-weight-bold'
							start = {0}
							end = {confirmed.value}
							duration={2.5}
							separator = ","
						/>
					</div>
					<div className='card-text text-center'>{new Date(lastUpdate).toDateString()}</div>
				</div>
				<div className='card-footer bg-primary text-white text-center font-weight-bold text-uppercase'>No of Active Cases Covid-19</div>
				</div>
			</div>
			<div className='col-sm-4 my-2'>
				<div className='card'>
				<div className='card-title text-uppercase text-center font-weight-bold'><h5>Recovered</h5></div>
				<div className='card-body'>
					<div className='card-text text-center'>
						<CountUp className='font-weight-bold' 
							start = {0}
							end = {recovered.value}
							duration={2.5}
							separator = ","
						/>
					</div>
					<div className='card-text text-center'>{new Date(lastUpdate).toDateString()}</div>
				</div>
				<div className='card-footer bg-success text-white font-weight-bold text-center text-uppercase'>Recoveries from covid-19</div>
				</div>
			</div>
			<div className='col-sm-4 my-2'>
				<div className='card'>
				<div className='card-title text-uppercase text-center font-weight-bold'><h5>Death</h5></div>
				<div className='card-body'>
					<div className='card-text text-center'>
						<CountUp className='font-weight-bold'
							start = {0}
							end = {deaths.value}
							duration={2.5}
							separator = ","
						/>
					</div>
					<div className='card-text text-center'>{new Date(lastUpdate).toDateString()}</div>
				</div>
				<div className='card-footer bg-danger text-white text-center font-weight-bold text-uppercase'>death caused by covid-19</div>
				</div>
			</div>
		</div>
	)
}

export default Card