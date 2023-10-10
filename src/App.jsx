import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>     
    </>
  )
}

export default App
