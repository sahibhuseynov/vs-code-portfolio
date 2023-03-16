import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Explorer from './components/Explorer/Explorer';
import Footer from './components/Footer/Footer';
import Tabs from "./components/Tabs/Tabs";
import Home from './pages/Home';
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Package from './pages/Package/Package';
import Terminal from "./components/Terminal/Terminal";


const Layout = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  return (
    <>
        <Navbar isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen}/>
        <div className="main__content">
            <Sidebar />
            <Explorer />
            <div className="page__control">
                <Tabs />
                <div className="outlet">
                <Outlet/>
                {
                  isTerminalOpen && <div className='terminal' ><Terminal isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} /></div>
                }
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/package", element: <Package /> },
    ]
  }
]);
 


function App() {
  return <RouterProvider router={router} />
}

export default App;
