import React, { useState, useEffect, useRef } from "react";

const agendaData = {
    "May 30th": [
        { time: "6:30 PM", activity: "Seminar begin" },
        { time: "8:30 PM", activity: "Seminar ends" },
    ],
    "May 31st": [
        { time: "8:00 AM", activity: "Check-in" },
        { time: "9:30 AM", activity: "Opening Ceremony" },
        { time: "10:00 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "4:30 PM", activity: "End of day 1" },
    ],
    "June 1st": [
        { time: "8:00 AM", activity: "Check-in" },
        { time: "9:10 AM", activity: "Day 2 Opening Speech" },
        { time: "9:15 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:45 PM", activity: "Awards and Closing Ceremony" },
    ],
};

const AgendaSection = () => {
    const dates = Object.keys(agendaData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef(null);
    const dateRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerCenter =
                containerRect.top + containerRef.current.offsetHeight / 2;

            let closestIndex = 0;
            let minDistance = Number.POSITIVE_INFINITY;

            dateRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                const rectCenter = rect.top + rect.height / 2;
                const distance = Math.abs(rectCenter - containerCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== currentIndex) {
                setCurrentIndex(closestIndex);
            }
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentIndex]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#154c9e] text-white h-full overflow-y-scroll snap-y snap-mandatory"
        >
            {/* Sticky Header */}
            <div className="sticky top-0 px-4 sm:px-4 lg:px-20 md:px-12 py-8 bg-[#154c9e] z-10">
                <div className="flex flex-col md:flex-row">
                    {/* Left: Title and Dates */}
                    <div className="flex-1 mb-10 md:mb-0">
                        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFCA5A] uppercase tracking-widest leading-tight font-['Anton'] mb-4">
                            Agenda
                        </h2>
                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6 font-['Reddit Sans']">
                            Scroll to explore the dates
                        </p>
                        <div className="space-y-2">
                            {dates.map((date, index) => (
                                <div
                                    key={date}
                                    className={`transition-all duration-300 ${
                                        index === currentIndex
                                            ? "text-white text-2xl sm:text-3xl md:text-7xl lg:text-7xl font-bold"
                                            : "text-blue-300 text-xl sm:text-2xl md:text-3xl lg:text-[3.35rem]"
                                    }`}
                                >
                                    {date.toUpperCase()}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Timeline */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="relative w-full max-w-md">
                            <div className="absolute left-13.5 top-0 h-full w-1 bg-white"></div>
                            <div className="flex flex-col gap-8 pl-12 transition-opacity duration-500">
                                {agendaData[dates[currentIndex]].map(
                                    (item, index, arr) => (
                                        <div
                                            key={index}
                                            className="relative flex items-center gap-4"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="w-4 h-4 rounded-full bg-white border-2 border-white"></div>
                                                {index !== arr.length - 1 && (
                                                    <div className="flex-1 w-px bg-white opacity-50 mt-1"></div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-lg md:text-xl font-bold">
                                                    {item.time}
                                                </div>
                                                <div className="text-sm md:text-base opacity-90">
                                                    {item.activity}
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

            {/* Scroll Triggers */}
            {dates.map((date, index) => (
                <div
                    key={date}
                    ref={(el) => (dateRefs.current[index] = el)}
                    className="h-[50vh] flex items-center justify-center snap-start"
                >
                    {/* Empty block for scroll reference */}
                </div>
            ))}
        </section>
    );
};

export default AgendaSection;
