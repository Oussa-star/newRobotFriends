import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SearchZone from './components/SearchZone/SearchZone';
import Scroll from './components/Scroll/Scroll';
import List from './components/List/List';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const ParticlesOption = {
  particles : {
  number: {
    value : 60,
    density: {
      value_area:80
    }
    }
  }
}


 class App extends Component {
  constructor() {
    super();
    this.state= {
      robots: [],
      searchField: '',
      route: 'signin',
      isSignedIn : false
    }
  }
  
   onSearchField = (event) => {
    this.setState({searchField: event.target.value})
   }
   
   componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({robots: users}))
    .catch(err => console.log(err))
   }
   
   onRouteChange = (route) => {
    if (route==='signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:route})
   }   

  render() {
     const {robots , searchField, route, isSignedIn } = this.state;
    const filteredRobots = robots.filter(robot => {
     return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
      return (
         <div className='App'>
         <Particles className='Particless' 
      params={{ParticlesOption}} />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          {route === 'home' 
          ? <div>
          <Logo />
          <h1 className='f1'> RobotFriends </h1> 
         <div className='f3 white'>
          {'This is a simple robot app makes you search for you robot ..'}
        <div>
       {'Give it a try..'}
        </div>
        </div>
        <SearchZone onSearchField={this.onSearchField} />
        <Scroll >
       <List robots={filteredRobots} />
        </Scroll> 
        </div> 
        : (
        route === 'signin' 
        ? <Signin onRouteChange={this.onRouteChange} />
        : <Register onRouteChange={this.onRouteChange} /> 
        )
      }
    </div> 
         );
      }
  }
 

export default App;
