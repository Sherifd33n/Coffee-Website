import menu_btn from "../assets/bx-menu.svg";
import cancel_btn from "../assets/bx-x.svg";
import { useState } from "react";

const Header = () => {
  const [linkActive, setLinkActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <header className={`header ${changeHeader && "scroll-header"}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Coffee<span>.</span>Home{" "}
        </a>

        <div
          className="nav__menu"
          id="nav-menu"
          style={{ right: menuOpened && "0" }}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={() => {
                  setMenuOpened(false);
                  setLinkActive(true);
                }}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#products"
                className="nav__link"
                style={{ color: linkActive && "white" }}
                onClick={() => {
                  setMenuOpened(false);
                  setLinkActive(true);
                }}
              >
                Products
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#place"
                className="nav__link"
                style={{ color: linkActive && "white" }}
                onClick={() => {
                  setMenuOpened(false);
                  setLinkActive(true);
                }}
              >
                Place
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#blog"
                className="nav__link"
                style={{ color: linkActive && "white" }}
                onClick={() => {
                  setMenuOpened(false);
                  setLinkActive(true);
                }}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          {!menuOpened ? (
            <img
              src={menu_btn}
              alt=""
              onClick={() => {
                setMenuOpened(true);
              }}
            />
          ) : (
            <img
              src={cancel_btn}
              alt=""
              onClick={() => {
                setMenuOpened(false);
              }}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
