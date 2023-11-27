import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Delete from './view/Delete/Delete.jsx';
import Edit from './view/Edit/Edit.jsx';
import Home from './view/Home/Home';
import { db } from "./Mock/tasks.mock"


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home data={db} />,
  },
  
  
  {
    path: "/delete/:id",
    element: <Delete data={db}/>,
  },

  
  {
    path: "/edit/:id",
    element: <Edit data={db} />,
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
