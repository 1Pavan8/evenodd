// Write your code here
import {Component} from 'react'
import './index.css'

class Evenodd extends Component {
  state = {num: 0}

  inc = () => {
    const newnum = Math.floor(Math.random(100) * 100)
    this.setState(prevstate => ({num: prevstate.num + newnum}))
  }

  render() {
    const {num} = this.state
    let type = 'Even'

    if (num % 2 === 0) {
      type = 'Even'
    } else {
      type = 'Odd'
    }
    return (
      <div className="main">
        <div className="sub">
          <h1 className="numb">
            Count <span>{num}</span>
          </h1>
          <p className="type">Count is {type}</p>
          <button type="button" onClick={this.inc} className="btn">
            Increment
          </button>
          <p className="text">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default Evenodd
