import React from 'react'
import Home from './sections/Home/Home'
import { Provider } from 'react-redux'
import { store } from './sections/Store/store'
import { Routes, Route } from 'react-router-dom'
import PdfReader from './sections/PdfReader/PdfReader'

export default function App() {
  return (
    <Provider store={store}>
      <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reader" element={<PdfReader />} />
          </Routes>
      </main>
    </Provider>
  )
}
