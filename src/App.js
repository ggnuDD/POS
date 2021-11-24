import React from 'react'
import Header from './components/Header'
import Home from "./pages/home";
import Payment from "./pages/payment";
import Movie from "./pages/movie";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { FooterContainer } from "./container/footer";
import { Provider } from "./components/products/content";
import Login from "./components/login/login"
import Register from "./components/login/register"
import './App.css';

function App (){
  return(
  <div>
      <Provider>
        <Router>
            <SearchBar />
            <Header />
            <Navbar />
            <div style={{height:"30px", backgroundColor: '#C4A484'}}></div>
            <div style={{backgroundColor: '#C4A484'}}>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/payment" exact element={<Payment/>} />
                <Route path="/movie" exact element={<Movie/>} />
                <Route path="/login" exact element={<Login/>} />
                <Route path="/register" exact element={<Register/>} />
            </Routes>
            </div>
        </Router>
        <div style={{height:"30px", backgroundColor: '#C4A484'}}></div>
        <FooterContainer />
      </Provider>
  </div>
  )
}

export default App;
