
  
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Products from './Pages/Products.jsx'
import NotFound from './Pages/NotFound.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
       {
        path: 'products',
        element: <Products />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}


