import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar'
import MainPage from './Components/MainPage/MainPage';

function App({state,dispatch}) {
  return (
    <div className="App">
        <div className="header-wrapper">
            <Header />
        </div>
        <div className="sidebar-wrapper">
            <Sidebar items = {state.sidebar.items}/>
        </div>
        <div className="content-wrapper">
            <Route path = "/" render = {()=>(<MainPage state = {state} dispatch={dispatch}/>)} exact/>
        </div>
    </div>
  );
}

export default App;
