import React,{useEffect} from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FAQ from './component/FAQ/FAQ';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navbar from './component/Navbar';
import Prevention from './component/Prevention/Prevention';
import NotFoundPage from './component/NotFoundPage/NotFound'

import AOS from "aos"
import "../node_modules/aos/dist/aos.css"

function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()

      },[]);

    return (
    <div className = "Main-App" >
        <Navbar/>
        
        <Switch >
            <Route path = "/about" component = {About}/>
            <Route path = "/prevention" component = {Prevention}/>
            <Route path = "/FAQ" component = {FAQ}/>
            <Route path = "/contact" component = {Contact}/>    
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "*" component = {NotFoundPage}/>
        </Switch >
        

        <Footer/>
    </div>
    );
}

export default App;