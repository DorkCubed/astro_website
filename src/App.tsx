import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects.tsx";
import Nav from "./components/Nav";
import Zenith from "./components/projects/Zenith";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Nav /><h1> Landing </h1></>,
        errorElement: <h1> Error </h1>,
    },
    { path: "/about", element: <AboutUs /> },
    {
        path: "/projects", element: <Projects />,
        children: [{ path: "zenith", element: <Zenith /> }]
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;