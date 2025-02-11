import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs.tsx";
import FestEvents from "./pages/FestEvents.tsx";
import Projects from "./pages/Projects.tsx";
import Zenith from "./components/projects/Zenith";
import JWST from "./components/projects/JWST.tsx";
import Gallery from "./pages/Gallery.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Helmet } from "react-helmet";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    { path: "/about", element: <AboutUs /> },
    {
        path: "/projects", element: <Projects />,
        children: [{ path: "zenith", element: <Zenith /> },
        { path: "jwst_image_processing", element: <JWST /> }
        ]
    },
    { path: "/blogs", element: <Blogs /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/events", element: <FestEvents /> },
]);

function App() {
    return (
        <>
            <Helmet>
                <meta name="description" content="The official website for Astro Club, Bits Pilani, Pilani Campus." />
                <meta name="keywords" content="Astro, Astronomy, Pilani, Bits Pilani, Astro Club" />
            </Helmet>
            <RouterProvider router={router} />
        </>
    );
}

export default App;