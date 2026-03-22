import { Link } from "react-router-dom";

function Header() {


    return (
        <>
            <header className="navbar">
                <Link to="/">Home</Link>
                <Link to="/movies">Lista Film</Link>
            </header>
        </>
    )
};

export default Header;