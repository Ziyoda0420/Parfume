import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basis from './components/Basis.jsx';
import Shahri from './pages/Shahri.jsx';
import Products1 from './components/Products1.jsx';
import Products2 from './components/Products2.jsx';
import Products3 from './components/Products3.jsx';
import Products4 from './components/Products4.jsx';
import Cardabu from './components/Cardabu.jsx';
import Cardlistabu from './components/Cardlistabu.jsx';
import Loadmoreabu from './components/Loadmoreabu.jsx';
import Osnovaabu from './components/Osnovaabu.jsx';
import Services from './components/Services.jsx';
import Ansor from './components/Ansor.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Basis />,
      },
      {
        path: "/shahri",
        element: <Shahri />,
      },
      {
        path: "/product/1",
        element: <Products1 />,
      },
       {
        path: "/product/2",
        element: <Products2 />,
      },
       {
        path: "/product/3",
        element: <Products3 />,
      },
       {
        path: "/product/4",
        element: <Products4 />,
      },
      {
        path: "/cardabu",
        element: <Cardabu />,
      },
      {
        path: "/cardlistabu",
        element: <Cardlistabu />,
      },
      {
        path: "/loadmoreabu",
        element: <Loadmoreabu />,
      },
      {
        path: "/osnovaabu",
        element: <Osnovaabu/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },{
        path: "/ansor",
        element: <Ansor/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
