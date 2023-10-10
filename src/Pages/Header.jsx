import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;