// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import MoviePageDetails from "./pages/MoviePageDetails";
import DefaultLayout from "./layouts/DefaultLayout";


function App() {
  // const [stato, setStato] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/movies/:id" Component={MoviePageDetails}></Route>
          <Route path="/mo"></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
