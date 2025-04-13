import { useEffect } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import content from "../configs/content";
import { Footer, FAQs, About } from "../components";

export default function HomePage({ language }) {
    // Receive language from props (from App.jsx)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const scrollTo = params.get("scrollTo");
        if (scrollTo) {
            scroller.scrollTo(scrollTo, { smooth: true, duration: 300 });
        }
    }, []);

    // Check language state; if not valid, set back to "en"
    const langData =
        content[language]?.heroSection || content["en"].heroSection;

    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Hero Section */}
            <section
                id="home"
                className="relative h-[45vh] lg:h-[140vh] flex justify-center items-center bg-white"
            >
                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <img
                        src="/rmit-kendo-club.png"
                        className="w-full h-auto object-cover"
                        alt="RMIT"
                    />
                </motion.div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative top-1/4 lg:top-1/4 lg:justify-start lg:ml-15 w-full flex justify-center items-center"
                >
                    <Link
                        to="/rikt"
                        className="px-10 py-4 sm:px-8 sm:py-4 md:px-14 md:py-5 lg:px-43 lg:py-8 
                        text-sm sm:text-base md:text-xl lg:text-3xl font-bold 
                        bg-[#ffcc5c] text-gray-900 rounded-2xl shadow-lg 
                        transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                    >
                        {langData?.button}
                    </Link>
                </motion.div>
            </section>

            {/* About Section */}
            <About language={language} />

            {/* FAQs Section */}
            <div className="mb-16" id="faqs">
                <FAQs language={language} />
            </div>

            {/* Footer */}
            <Footer language={language} />
        </div>
    );
}
