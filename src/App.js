// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          astronauts: data
        })
      })
  }

  render() {
    console.log(this.state.astronauts)
    return (
      <div>HI</div>
    )
  }

}
