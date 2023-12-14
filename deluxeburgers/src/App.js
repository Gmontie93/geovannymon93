import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';
import {Route,Routes} from "react-router-dom";
import ContactUs from './components/ContactUs';

function App() {
  const [burgerData,setburgerData] = useState([]);
  useEffect (() =>{
    const fetchData = async () => {
      const resp = await fetch('/burgers.json');
      const data = await resp.json();
      console.log(data);
      setburgerData(data);
      

    };
    fetchData();
  }, []);

  return (
   <>
   <Header/>
   <MainMenu/>

   <Routes>

    <Route path="/home" element={<Home/>}/>
    <Route path="/menu" element={<Menu burgerData={burgerData}/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
   </Routes>

   <Footer/>
   </>
  );
}

export default App;
