import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs.tsx";
import FestEvents from "./pages/FestEvents.tsx";
import Projects from "./pages/Projects.tsx";
import Zenith from "./components/projects/Zenith";
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Nav /><h1> Landing </h1></>,
        errorElement: <ErrorPage />,
    },
    { path: "/about", element: <AboutUs /> },
    {
        path: "/projects", element: <Projects />,
        children: [{ path: "zenith", element: <Zenith /> }]
    },
    { path: "/blogs", element: <Blogs /> },
    { path: "/events", element: <FestEvents /> },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;