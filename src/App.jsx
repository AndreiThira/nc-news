
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesPage from './Components/ArticlesPage.jsx'
import { useState } from 'react'
import LoginPage from './Components/LoginPage.jsx'
import SingleArticlePage from './Components/SingleArticlePage'
import CodingArticlesPage from './Components/CodingArticlesPage'
import CookingArticlesPage from './Components/CookingArticlesPage'
import FootballArticlesPage from './Components/FootballArticlesPage'


function App() {
const [user, setUser] = useState("")

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage user={user} setUser={setUser}/>}/>
      <Route path="/articles" element={<ArticlesPage user={user} setUser={setUser}/>}/>
      <Route path="/articles/:articleId" element={<SingleArticlePage  user={user} setUser={setUser}/>} />
      <Route path='/articles/coding' element={<CodingArticlesPage user={user}/>}/>
      <Route path='/articles/cooking' element={<CookingArticlesPage user={user}/>}/>
      <Route path='/articles/football' element={<FootballArticlesPage user={user}/>}/>
    </Routes>
    </>
  )
}
export default App
