import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {


    return (
        <>
            <header className={style.header}>
                <Link to="/">Home</Link>
                <Link to="/movies">Lista Film</Link>
            </header>
        </>
    )
};

export default Header;