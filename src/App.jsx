// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import MoviePageDetails from "./pages/MoviePageDetails";
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesList from "./pages/MoviesList";


function App() {
  // const [stato, setStato] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/movies" Component={MoviesList}></Route>
          <Route path="/movies/:id" Component={MoviePageDetails}></Route>
          
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
