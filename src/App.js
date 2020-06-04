import React ,{Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.scss';
import TourList from "./components/tourList";

class App extends Component{
    render(){
      return (
        <main> 
        <NavBar/>
        <TourList/>
        </main>
        );
    }
  }

export default App;
