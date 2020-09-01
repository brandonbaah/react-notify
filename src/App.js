import React, {Component} from 'react';

import './App.css';
import Users from './components/Users';

class App extends Component {

  state = {
    users: []
  }

  // getUser = async (e) => {
  //   const userName = e.target.elements.userName.value;
  //   e.preventDefault();
  //   const apiCall = await fetch(`http://127.0.0.1:8000/api/users`);
    
  //   const data = await apiCall.json();
  //   this.setState({ users: data });
  //   console.log(this.state.users);
  // }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Admin User Dashboard</h1>
        </header>
        <Users users={this.state.users}/>
      </div>
    );
  }
  
}

export default App;
