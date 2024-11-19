
export default function AboutPage() {
    return (
        <div className={`py-36 min-h-screen text-start`}>
            <h1 className={`mb-10 max-w-[1000px] font-bold text-4xl`}>
                About me
            </h1>

            <article className={`max-w-[700px] flex flex-col gap-10`}>
                <p>
                    Hi, I’m Samy, a computer science student with a passion for fashion and
                    innovation :)
                </p>

                <p>
                    The idea for Glance came to me as I reflected on my own experiences with online shopping. While I
                    love discovering new styles, I found the process increasingly frustrating—endless scrolling, generic
                    recommendations, and a lack of personalization. It felt outdated and disconnected from the way we
                    live today.
                </p>

                <p>
                    That’s when I realized: online shopping doesn’t have to be this way. What if we could transform the
                    experience, making it effortless, inspiring, and tailored to each individual ?
                </p>

                <p>
                    With that vision, I started the creation of a new project: Glance. Powered by cutting-edge AI,
                    Glance crafts a personalized fashion catalog for every user, helping you find pieces that truly
                    resonate with your style, values, constraints and needs. Whether you’re looking for the perfect
                    outfit for a special occasion or simply want to refresh your wardrobe, Glance is here to make
                    fashion feel personal again.
                </p>

                <p>
                    For me, Glance is more than just a platform—it’s about building a community of people who share a
                    love for individuality and a belief that technology can simplify our lives without compromising on
                    creativity or quality.
                </p>

                <p>
                    Thank you for joining me on this journey. Together, we’re reimagining online shopping and bringing
                    fashion closer to you, one curated look at a time.
                </p>

                <p>
                    Let’s reinvent the experience—because you deserve better.
                </p>

                <p className={`text-start font-bold`}>
                    Samy - Founder of Glance
                </p>
            </article>
        </div>
    );
}
