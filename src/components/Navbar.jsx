import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar (){
    return(
        <nav className="navbar">
            <Link to='/'>خانه</Link>
            <Link to='/products'>محصولات</Link>
            <Link to='/Contact' >تماس با ما</Link>
        </nav>
    )
}