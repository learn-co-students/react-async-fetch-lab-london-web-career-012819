// create your App component here

import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => this.setState({people: data.people}))
    }

    render() {
        return(
            <React.Fragment>

                {this.state.people.map(person => 
                    <div>
                        <h3>Name: {person.name}</h3>
                        <h3>Craft: {person.craft}</h3>
                    </div>)}
            </React.Fragment>
            
        
        )
    }
}

export default App