import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Productos from './pages/Productos.jsx';
import Contacto from './pages/Contacto.jsx';
import Home from './pages/Home.jsx';
const routes = createBrowserRouter([
  {
  path: "/",
  element: <Home />
},
{
  path: "/productos",
  element: <Productos />
},
{
  path: "/contacto",
  element: <Contacto />
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
