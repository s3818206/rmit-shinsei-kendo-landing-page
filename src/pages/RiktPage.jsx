import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "../configs/content";
import { Footer, FacebookPosts } from "../components";
import "../styles/RIKT.css"; // Import your CSS file

gsap.registerPlugin(ScrollTrigger);

const agendaData = {
    "May 30th": [
        {
            time: "6:30 PM",
            activityEn: "Seminar begin",
            activityVi: "Khai mạc tập huấn",
        },
        {
            time: "8:30 PM",
            activityEn: "Seminar ends",
            activityVi: "Kết thúc tập huấn",
        },
    ],
    "May 31st": [
        { time: "8:00 AM", activityEn: "Check-in", activityVi: "Điểm danh" },
        {
            time: "9:30 AM",
            activityEn: "Opening Ceremony",
            activityVi: "Lễ khai mạc",
        },
        {
            time: "10:00 AM",
            activityEn: "Morning Matches",
            activityVi: "Các trận đấu buổi sáng",
        },
        {
            time: "12:00 PM",
            activityEn: "Lunch Break",
            activityVi: "Nghỉ trưa",
        },
        {
            time: "1:00 PM",
            activityEn: "Afternoon Matches",
            activityVi: "Các trận đấu buổi chiều",
        },
        {
            time: "4:30 PM",
            activityEn: "End of day 1",
            activityVi: "Kết thúc ngày thi đấu đầu tiên",
        },
    ],
    "June 1st": [
        { time: "8:00 AM", activityEn: "Check-in", activityVi: "Điểm danh" },
        {
            time: "9:10 AM",
            activityEn: "Day 2 Opening Speech",
            activityVi: "Phát biểu khai mạc ngày thứ hai",
        },
        {
            time: "9:15 AM",
            activityEn: "Morning Matches",
            activityVi: "Các trận đấu buổi sáng",
        },
        {
            time: "12:00 PM",
            activityEn: "Lunch Break",
            activityVi: "Nghỉ trưa",
        },
        {
            time: "1:00 PM",
            activityEn: "Afternoon Matches",
            activityVi: "Các trận đấu buổi chiều",
        },
        {
            time: "3:45 PM",
            activityEn: "Awards and Closing Ceremony",
            activityVi: "Lễ trao giải và bế mạc",
        },
    ],
};

