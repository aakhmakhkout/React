import "./navbar.css";

const Navbar = () => {
    return <>
        <div className="navBar">
            <div className="logo">
                Portfolio
            </div>
            <div className="links">
                <div className="navLinks">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Navbar