import { content } from "../configs/content";
import TrainingSchedule from "./TrainingSchedule";
import InstructorProfile from "./InstructorProfile"; // New import

const About = ({ language }) => {
    const langData = content[language]?.about || content["en"].about;
    const gallery = content[language]?.gallery || content["en"].gallery;
    const instructor =
        content[language]?.instructor || content["en"].instructor;

    return (
        <section id="about" className="bg-white">
            {/* About Us Section */}
            <div className="flex flex-col lg:flex-row items-center max-w-full h-auto lg:h-screen px-4 sm:px-6">
                {/* Left Side: Logo & Club Name */}
                <div className="py-5 lg:py-10 flex flex-col w-full lg:w-3/4 px-4 sm:px-6 lg:pl-12">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4">
                        <img
                            src="/logo-without-name.png"
                            alt="Logo"
                            className="w-[10vh] h-[10vh] sm:w-[12vh] sm:h-[12vh] lg:w-[15vh] lg:h-[15vh]"
                        />
                        <span className="text-orange-600 font-[Anton] text-3xl sm:text-5xl lg:text-9xl tracking-wide sm:leading-none align-middle">
                            RMIT
                        </span>
                    </div>

                    <h1 className="text-orange-600 font-extrabold leading-tight uppercase text-center lg:text-left mt-0 sm:mt-4">
                        <span className="block text-3xl sm:text-5xl lg:text-9xl font-[Anton] tracking-wide">
                            SHINSEI
                        </span>
                        <span className="block text-3xl sm:text-5xl lg:text-9xl font-[Anton] tracking-wide">
                            KENDO
                        </span>
                        <span className="block text-3xl sm:text-5xl lg:text-9xl font-[Anton] tracking-wide">
                            CLUB
                        </span>
                    </h1>
                </div>

                <div className="w-full lg:w-1/2 px-4 sm:px-6 py-4 lg:py-0 text-center lg:text-left">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black">
                        {langData.description[0]}{" "}
                        <strong>{langData.description[1]}</strong>{" "}
                        {langData.description[2]}
                        <strong>{langData.description[3]}</strong>
                    </p>
                    <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-black">
                        {langData.description[4]}{" "}
                        <strong>{langData.description[5]}</strong>{" "}
                        {langData.description[6]}
                        <strong>{langData.description[7]}</strong>{" "}
                        {langData.description[8]}
                    </p>
                </div>
            </div>

            {/* Training Schedule Section */}
            <TrainingSchedule language={language} />

            {/* Instructor Profile Section */}
            <InstructorProfile language={language} />

            {/* Instructor Highlight & Latest Updates */}
            <div className="w-full min-h-[150px] sm:min-h-[250px] md:min-h-[400px] mx-auto bg-white relative pt-4 sm:pt-1 mt-[-10px] sm:mt-[-20px]">
                {/* OUR SEONSAENGNIM (Top-Left) */}
                <h2 className="absolute top-0 left-4 sm:left-10 md:left-17 text-2xl sm:text-[40px] md:text-[100px] font-bold text-orange-500 ">
                    {instructor.description}
                </h2>
            </div>

            {/* Gallery Section */}
            <div className="w-full min-h-screen flex-shrink-0 py-10">
                <h2
                    className="text-[#EB4F0B] text-center lg:text-left ml-5 font-extrabold text-[48px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-[100%] tracking-[0.15em]"
                    style={{ fontFamily: "Anton" }}
                >
                    {gallery.title}
                </h2>

                {gallery.sections.map((section, index) => (
                    <div key={index} className="mt-10">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-8 text-center lg:text-left lg:ml-6 text-orange-500 sm:text-[2rem]">
                            {section.title}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-8xl mx-6">
                            {section.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={`/${image}`}
                                    loading="lazy"
                                    alt="Gallery Image"
                                    className="w-full h-[150px] sm:h-[200px] md:h-[220px] shadow-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
