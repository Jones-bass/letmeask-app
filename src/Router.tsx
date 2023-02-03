import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { NewRoom } from './pages/newRoom'
import { Room } from './pages/room'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/new" element={<NewRoom />} />
      <Route path="/rooms/:id" element={<Room />} />
    </Routes>
  )
}
