import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav pull-right">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">More Pages <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="sidebar-left.html">Left Sidebar</a></li>
                        <li className="active"><a href="sidebar-right.html">Right Sidebar</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li><a className="btn" href="signin.html">SIGN IN / SIGN UP</a></li>
            </ul>
        </div>
    );
};

export default Navigation;