import './App.css'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar';
import Favorite from './pages/Favorite';

import {Routes, Route} from "react-router-dom"
import "../src/css/App.css";
import Home from './pages/Home';

function App() {

  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/favorites' element ={<Favorite/>}></Route>
        {/* <Route path='/' element ={<Home/>}></Route> */}

      </Routes>
    </main>
    </div>
  )
}
export default App
