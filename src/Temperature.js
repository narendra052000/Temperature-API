import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "./Temperature.css"

function Temperature() {
  var[city,setCity]=useState("Hyderabad");
    var[temprature,setTemprature]=useState([]);
    var CIT=useRef()
    
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b9b73029dec52de447364ca95e1f215`)
        .then((response)=>{
          setTemprature([response.data])
            // console.log(response);
        })
        .catch((error)=>{
console.log("error");
        })
    },[city])
   var Enter=()=>{
    // var CT=document.querySelector('.form-control').value;

    // setCity(CT);
    setCity(CIT.current.value);
   }
  return (
    <div>
      <div className='Body'>
        <h1 id='tempH'><center>TEMPERATURE<img src="./ti.png" height={"40px"} width={"40px"} alt="Error"></img></center></h1>
      <img  id="img1" src='./temp.jpg' width="400" alt="Hello"></img><br></br>
      <div className="input-group mb-3">
  <input ref={CIT} type="text" className="form-control" placeholder="Enter City name Here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={Enter}><h6>Check Temperature</h6></button>
</div>
      <center><p >Enter place name to get current Temperature status...</p></center>
      
      <div>
        {temprature.map((ele)=>{
          return(
          <div><h1>City :{ele.name}</h1>
        
          <h2>Temperature : {Math.round(ele.main.temp-273)}°C/{Math.round(ele.main.temp)}°k</h2>
          <h2>Wind-Speed : {Math.round(ele.wind.speed)} Miles/hr</h2>
          <h2>Humidity : {Math.round(ele.main.humidity)}%</h2>

          </div>
          )})
        }</div>
      </div>
      
    </div>
  )
}

export default Temperature;