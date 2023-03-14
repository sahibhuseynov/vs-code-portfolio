import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Explorer from './components/Explorer/Explorer';
import Footer from './components/Footer/Footer';
import Tabs from "./components/Tabs/Tabs";
import Home from './pages/Home';
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';


const Layout = () => {
  return (
    <>
        <Navbar />
        <div className="main__content">
            <Sidebar />
            <Explorer />
            <div className="page__control">
                <Tabs />
                <div className="outlet">
                <Outlet/>
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
    ]
  }
]);
 


function App() {
  return <RouterProvider router={router} />
}

export default App;
