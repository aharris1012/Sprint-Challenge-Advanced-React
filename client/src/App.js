import React from 'react';
import './App.css';

import Header from "./Componentss/Header";
import PlayerList from "./Componentss/PlayersList";
import axios from "axios";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[],
      name:"",
      country:""
      

    };
  }


  componentDidMount(){
    console.log ('working');

    axios.get("http://localhost:5000/api/players")
    .then (response =>{
      console.log(response.data);
      this.setState({
        data:response.data,
        name:response.data.name,
        country:response.data.country
      });
    })
    .catch(error => console.log("no players"));
  }

  render(){
    return (
      <div className="App">
        <Header />
        
        <PlayerList
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
      </div>
    );
  }
}
 export default App;