import { Page01 } from './components/Page01'
import RoutePages from './components/RoutePages'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import NavBar from './components/NavBar'

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutePages />
    </BrowserRouter>
  )
}