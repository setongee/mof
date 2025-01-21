import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import App from '../App';
import Home from '../pages/home/home';
import Vision from '../pages/about/vision';
import Responsibilities from '../pages/about/responsibilities';
import People from '../pages/about/people';
import Agencies from '../pages/about/agencies';
import News_Events from '../pages/news_events/News_Events';
import News_view from '../pages/news_events/news_view';
import Connect from '../pages/connect/connect';
import Authy from '../admin/authy';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>This is an Error Page</h1>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          children: [
            {
              path: "vision",
              element : <Vision/>
            },
            {
              path: "responsibilities",
              element : <Responsibilities/>
            },
            {
              path: "people",
              element : <People/>
            },
            {
              path: "agencies_directorates_units",
              element : <Agencies/>
            }
          ]
        },
        {
          path: "newsroom",
          children : [
            {
              path : ":page",
              element : <News_Events/>
            },
            {
              path : "view/:id",
              element : <News_view/>
            }
          ]
        },
        {
          path : "connect",
          element : <Connect/>
        },
        {
          path : "admin",
          children : [
            {
              path : "",
              element : <Authy/>
            },
            {
              path : ":page",
              element : <Authy/>
            }
          ]
        }
      ]
    }
  ]);

  export default router;
  
