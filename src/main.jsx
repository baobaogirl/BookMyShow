import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider, createBrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import BookTicket from './components/BookTicket/BookTicket.jsx'
import Details from './components/Details/Details.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path ="book" element = {<BookTicket />} />
        <Route path = "details" element = {<Details />}   />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
