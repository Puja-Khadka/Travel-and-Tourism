import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Services from './Components/Service/Services';
import ServiceDetails from './Components/Service/ServiceDetails';
import Packages from './Components/Package/Packages';
import PackageDetails from './Components/Package/PackageDetails';
import Contact from './Components/Contact/Contact';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path="services/details" element={<ServiceDetails />} />
    <Route path="packages" element={<Packages />} />
    <Route path="packages/details" element={<PackageDetails />} />
    <Route path='contact'  element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}/>
</StrictMode>
)
