import "./styles/App.scss";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { DispatcherProvider } from "./utils/DispatcherContext";
import HomePage from "./pages/Homepage";
import Creationpage from "./pages/Creationpage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Listpage from "./pages/Listpage";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className="main-content">
      <Outlet className="main-content"></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage title={"NoteThings, your task manager and TodoList"} />,
      },
      {
        path: "/list-of-notes",
        element: <Listpage title={"Your list of notes"} />
      },
      {
        path: "/creation-of-note",
        element: <Creationpage title={"Page creation"}/>
      }
    ],
  },
]);

function App() {
  return (
        <DispatcherProvider>
        <RouterProvider router={router} />
        </DispatcherProvider>
  );
}

export default App;
