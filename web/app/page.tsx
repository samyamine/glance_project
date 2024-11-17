import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Slider from "@/components/custom/slider";
import {EHorizontalDirection} from "@/app/utils/enums";
import HeroImages from "@/components/custom/heroImages";

export default function Home() {
    return (
        <>
            {/*  Hero  */}
            <section className={`w-full max-w-[1440px] h-screen pt-24 flex gap-5`}>
                <div className={`w-2/3 flex flex-col justify-center`}>
                    {/*  What value do I provide ?  */}
                    <h1 className={`max-w-[1000px] font-bold text-5xl`}>
                        Your Personalized Catalogue<br/>
                        Curated Just for You.
                    </h1>

                    {/*  How do I create it ?  */}
                    <p className={`my-10 text-gray-500`}>
                        Glance redefines shopping with tailored and creative recommendations that match your taste,
                        budget, needs, and values<br/>
                        bringing you an exclusive experience.
                        {/*all in one exclusive experience.*/}
                    </p>

                    {/*  CTA: What should they do next ?  */}
                    {/*<p className={`font-bold`}>*/}
                    {/*    Get Early Access to Your Personal Shop !*/}
                    {/*</p>*/}

                    <div className={`w-3/4 max-w-[700px] mt-3 mb-1 flex gap-2`}>
                        <Input type={`email`} placeholder={`Email`} className={`h-12 border-gray-300 shadow-none`} />

                        <Button className={`px-8 py-6 text-lg text-white shadow-none rounded-lg bg-gradient-to-tr from-main to-second`}>
                            Join waitlist
                        </Button>
                    </div>
                </div>

                {/*  FIXME: What does it look like ?  */}
                <HeroImages />
            </section>

            {/*  Why should they believe it ? (company logos)  */}
            <section className={`w-full max-w-[1440px]`}>
                <div className={`mb-10`}>
                    <Slider direction={EHorizontalDirection.Right} paths={[
                        "/logos/brands/kitri.png",
                        "/logos/brands/lacoste.png",
                        "/logos/brands/mango.png",
                        "/logos/brands/zara.png",
                        "/logos/brands/allsaints.png",
                        "/logos/brands/pull&bear.png",
                        "/logos/brands/stradivarius.png",
                    ]}/>
                </div>

                <Slider direction={EHorizontalDirection.Left} paths={[
                    "/logos/brands/asos.png",
                    "/logos/brands/ba&sh.png",
                    "/logos/brands/COS.png",
                    "/logos/brands/everlane.png",
                    "/logos/brands/collusion.png",
                    "/logos/brands/drmartens.png",
                    "/logos/brands/vans.png",
                ]} />
            </section>

            {/*  Features and benefits  */}
            {/*  How does it work precisely ? How do I bring what I've promised ?  */}
            {/*  Features: Technical specs of what this is  */}
            {/*  Benefits: What can these features actually do for me ? (take Tesla website as an example)  */}
            <section className={`w-full max-w-[1440px] mt-20`}>
                <h2 className={`mb-10 text-center text-3xl font-bold`}>
                    How does Glance work ?
                </h2>

                <div className={`flex flex-col gap-7`}>
                    <div className={`w-full bg-green-200`}>
                        {/*  Benefit description  */}
                        <div className={`w-2/3 bg-purple-300`}>
                            <h3 className={`text-xl font-bold`}>
                                Interactive Curation and Selection
                            </h3>
                            <p>
                                Glance learns your style, preferences, and needs through every interaction. Your personal
                                shop is
                                refined according to your feedbacks to help you find pieces that truly resonate with your
                                tastes.<br/>
                                Your fashion is unique so Glance makes sure it stays that way.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`w-1/3 h-full bg-orange-200`}></div>
                    </div>

                    <div className={`w-full bg-green-200`}>
                        {/*  Benefit description  */}
                        <div className={`w-2/3 bg-purple-300`}>
                            <h3 className={`text-xl font-bold`}>
                                Discover Original Brands & Unique Creators
                            </h3>
                            <p>
                                Step beyond the mainstream. Glance brings you inspiration by handpicking looks and
                                original creators you will hardly find anywhere else. Discover new favorites and fresh,
                                curated
                                styles that feel crafted just for you.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`w-1/3 h-full bg-orange-200`}></div>
                    </div>

                    <div className={`w-full bg-green-200`}>
                        {/*  Benefit description  */}
                        <div className={`w-2/3 bg-purple-300`}>
                            <h3 className={`text-xl font-bold`}>
                                Scout, Your Personal Style Assistant
                            </h3>
                            <p>
                                Searching for the perfect outfit for a special occasion? Scout is here to help. From
                                weddings to
                                milestone moments, this intuitive style assistant finds standout pieces that make you shine.<br/>
                                No endless scrolling required.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`w-1/3 h-full bg-orange-200`}></div>
                    </div>

                    <div className={`w-full bg-green-200`}>
                        {/*  Benefit description  */}
                        <div className={`w-2/3 bg-purple-300`}>
                            <h3 className={`text-xl font-bold`}>
                                Unlimited Choices, Global Reach
                            </h3>
                            <p>
                                Glance connects you with diverse inventories from trusted suppliers worldwide, so you’re
                                never
                                limited by stock shortages. With global delivery, it’s easy to find and access exactly what
                                you
                                need, when you need it.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`w-1/3 h-full bg-orange-200`}></div>
                    </div>

                    <div className={`w-full bg-green-200`}>
                        {/*  Benefit description  */}
                        <div className={`w-2/3 bg-purple-300`}>
                            <h3 className={`text-xl font-bold`}>
                                Fashion in Green
                            </h3>
                            <p>
                                At Glance, sustainability is part of our mission. Our Green Mode highlights eco-friendly and
                                responsibly-made products, allowing you to make mindful choices with every purchase. Glance
                                lets
                                you track and reduce your footprint, making sustainable shopping easy.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`w-1/3 h-full bg-orange-200`}></div>
                    </div>
                </div>

            </section>

            {/*  FAQ  */}
            <section className={`w-full max-w-[1440px] mt-20`}>
                <h2 className={`mb-10 text-center text-3xl font-bold`}>
                    Frequently Asked Questions
                </h2>

                <div
                    className={`w-1/2 max-w-[700px] px-3 rounded-lg bg-gray-100 relative left-1/2 -translate-x-1/2 border-[1px] border-gray-300`}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is Glance ?</AccordionTrigger>
                            <AccordionContent>
                                Glance is an AI-powered fashion discovery app that acts as your personal shopping
                                assistant. It learns your style preferences to recommend clothing and accessories that
                                match your tastes and budget.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does Glance work ?</AccordionTrigger>
                            <AccordionContent>
                                Glance tailors recommendations to your personal style by learning from your interactions
                                with fashion items. Whether you like, dislike, add to your wishlist, or make a purchase,
                                each action helps refine suggestions across a range of brands, from popular brands to
                                up-and-coming designers.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What makes Glance different from other shopping apps ?</AccordionTrigger>
                            <AccordionContent>
                                Unlike other apps, Glance saves you time and energy by curating a catalog unique to your
                                style, based on your preferences and interactions. It also keeps your experience fresh
                                and creative by introducing you to original brands and talented designers you may not
                                find elsewhere.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I shop directly through Glance ?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely ! Glance is designed as a one-stop platform, bringing together catalogs from
                                various stores online so you can shop conveniently from a single place.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is Glance free ?</AccordionTrigger>
                            <AccordionContent>
                                Yes, Glance is free to use. We believe in making fashion more accessible to everyone !
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>How does Glance ensure my data and preferences are secure ?</AccordionTrigger>
                            <AccordionContent>
                                Your privacy and data security are top priorities. Glance stores your information
                                securely and only uses it to improve your experience within the app. We do not share
                                your data with third parties without your consent.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7" className={`border-none`}>
                            <AccordionTrigger>How can I give feedback or suggest new features ?</AccordionTrigger>
                            <AccordionContent>
                                We’d love to hear from you ! Feel free to share your thoughts or suggest your ideas by
                                directly messaging us on Instagram (<a target={`_blank`} href={`https://www.instagram.com/samy_amn/`}>@samy_amn</a>),
                                Reddit (<a target={`_blank`} href={`https://www.reddit.com/user/Dependent_Trick9518/`}>u/Dependent_Trick9518</a>)
                                or by email at <a href={`mailto:samy.amine@epita.fr`}>samy.amine@epita.fr</a>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/*  Last Call to Action  */}
            <section className={`w-full max-w-[1440px] my-60 h-80 relative`}>
                <div className={`w-72 h-72 absolute left-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-left`}></div>
                <div className={`w-72 h-72 absolute top-10 left-[40%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-center`}></div>
                <div className={`w-72 h-72 absolute right-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-right`}></div>

                <div className={`relative top-1/2 -translate-y-1/2`}>
                    <h2 className={`mb-10 text-center text-3xl font-bold`}>
                        Ready to Transform Your Shopping Experience ?
                    </h2>

                    <div className={`w-3/4 max-w-[700px] p-1 border-gray-20 rounded-lg flex gap-2 relative left-1/2 -translate-x-1/2 bg-white`}>
                        <Input type={`email`} placeholder={`Email`}
                               className={`h-12 border-gray-300 shadow-none border-none`}/>

                        <Button className={`px-8 py-6 text-lg shadow-none rounded-lg`}>
                            Join waitlist
                        </Button>
                    </div>

                    <p className={`mt-3 text-xs text-center`}>
                        We'll never share your info with anyone.
                    </p>
                </div>
            </section>
        </>
    );
}