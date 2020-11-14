
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/footer";
import Sell from "./components/sell";
import Form from "./components/form";


import 'bootstrap/dist/css/bootstrap.min.css';
import NewComponent from "./components/Header";
import Img1 from './images/1.png'
import Img3 from './images/slider.png';
import Img4 from './images/footer.png';

import Navbar from"./components/navbar";
import Card from"./components/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faHeart}  from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';




 




function App() {
  
  return (
    <div>
      
       
  
        
        
        <Header/>
        
        <Navbar/>
        <img src={Img3} width="1375px" height="250px"/>
        
         
        

      <br/> <br/>
     
      <Card     />   
      <br/>
      <br/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <br/><br/>
      <img src={Img4} width="1375px" height="190px"/>
      <br/>
      <Footer/>

      {/* <Sell/> */}
      {/* <Form/> */}
    </div>
  );
}




export default App;

