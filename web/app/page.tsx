import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Home() {
    return (
        <>
            {/*  Hero  */}
            <section className={`mt-20 flex`}>
                <div className={`w-1/2`}>
                    {/*  What value do I provide ?  */}
                    <h1 className={`max-w-[1000px] mb-10 font-bold text-5xl`}>
                        Your Personalized Fashion Shop<br/>
                        Curated Just for You.
                    </h1>

                    {/*  How do I create it ?  */}
                    <p className={`mb-5`}>
                        Glance redefines shopping with tailored and creative recommendations that match your taste,
                        budget, needs, and values<br/>
                        bringing you an exclusive experience.
                        {/*all in one exclusive experience.*/}
                    </p>

                    {/*  FIXME: What does it look like ?  */}

                    {/*  CTA: What should they do next ?  */}
                    <p>
                        Get Early Access to Your Personal Shop
                    </p>

                    <div className={`w-3/4 max-w-[700px] flex gap-2`}>
                        <Input type={`email`} placeholder={`Email`} className={`h-12 border-gray-200 shadow-none`} />

                        <Button className={`px-8 py-6 text-lg shadow-none rounded-lg`}>
                            Join waitlist
                        </Button>
                    </div>
                    We'll never share your info with anyone.
                </div>
            </section>

            {/*  FIXME: Why should they believe it ? (company logos)  */}
            <section className={`mt-20 flex`}>

            </section>

            {/*  Features and benefits  */}
            {/*  How does it work precisely ? How do I bring what I've promised ?  */}
            {/*  Features: Technical specs of what this is  */}
            {/*  Benefits: What can these features actually do for me ? (take Tesla website as an example)  */}
            <section className={`mt-20`}>
                <h2 className={`mb-5 text-center text-3xl font-bold`}>
                    How does Glance work ?
                </h2>

                <h3>
                    Interactive Curation and Selection
                </h3>
                <p>
                    Glance learns your style, preferences, and needs through every interaction. Your personal shop is
                    refined according to your feedbacks to help you find pieces that truly resonate with your tastes.<br/>
                    Your fashion is unique so Glance makes sure it stays that way.
                </p>

                <h3>
                    Discover Original Brands & Unique Creators
                </h3>
                <p>
                    Step beyond the mainstream. Glance brings you inspiration by handpicking looks and
                    original creators you will hardly find anywhere else. Discover new favorites and fresh, curated
                    styles that feel crafted just for you.
                </p>

                <h3>
                    Scout, Your Personal Style Assistant
                </h3>
                <p>
                    Searching for the perfect outfit for a special occasion? Scout is here to help. From weddings to
                    milestone moments, this intuitive style assistant finds standout pieces that make you shine.<br/>
                    No endless scrolling required.
                </p>

                <h3>
                    Unlimited Choices, Global Reach
                </h3>
                <p>
                    Glance connects you with diverse inventories from trusted suppliers worldwide, so you’re never
                    limited by stock shortages. With global delivery, it’s easy to find and access exactly what you
                    need, when you need it.
                </p>

                <h3>
                    Fashion in Green
                </h3>
                <p>
                    At Glance, sustainability is part of our mission. Our Green Mode highlights eco-friendly and
                    responsibly-made products, allowing you to make mindful choices with every purchase. Glance lets
                    you track and reduce your footprint, making sustainable shopping easy.
                </p>
            </section>


            {/*  FIXME: FAQ  */}
            <section className={`mt-20`}>
                <h2 className={`mb-10 text-center text-3xl font-bold`}>
                    Frequently Asked Questions
                </h2>

                <div className={`w-1/2 max-w-[700px] px-3 rounded-lg bg-gray-100 relative left-1/2 -translate-x-1/2 border-[1px] border-gray-200`}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className={`border-none`}>
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/*  FIXME: Last Call to Action  */}
            <section className={`mt-40 w-full h-72 relative`}>
                <div className={`w-72 h-72 absolute left-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-out`}></div>
                <div className={`w-72 h-72 absolute top-10 left-[40%] bg-main mix-blend-multiply filter blur-2xl rounded-full animate-blur-in delay-1000`}></div>
                <div className={`w-72 h-72 absolute right-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-out delay-300`}></div>

                <div className={`relative top-1/2 -translate-y-1/2`}>
                    <h2 className={`mb-10 text-center text-3xl font-bold`}>
                        Join the waitlist !
                    </h2>

                    <div className={`w-3/4 max-w-[700px] p-2 border-gray-200 border-2 rounded-lg flex gap-2 relative left-1/2 -translate-x-1/2 bg-white`}>
                        <Input type={`email`} placeholder={`Email`} className={`h-12 border-gray-200 shadow-none`}/>

                        <Button className={`px-8 py-6 text-lg shadow-none rounded-lg`}>
                            Join waitlist
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}