import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Explorer from './components/Explorer/Explorer';
import Footer from './components/Footer/Footer';
import Tabs from "./components/Tabs/Tabs";
import Home from './pages/Home';


const Layout = () => {
  return (
    <>
        <Navbar />
        <div className="main__content">
            <Sidebar />
            <Explorer />
            <div>
                <Tabs />
                <Outlet />
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
      { path: "/about", element: <div>About</div> },
    ]
  }
]);
 


function App() {
  return <RouterProvider router={router} />
}

export default App;
