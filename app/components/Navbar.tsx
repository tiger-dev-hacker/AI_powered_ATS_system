import {Link} from "react-router";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className={"primary-button w-fit"}>
                Upload resume
            </Link>
        </div>
    )
}
export default Navbar;