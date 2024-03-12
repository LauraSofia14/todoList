import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New from '../Components/newtodo.js';
import Details from '../Components/tododetails.js';
import List from '../Components/todolist.js';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <List />,
  },

  {
    path: "/details/:id",
    element: <Details />,
  },

  {
    path: "/add",
    element: <Add />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
