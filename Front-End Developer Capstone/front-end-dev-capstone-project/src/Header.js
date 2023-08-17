import Logo from "./Images/Logo.svg";
import Nav from "./Nav";

function Header () {
    return (
        <header>
            <img src = {Logo} alt="Little Lemon logo"></img>
            <Nav>
                
            </Nav>
        </header>
    );
}

export default Header;