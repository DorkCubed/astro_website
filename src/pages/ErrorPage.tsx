import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./error-page.css";
import Nav from "../components/Nav";

function ErrorPage() {
    const routererror: any = useRouteError();
    if (isRouteErrorResponse(routererror)) {
        return (
            <>
                <Helmet>
                    <title>Something Went Wrong</title>
                </Helmet>
                <div className="error-page">
                    <Nav />
                    <div className="error-info">
                        <div className="error-box">
                            <h1>{routererror.status}</h1>
                            <i>{routererror.statusText}</i>
                            {routererror.data?.message && <i>{routererror.data.message}</i>}
                        </div>
                        <h2>houston, we have a problem</h2>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Helmet>
                    <title>Something Went Wrong</title>
                </Helmet>
                <div className="error-page">
                    <Nav />
                    <div className="error-info">
                        <div className="error-box">
                            <h1>400</h1>
                            <i>Bad request</i>
                        </div>
                        <h2>houston, we have a problem</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default ErrorPage;
