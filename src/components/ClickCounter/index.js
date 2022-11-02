// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreased = () => {
    console.log('Clicked')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">
          The Button has been clicked{' '}
          <span className="increase-counter">{count}</span> Times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.onIncreased}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
