import React from 'react'
import Header from './components/Header'
import Home from "./pages/home";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { FooterContainer } from "./container/footer";
import { Provider } from "./components/products/content";
import './App.css';

function App (){
  return(
  <div>
      <Provider>
        <Router>
            <SearchBar />
            <Header />
            <Navbar />
            <div style={{height:"50px", backgroundColor: '#C4A484'}}></div>
            <div style={{backgroundColor: '#C4A484'}}>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/payment" exact element={<Payment/>} />
            </Routes>
            </div>
        </Router>
        <FooterContainer />
      </Provider>
  </div>
  )
}

export default App;
