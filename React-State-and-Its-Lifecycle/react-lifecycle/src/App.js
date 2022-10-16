import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
