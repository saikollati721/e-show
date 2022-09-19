import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
import SearchIcon from "@mui/icons-material/Search";

Modal.setAppElement("#root");

const HeaderLandingWithSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo/e_show_logo.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              {/* <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div> */}
              {/* End Header */}

              <div
                className="navbar-collapse  landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="search-box-container mt-10 md-mt-10 md-mb-20">
                    <div className="search-box-wrapper">
                      <form className="search-form">
                        <input
                          type="text"
                          placeholder="Search your word"
                          className="search-box"
                        />
                      </form>
                      <SearchIcon className="search-icon" />
                    </div>
                  </div>
                  {/* <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "features",
                      "about",
                      "product",
                      "pricing",
                      "feedback",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >
                    <li className="nav-item">
                      <a href="#features" className="nav-link">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product" className="nav-link">
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </li>
                  </Scrollspy> */}
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <button className="demo-button" onClick={toggleModalOne}>
              <span>Login</span>
              <img src="images/icon/user.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLandingWithSearch;
