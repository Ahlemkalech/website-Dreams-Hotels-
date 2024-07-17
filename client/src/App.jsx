import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import axios from 'axios'
import HotelsList from "./components/HotelsList";
import ButtonAppBar from "./components/navbar";
import CreateHotel from "./components/CreateHotel";

function App() {


// console.log(data)
// console.log('all data in app',hotel);



  return ( 
     <>

<BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HotelsList />} />

          <Route path= 'create'element={<CreateHotel />} />
          

          
        </Route>
      </Routes>
    </BrowserRouter>
 
  
  </>
  )

}

export default App;
