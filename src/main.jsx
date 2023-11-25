import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home.jsx';
import Navbar from './components/navbar/navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path:"home",
      element: <Home/>
    }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
