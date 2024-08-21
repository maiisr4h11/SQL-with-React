import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Student from './Student'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App