import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './components/description';

const App = ()=>{
  return <div>
    <NavBar/>
    <Description/>
  </div>
}
ReactDOM.render(<App/>,document.querySelector('#root'));