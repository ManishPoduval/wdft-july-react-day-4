import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Contacts from './component/Contacts'
import PokeDetails from './component/PokeDetails'
import axios from 'axios'
import {Route, Switch, Link} from 'react-router-dom'

// useEffect(() => {
//     axios.get(() => {

//     })
// }, []) 

class App extends React.Component {

  state = {
    pokemons: []
  }

  componentDidMount(){
    //You don't need this in today's lab. They have a json. 
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        console.log(res)
        this.setState({
          pokemons: res.data.results
        })
      })
  } 


  render(){
    return (
    <div style={{display:'flex'}}>
      <div>
      {
        this.state.pokemons.map((pokemon, index) => {
          return <Link to={`/pokemons/${index+1}`}><p>{pokemon.name}</p></Link>
        })
      }
      </div>
        <Route path="/pokemons/:id" component={PokeDetails} />
    </div>
    )
  }
}





//------------------Routes Explanation------------------

// function App() {
//   return (
//     <div >
//      <Nav />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" render={(routeProps) => {
//           return <About name={'Manish'} {...routeProps}/>
//         }} />
//         <Route path="/contacts/:id" component={Contacts} />
//         <Route path="*" component={Contacts} />
//       </Switch>
//     </div>
//   );
// }

export default App;
