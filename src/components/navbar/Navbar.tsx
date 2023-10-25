import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo" />
                <span>admin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                <img src="/profile.webp" alt="" />
                    <span>Jane</span>
                </div>
                <img src="/setting.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar;