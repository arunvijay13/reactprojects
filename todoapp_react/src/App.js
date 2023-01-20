import React from "react";
import "./styles.css";
import Todolist from './Todolist'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data : [],
      currentItem : {
        text : '',
        key : ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeItem = this.changeItem.bind(this)
    this.deleteChange = this.deleteChange.bind(this)
  }

  handleChange(event){
    this.setState({
      currentItem : {
        text : event.target.value,
        key : Date.now()
      }
    })
  }

  changeItem(event){
    event.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !== ''){
      const data = [...this.state.data,newItem]
      this.setState({
        data : data,
        currentItem : {
          text : '',
          key : ''
        }
      })
    } 
  }

  deleteChange(key){
    const filteredItems = this.state.data.filter(item => item.key!==key)
      this.setState({
        data: filteredItems
      })
    }

  render(){
    return (<div className='container'>
        <form onSubmit={this.changeItem}>
          <input type="text"
          placeholder="Enter items"
          value={this.state.currentItem.text}
          onChange={this.handleChange}
           />
          <button type="'button">ADD</button>
        </form>
        < Todolist items = {this.state.data} 
        delete = {this.deleteChange}
        />
      </div>)
  }
}


export default App