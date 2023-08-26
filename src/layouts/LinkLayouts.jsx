import { useRef } from "react"
import {Link, Outlet} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const LinkLayouts = () => {
    const inputRef = useRef() 
    const navigate = useNavigate()

    const changeRoute = () => {
        navigate(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <div>
            <div className="navbar">
               <Link to={"/"} className="link-style">Home</Link>
               <Link to={"/about"}  className="link-style">About</Link>   
                <input type="text" placeholder="Enter Id To Get Facts" className="navbar-input" ref={inputRef}/>
                <button onClick={changeRoute} className="navbar-btn">Get Fact</button>
            </div>

            <Outlet />
        </div>
    )
}

export default LinkLayouts