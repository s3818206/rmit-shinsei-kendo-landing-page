import { Link as ScrollLink } from "react-scroll";
import { content } from "../configs/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = ({ language }) => {
    const footer = content[language]?.footer || content["en"].footer || [];
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        if (location.pathname === "/rikt" && (sectionId === "about" || sectionId === "faqs")) {
            navigate("/", { replace: true });
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section>
            <footer className="bg-[#EB4E0B] min-h-[260px] text-white py-8 px-6 md:px-12">
                {/* Navigation Links - Centered */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-center pb-10">
                    <div className="lg:text-2xl text-xl font-normal flex flex-col items-center gap-4 sm:flex-row sm:gap-10 md:gap-20 text-center text-white">
                        
                        <button
                            onClick={() => handleNavigation("about")}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            {footer.find(item => item.about)?.about}
                        </button>

                        <ScrollLink
                            to="contact"
                            smooth
                            duration={500}
                            offset={-90}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            {footer.find(item => item.contact)?.contact}
                        </ScrollLink>

                        <a
                            href="https://maps.app.goo.gl/qEVmLVwqFDgyCqKi9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-500"
                        >
                            {footer.find(item => item.address)?.address}
                        </a>

                        <button
                            onClick={() => handleNavigation("faqs")}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            FAQs
                        </button>

                        <div className="cursor-pointer font-medium text-yellow-400 text-xl lg:text-2xl">
                            <Link
                                to="/rikt"
                                onClick={() =>
                                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                                }
                            >
                                RIKT
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Ownership Statement */}
                <div className="-mx-6 md:-mx-12 border-t border-white pt-6 mb-6 text-center">
                    <p className="mt-8 text-white lg:text-2xl text-xl">
                        RMIT Shinsei Kendo Club ©2025
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
