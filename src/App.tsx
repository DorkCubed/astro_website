import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs.tsx";
import FestEvents from "./pages/FestEvents.tsx";
import Projects from "./pages/Projects.tsx";
import Zenith from "./components/projects/Zenith";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
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