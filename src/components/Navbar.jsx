import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { content } from "../configs/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ language, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleLanguage = () =>
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "vn" : "en"));
    const currentContent = content[language].navbar;

    const handleNavigation = (section) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => smoothScroll(section), 500);
        } else {
            smoothScroll(section);
        }
    };

    const smoothScroll = (section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const navbarHeight = 80;
        const targetPosition =
            element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const ease = easeInOutQuad(
                elapsedTime,
                startPosition,
                distance,
                duration
            );
            window.scrollTo(0, ease);

            if (elapsedTime < duration) requestAnimationFrame(animation);
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const smoothScrollToTop = () => {
        const scrollStep = -window.scrollY / 20;
        const scrollAnimation = () => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    };

    const handleRiktNavigation = () => {
        if (location.pathname !== "/rikt") {
            navigate("/rikt", { replace: true });
            setTimeout(smoothScrollToTop, 200);
        } else {
            smoothScrollToTop();
        }
    };

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 30) {
                setIsVisible(true); // Show only when at top
            } else {
                setIsVisible(false); // Hide on scroll
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-[#EB4E0B] w-full fixed top-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } py-1 sm:py-2 z-50 px-3 sm:px-4 flex items-center justify-between shadow-md`}
        >
            {/* Logo */}
            <div>
                <Link to="/" className="flex items-center cursor-pointer">
                    <img
                        src="/white-logo.svg"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        alt="Logo"
                    />
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="text-white lg:hidden cursor-pointer"
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="sm" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-4 sm:space-x-6 text-xs sm:text-sm md:text-base font-medium">
                <button
                    onClick={() => handleNavigation("home")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {currentContent.home}
                </button>
                <button
                    onClick={() => handleNavigation("about")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {language === "en" ? `About Event` : `Về Sự Kiện`}
                </button>
                <span
                    onClick={handleRiktNavigation}
                    className="relative cursor-pointer  text-yellow-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 "
                >
                    <span className="hidden lg:inline">
                        {currentContent.rikt}
                    </span>
                    <span className="inline lg:hidden">RIKT</span>
                </span>
                <button
                    onClick={() => handleNavigation("contact")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {currentContent.contact}
                </button>

                {/* Language Switch */}
                <div className="flex items-center space-x-1 text-white text-xs sm:text-sm">
                    <button
                        onClick={() => setLanguage("en")}
                        className={`font-medium transition-colors ${
                            language === "en" ? "text-yellow-300" : "text-white"
                        }`}
                    >
                        EN
                    </button>
                    <span>|</span>
                    <button
                        onClick={() => setLanguage("vn")}
                        className={`font-medium transition-colors ${
                            language === "vn" ? "text-yellow-300" : "text-white"
                        }`}
                    >
                        VN
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-[#EB4E0B] text-white py-3 shadow-md lg:hidden">
                    <ul className="flex flex-col items-center space-y-3 text-xs sm:text-sm font-medium">
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("home");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.home}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("about");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.about}
                            </button>
                        </li>
                        <li>
                            <span
                                onClick={() => {
                                    handleRiktNavigation();
                                    toggleMenu();
                                }}
                                className="relative cursor-pointer font-bold text-white before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-cyan-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300  hover:before:scale-x-100 "
                            >
                                RIKT
                            </span>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("contact");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.contact}
                            </button>
                        </li>
                        <li>
                            {/* Language Switch Mobile */}
                            <div className="flex items-center space-x-1 text-white text-xs sm:text-sm">
                                <button
                                    onClick={() => setLanguage("en")}
                                    className={`font-medium transition-colors ${
                                        language === "en"
                                            ? "text-yellow-300"
                                            : "text-white"
                                    }`}
                                >
                                    EN
                                </button>
                                <span>|</span>
                                <button
                                    onClick={() => setLanguage("vn")}
                                    className={`font-medium transition-colors ${
                                        language === "vn"
                                            ? "text-yellow-300"
                                            : "text-white"
                                    }`}
                                >
                                    VN
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
