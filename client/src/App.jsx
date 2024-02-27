import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Players from './components/Players'
import Player from './components/Player'
import PlayerStatus from './components/PlayerStatus'
import Nav from './components/Nav'

function App() {

  return (
    <>
     
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/players/list" element={
            <Players 
              />
          } />
          <Route path="/players/addplayer" element={
            <Player 
              />
          } />
          <Route path="/status/game/:id" element={<PlayerStatus/>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
