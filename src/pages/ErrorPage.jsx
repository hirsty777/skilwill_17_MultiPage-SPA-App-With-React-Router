import Style from "../styles/ErrorPage.module.css"
import {Link} from "react-router-dom"


const ErrorPage = () => {
    return (
        <div className={Style["error-page-wrapper"]}>
            <p>404</p>
            <p>Page Not Found &#128532;</p>
            <Link to={"/"} className="link-style">Return To Home Page</Link>
        </div>
    )
}

export default ErrorPage