import './App.css'
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Impact from './components/pages/Impact';
import Work from './components/pages/Work';
import Approach from './components/pages/Approach';
import About from './components/pages/About';
import Home from './components/pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/approach",
      element: <Approach/>,
    },
    {
      path: "/work",
      element: <Work/>,
    },
    {
      path: "/impact",
      element: <Impact/>,
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
