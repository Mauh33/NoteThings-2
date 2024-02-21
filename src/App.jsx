import "./styles/App.scss";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Creationpage from "./pages/Creationpage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className='main-content'>
        <Outlet className='main-content'></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage title={"NoteThings, your note manager"} />,
      },
      {
        path: "/creation-of-note",
        element: <Creationpage title={"Page creation"} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
