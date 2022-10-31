import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <li><NavLink to="/">home</NavLink></li>
      <li><NavLink to="/serviço">serviço</NavLink></li>
      <li><NavLink to="/sobre">sobre</NavLink></li>
      <li><a href="https://linkr.bio/rcarkhidesign" target="_blank">contato</a></li>
    </nav>
  )
}
