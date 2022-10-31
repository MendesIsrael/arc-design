import { Routes, Route } from 'react-router-dom'
import { Page01 } from './Page01'
import { Servico } from './Servico'
import { Sobre } from './Sobre'

export default function RoutePages() {
  return (
    <Routes>
        <Route path='/' element={<Page01/>}/>
        <Route path='/serviço' element={<Servico/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
  )
}
