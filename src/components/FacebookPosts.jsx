import React from "react";
import content from "../configs/content";

const FacebookPosts = ({ language }) => {
    const langData =
        content[language]?.FacebookPosts || content["en"].FacebookPosts;

    const posts = [
        {
            id: 2,
            image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/485147247_122223650060231453_874071710195790293_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IUqGZa9XgasQ7kNvwE0speD&_nc_oc=AdkwpiacHdqFRUUwiBPgdXdpG1VkuG5x7UiopsPZUn1l6wlbRNdxldplRKQ0QCTPC6lxP0d52Qi4i2Nq5Wb1uWV8&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=BLIH_1P9MouKwnDxL1ou-Q&oh=00_AfGfT-nDAJIGhm1Ak-DpZpT_6u2NQJaxF6IHYoCNPYWCcQ&oe=6801EB52",
            title: "𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝗞𝗘𝗡𝗗𝗢 𝗧𝗢𝗨𝗥𝗡𝗔𝗠𝗘𝗡𝗧 𝟮𝟬𝟮𝟱 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 𝗢𝗣𝗘𝗡!",
            link: "https://www.facebook.com/share/p/18nfn4BWMz/",
        },
        {
            id: 1,
            image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/486554544_122224434584231453_7608000793104703063_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CS6W6710VzUQ7kNvwGmfPSs&_nc_oc=AdmGbgwZC0-KKs9SjTxmGHO3v_ro7pQ9F4VLkaAT7BtzABauhr-cuq2PJhgu99VQySD_dXqHyU7UQgBBXNTNf-KN&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=2hire1tRi8nzo0ExFIknWw&oh=00_AfHyGNey5BhotfeIbMzgDYlRQNblQKxCy897f_hjM38OSw&oe=6801C948",
            title: "🏅 𝗜𝗡𝗧𝗥𝗢𝗗𝗨𝗖𝗜𝗡𝗚 𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝟮𝟬𝟮𝟱 𝗦𝗛𝗜𝗡𝗣𝗔𝗡𝗖𝗛𝗢 🏅",
            link: "https://www.facebook.com/share/p/1YTKQnMGUQ/",
        },
        {
            id: 3,
            image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/486971890_122224732346231453_1732213346958709189_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cxu-dAoMMpoQ7kNvwHKyAoi&_nc_oc=AdnrEFy6I7rIb16QSGbqHl4a9aVeVY_Wa0vCq2HdTaKm7-L2SxmVA_lqT1p2KV6TDEfpgH4XXW3FqgZl-YfOF1km&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=X8txi6CMCejdgM8M-gwjmA&oh=00_AfF-efgbVIDJW4jWe1jI6yYM9dGnK1_CI3Vdcq9udJnn4w&oe=6801E45E",
            title: "𝗞𝗲𝗻𝗱𝗼 𝟭𝟬𝟭 𝗘𝗽𝗶𝘀𝗼𝗱𝗲 𝟭: 𝗪𝗵𝗮𝘁'𝘀 𝗞𝗲𝗻𝗱𝗼?",
            link: "https://www.facebook.com/share/p/16Tjuxxfxn/",
        },
    ];

    return (
        <section className="w-full min-h-[500px] sm:min-h-[700px] md:min-h-[800px] bg-blue-[185195] relative flex flex-col items-center pt-[50px] sm:pt-[80px] md:pt-[100px]">
            {/* Follow Paragraph */}
            <div className="reddit-sans-regular  w-full text-left lg:pl-25 px-6 sm:px-8 mt-6 text-white text-xl sm:text-2xl md:text-3xl leading-relaxed">
                Follow <br />
                <span className="font-bold">
                    RMIT SGS Shinsei Kendo Club
                </span>{" "}
                <br />
                on Facebook for more information
            </div>

            {/* Posts Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-9 sm:mt-10 md:mt-14 px-6 sm:px-8">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 p-6 text-center w-full max-w-[460px] sm:max-w-[420px] h-auto"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-[240px] sm:h-[260px] md:h-[280px] object-cover"
                        />
                        <div className="mt-4 text-black font-bold text-lg sm:text-2xl">
                            {post.title}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FacebookPosts;
