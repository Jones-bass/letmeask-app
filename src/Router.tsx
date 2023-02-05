import { Route, Routes } from 'react-router-dom'
import { AdminRoom } from './pages/adminRoom'
import { Home } from './pages/home'
import { NewRoom } from './pages/newRoom'
import { Room } from './pages/room'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/new" element={<NewRoom />} />
      <Route path="/rooms/:id" element={<Room />} />
      <Route path="/admin/rooms/:id" element={<AdminRoom />} />
    </Routes>
  )
}
