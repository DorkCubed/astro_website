import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./error-page.css";
import Nav from "../components/Nav";

function ErrorPage() {
    const routererror: any = useRouteError();
    console.error(routererror);

    if (isRouteErrorResponse(routererror)) {
        return (
            <div className="error-page">
                <Nav />
                <div className="error-info">
                    <h1>{routererror.status}</h1>
                    <i>{routererror.statusText}</i>
                    {routererror.data?.message && <i>{routererror.data.message}</i>}
                </div>
            </div>
        );
    } else {
        return (
            <div className="error-page">
                <Nav />
                <div className="error-info">
                    <h1>400</h1>
                    <i>Bad Request</i>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