const RiktPage = ({ language }) => {
    const timelineData =
        content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;
    const riktAbout = content[language]?.riktAbout || content["en"].riktAbout;
    const contact = content[language]?.contact || content["en"].contact;

    // Agenda states
    const dates = Object.keys(agendaData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const agendaSectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = agendaSectionRef.current;
        const totalSteps = dates.length;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=100%", // adjust scroll range here
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.min(
                        totalSteps - 1,
                        Math.floor(progress * totalSteps)
                    );
                    if (index !== currentIndex) setCurrentIndex(index);
                },
            });
        }, section);

        return () => ctx.revert();
    }, [currentIndex, dates.length]);

    return (
        <section className="bg-[#185195] text-white font-sans pt-8 sm:pt-10">
            {/* Banner */}
            <div className="relative w-full overflow-hidden">
                <img
                    src="rmit-kendo-club.png"
                    alt="Banner"
                    className="w-full h-[80%] sm:h-full md:h-full lg:h-[80%] object-contain"
                />
                <div className="absolute top-[80%] sm:top-[50%] md:top-[50%] lg:top-[70%] left-1/2 lg:left-15 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 text-center lg:text-left">
                    <a href="https://docs.google.com/document/d/1ULqZoZ235xmzRWGJfTORwiBW0JaIK44N/edit">
                        <button className="px-6 py-3 lg:px-12 lg:py-6 md:px-20 md:py-8 lg:px-28 lg:py-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-[#ffcc5c] text-black rounded-2xl shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105 reddit-sans-regular">
                            {language === "en"
                                ? `TOURNAMENT CHARTER`
                                : `ĐIỀU LỆ GIẢI ĐẤU`}
                        </button>
                    </a>
                </div>
            </div>

            {/* About */}

            <div className="flex flex-col items-start justify-center text-center px-8 pb-96 pt-10 animate-fadeIn lg:pl-[126px]">
                {/* Heading */}
                <h2 className="anton-sc-regular text-4xl md:text-7xl lg:text-8xl font-bold text-[#FFCA5A] uppercase tracking-normal mb-6 lg:text-[96px]">
                    {riktAbout.about[0]}
                </h2>

                {/* Paragraph */}
                <p className="reddit-sans-regular text-white text-lg md:text-xl lg:text-2xl lg:w-[682px] text-left leading-relaxed max-w-3xl lg:text-[24px]">
                    {riktAbout.about[1]} <strong>{riktAbout.about[2]}</strong>{" "}
                    {riktAbout.about[3]}
                    {riktAbout.about[4]}
                </p>
            </div>

            {/* Event Information */}
            <div className="w-full px-6 md:px-10 lg:px-20 py-16 lg:pl-[126px] animate-fadeIn lg:pb-96 text-white pb">
                {/* Heading full-width */}
                <h1 className="text-[#FFCA5A] anton-sc-regular text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-normal text-left mb-6 lg:mb-14">
                    {riktAbout.information[0]} {riktAbout.information[1]}
                </h1>

                {/* Content section: Info + Map */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
                    {/* Left Content: Info */}
                    <div className="md:w-3/5 space-y-8 text-white reddit-sans-regular text-xl sm:text-2xl md:text-3xl">
                        {/* Date */}
                        <div>
                            <div className="opacity-70 mb-1 text-lg lg:text-xl">
                                Date
                            </div>
                            <div className="font-bold">
                                {riktAbout.information[3]}
                            </div>
                        </div>

                        {/* Time */}
                        <div>
                            <div className="opacity-70 mb-1 text-lg lg:text-xl">
                                Time
                            </div>
                            <div className="font-bold">
                                {riktAbout.information[5]}
                            </div>
                        </div>

                        {/* Venue */}
                        <div>
                            <div className="opacity-70 mb-1 text-lg lg:text-xl">
                                Venue
                            </div>
                            <div className="font-bold whitespace-pre-line">
                                {riktAbout.information[7]}
                                {"\n"}
                                {riktAbout.information[8]}
                                {"\n"}
                                {riktAbout.information[9]}
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Map */}
                    <div className="w-full md:w-[500px] md:h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.0637546456305!2d106.6937685!3d10.729566200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srmit%20sgs!5e0!3m2!1sen!2s!4v1742901966432!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            className="w-full h-full rounded-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Agenda Section */}
            <section
                ref={agendaSectionRef}
                className="relative text-white px-6 lg:pb-96"
            >
                <div className="flex flex-col  sm:px-4 md:px-12 pt-10 pb-8 lg:pl-[126px] lg:pr-[126px]">
                    {/* Top: Title */}
                    <div className="mb-6 md:mb-8">
                        <h2 className="anton-sc-regular text-[clamp(2rem,8vw,8rem)] font-bold text-[#FFCA5A] uppercase tracking-normal leading-tight">
                            Agenda
                        </h2>
                    </div>

                    {/* Flex Container */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        {/* Row for mobile - Dates & Timeline next to each other */}
                        <div className="flex w-full">
                            {/* Left Side: Dates */}
                            <div className="flex-1 flex flex-col justify-start space-y-1 sm:space-y-2">
                                {dates.map((date, index) => (
                                    <div
                                        key={date}
                                        className={`transition-all duration-300 ${
                                            index === currentIndex
                                                ? "text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold"
                                                : "text-blue-300 text-lg sm:text-2xl md:text-3xl lg:text-[3.35rem]"
                                        }`}
                                    >
                                        {language === "en"
                                            ? date
                                            : date === "May 30th"
                                            ? "30/05"
                                            : date === "May 31st"
                                            ? "31/05"
                                            : date === "June 1st"
                                            ? "01/06"
                                            : date}
                                    </div>
                                ))}
                            </div>

                            {/* Right Side: Timeline */}
                            <div className="flex-1 flex items-start justify-center relative sm:pl-6 md:pl-12">
                                <div className="relative w-full max-w-md">
                                    {/* Timeline Line */}
                                    <div className="absolute left-1.5 md:left-8 lg:left-17.5 top-0 h-full w-[4px] bg-white rounded"></div>

                                    {/* Timeline Items */}
                                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 pl-[-20px] md:pl-16 transition-opacity duration-500">
                                        {agendaData[dates[currentIndex]].map(
                                            (item, index, arr) => (
                                                <div
                                                    key={index}
                                                    className="relative flex items-center gap-4"
                                                >
                                                    {/* Dot + Line */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-4 h-4 rounded-full bg-white border-2 border-white"></div>
                                                        {index !==
                                                            arr.length - 1 && (
                                                            <div className="flex-1 w-[2px] bg-white opacity-60 mt-1"></div>
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div>
                                                        <div className="text-base sm:text-lg md:text-xl font-bold">
                                                            {item.time}
                                                        </div>
                                                        <div className="text-sm sm:text-base md:text-lg opacity-90">
                                                            {language === "en"
                                                                ? item.activityEn
                                                                : item.activityVi}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <div className="w-full px-6 md:px-10 lg:px-20 py-16 animate-fadeIn text-white reddit-sans-regular lg:pl-[126px] lg:pr-[126px] lg:pb-96">
                {/* Heading */}
                <h2 className="text-[#FFCA5A] anton-sc-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-normal mb-10 text-left">
                    {language === "en" ? `HOW TO REGISTER` : `Cách đăng ký?`}
                </h2>

                {/* Description and deadline */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-12 text-left max-w-4xl">
                    <p className="mb-8">
                        {language === "en"
                            ? "Read the tournament charter in our registration package and follow the guide on PC / Laptop"
                            : "Đọc điều lệ giải đấu trong mẫu đăng ký và làm theo hướng dẫn trên PC / Laptop"}
                    </p>
                    <p>
                        <span className="opacity-70">
                            {language === "en"
                                ? "Registration deadline:"
                                : "Hạn chót đăng ký:"}
                        </span>
                        <br />
                        <span className="font-bold">
                            {language === "en"
                                ? "Sunday, 4th May 2025, 23:59 p.m (GMT+7)"
                                : "Chủ nhật, ngày 4 tháng 5 năm 2025, 23:59 (GMT+7)"}
                        </span>
                    </p>
                </div>

                {/* Button centered */}
                <div className="flex justify-center">
                    <a href="https://docs.google.com/document/d/1BxNh6MUfEN4eCtX5AJNHmi0npxMiFWIc20FMADJG3zM/edit?fbclid=IwY2xjawJSZoRleHRuA2FlbQIxMAABHZJwMa5y0pQeS69FhxPXA2PNByXHS114SkLwHkGYWvZD2RnJdd3SxQxPhg_aem_JC4ZikG7M6Y0Riv63_9_KQ&tab=t.0">
                        <button className="bg-[#FFCA5A] text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl px-10 md:px-14 lg:px-20 py-4 md:py-5 lg:py-6 rounded-2xl shadow-md transition hover:bg-orange-600 hover:-translate-y-1">
                            {riktData.registration.button}
                        </button>
                    </a>
                </div>
            </div>

            {/* Facebook Posts */}
            <FacebookPosts language={language} />

            {/* Contact Section */}
            <div
                id="contact"
                className="w-full max-w-xl mx-auto text-center py-12"
            >
                <p className="text-2xl lg:text-3xl font-semibold mb-6">
                    {contact.text}
                </p>
                <div className="flex justify-center gap-8 text-4xl">
                    <img
                        src="/Mail.png"
                        alt="Mail"
                        className="w-12 h-12 cursor-pointer hover:opacity-70"
                    />
                    <a
                        href="https://www.facebook.com/rmitshinsei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/facebook.png"
                            alt="Facebook"
                            className="w-12 h-12 cursor-pointer hover:opacity-70"
                        />
                    </a>
                </div>
            </div>

            {/* Wavy Effect */}
            <div>
                <img
                    src="/wavyeffect.png"
                    alt="wavy design"
                    className="w-full"
                />
            </div>

            {/* Footer */}
            <Footer language={language} />
        </section>
    );
};

export default RiktPage;
