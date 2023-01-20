import React, {useState,useEffect} from 'react'
import Food from "./Food.js"

const App = () => {
  const APP_ID = '44a12457'
  const APP_KEY = '4ad36206ac4c0ebe8c850c5cb9a9a412'	
  
  const [receipe,setReceipe] = useState([])
  const [search, setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(()=> {
    getReceipes()
  },[query])

  const getReceipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q={search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setReceipe(data.hits)
    console.log(data.hits)
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const queryChange = () => {
    setQuery(search)
    setSearch('')
  }

  return (
    <div>
      <form onSubmit={queryChange}>
        <input type="text" placeholder="Enter receipe" />
        <button type="search" value={search} onChange={handleChange}>search</button>
      </form>
      {receipe.map((item)=>{
        < Food title={item.receipe.label} 
               img = {item.receipe.image}
            />
      })}
    </div>
  )
}

export default App