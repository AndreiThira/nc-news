
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesPage from './Components/ArticlesPage.jsx'
import { useState } from 'react'
import LoginPage from './Components/LoginPage.jsx'


function App() {
const [user, setUser] = useState("")

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage user={user} setUser={setUser}/>}/>
      <Route path="/articles" element={<ArticlesPage user={user} setUser={setUser}/>}/>
    </Routes>
    </>
  )
}

export default App
