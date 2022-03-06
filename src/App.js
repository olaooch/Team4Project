import React from "react";
import "./App.css";
import Iphone from "./img/Iphone.png";



function App (){

  return(
    
    <div className="container">
      
      <div className="textwrapper">
       <h1 className="text">SOLUTION</h1>
        <div className="textall">

          <div className="txt1"><h2>NEED MORE IMFORMATION?</h2>
          <h3 className="text2">Ask Our Community</h3>
          <div className="txth5">
          <h5 >01.App user experience & interface</h5>
          <p className="txtp">Lorem ipsum dolor ait amet consectetur adipisicing elit. Non quis voluptetibus saepe<br/>architectto offlciis</p>
          <h5>02.App Performance and Security</h5>
          <h5>03.Best color Vision & Combination?</h5></div>
          </div>

          <div className="iphonecontainer">
      
            <div className="circle"></div> 
             <img src={Iphone} className="iphone" alt="iphone" />
              
          </div>   
          

        

      </div>
      <div className="mainbut">
              <button className="but">Visit Community</button></div> 
             
         
            
    </div> 
    <div className="container2"> 
              <div className="txtwrapper">
               <h1>DOWNLOAD</h1>
               
                </div>
              <div className="lastext">
                <h2>APP AVAILABLE</h2>
                <h5 className="txth5">Get It Now Free</h5>
                <p>Lorem ipsum dolor ait amet consectetur adipisicing elit. Aperiam nihil praentium<br/> vel voluptates eos id cumque, dolore accusantium lur eaque nisi moles.tiae</p>
              </div>
            </div>
         </div>

  )
    
    
  
}

export default App