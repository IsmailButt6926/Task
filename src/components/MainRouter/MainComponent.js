import React from 'react'

import { Routes, Route } from "react-router-dom";
import ViewData from '../../pages/ViewData';
import Data from '../Data';


const MainComponent = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/viewdata" element={<ViewData/>}/>
    </Routes>
    </>
  )
}

export default MainComponent