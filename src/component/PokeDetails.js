import React, { Component } from 'react'
import axios from 'axios'

class PokeDetails extends Component {

    state = {
        name: '',
        img: '',
        id: '',
    }

    makeApiCall = () => {
        let id = this.props.match.params.id
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            const {sprites:{ other:{ dream_world } } } = res.data
            this.setState({
                name: res.data.name,
                id: id
                img: dream_world.front_default
            })
        })
    }

    componentDidMount(){
        this.makeApiCall()
    }

    componentDidUpdate(){ 
        // to avoid infinite API calls, fectch the data if it has not been fetched preiously 
        if (this.state.id != this.props.match.params.id) {
            this.makeApiCall() 
        }
         
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.img} />
            </div>
        )
    }
}

export default PokeDetails
