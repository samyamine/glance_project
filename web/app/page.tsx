import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Slider from "@/components/custom/slider";
import {EHorizontalDirection} from "@/lib/enums";
import HeroImages from "@/components/custom/heroImages";
import Image from "next/image";
import {
    FaCartShopping,
    FaCow,
    FaEarthEurope,
    FaHeart,
    FaLeaf,
    FaLocationDot,
    FaMinus,
    FaThumbsDown
} from "react-icons/fa6";
import MapPin from "@/components/custom/mapPin";
import FeatureText from "@/components/custom/featureText";

export default function Home() {
    return (
        <div className={`w-full max-w-[1440px] flex flex-col`}>
            {/*  Hero  */}
            <section className={`pt-36 lg:h-screen lg:pt-24 flex justify-between gap-10`}>
                <div className={`w-full lg:w-2/3 max-lg:text-center max-w-[800px] flex flex-col justify-center max-lg:items-center`}>
                    {/*  What value do I provide ?  */}
                    <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl`}>
                        Your Personalized Catalogue
                        Curated Just for You.
                    </h1>

                    {/*  How do I create it ?  */}
                    <p className={`my-10 text-gray-500`}>
                        Glance redefines shopping with tailored and creative recommendations that match your taste,
                        budget, needs, and values bringing you an exclusive experience.
                        {/*all in one exclusive experience.*/}
                    </p>

                    {/*  CTA: What should they do next ?  */}
                    <div className={`w-3/4 max-w-[800px] mt-3 mb-1 flex gap-2`}>
                        <Input type={`email`} placeholder={`Email`} className={`h-12 border-gray-300 shadow-none`} />

                        <Button className={`px-8 py-6 text-lg text-white shadow-none rounded-lg bg-gradient-to-tr from-main to-second`}>
                            Join waitlist
                        </Button>
                    </div>
                </div>

                {/*  What does it look like ?  */}
                <div className={`w-1/3 hidden lg:inline`}>
                    <HeroImages />
                </div>
            </section>

            {/*  Why should they believe it ? (company logos)  */}
            <section className={`mt-10 mb-20`}>
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
            <section className={`mt-20`}>
                <h2 className={`mb-10 text-center text-4xl font-bold`}>
                    How does Glance work ?
                </h2>

                <div className={`flex flex-col gap-10`}>
                    {/*  Interactive Curation and Selection  */}
                    <div className={`w-full py-10 flex md:justify-between max-md:flex-col gap-10`}>
                        {/*  Benefit description  */}
                        <div className={`w-full md:w-3/5`}>
                            <FeatureText
                                title={`Interactive Curation and Selection`}
                                description={`Glance learns your style, preferences, and needs through every interaction. Your personal shop is refined according to your feedbacks to help you find pieces that truly resonate with your tastes.\nYour fashion is unique so Glance makes sure it stays that way.`} />
                        </div>

                        {/* Illustration */}
                        <div className={`relative w-full max-md:max-w-[500px] md:w-2/5 h-80 max-md:left-1/2 max-md:-translate-x-1/2`}>
                            {/*  Top left pull  */}
                            <div className={`absolute top-4 left-0 2xl:left-[10%]`}>
                                <div className={`w-24 h-24 relative shadow-xl rounded-lg border-2 border-black flex items-center justify-center overflow-hidden`}>
                                    <Image src={`/clothes/top_women_3.webp`} alt={`First box`} fill={true} className={`object-cover`}/>
                                </div>

                                <div className={`p-2 rounded-full absolute right-0 -translate-y-1/2 translate-x-1/2 bg-red-300`}>
                                    <FaThumbsDown className={`text-red-950`}/>
                                </div>
                            </div>

                            {/*  Top right shoes  */}
                            <div className={`absolute top-12 right-[5%] 2xl:right-[20%]`}>
                                <div
                                    className={`w-20 h-20 relative shadow-xl rounded-lg border-2 border-black flex items-center justify-center overflow-hidden`}>
                                    <Image src={`/clothes/shoes_men_3.webp`} alt={`Second box`} fill={true}
                                           className={`object-cover`}/>
                                </div>

                                <div className={`p-2 rounded-full absolute right-0 -translate-y-1/2 translate-x-1/2 bg-amber-300`}>
                                    <FaCartShopping className={`text-amber-950`}/>
                                </div>
                            </div>

                            {/*  Pants  */}
                            <div className={`absolute bottom-8 translate-x-0 max-sm:right-5 max-md:right-28 right-0 xl:right-[10%] 2xl:right-[18%]`}>
                                <div
                                    className={`w-28 h-28 relative shadow-xl rounded-lg border-2 border-black flex items-center justify-center overflow-hidden`}>
                                    <Image src={`/clothes/jeans_women_1.webp`} alt={`Third box`} fill={true} className={`object-cover`}/>
                                </div>

                                <div className={`p-2 rounded-full absolute right-0 -translate-y-1/2 translate-x-1/2 bg-green-300`}>
                                    <FaHeart className={`text-green-950`}/>
                                </div>
                            </div>

                            {/* Center shoes */}
                            <div className={`absolute top-28 left-[33%] lg:left-[37%] max-[375px]:hidden sm:inline md:hidden lg:inline`}>
                                <div className={`w-20 h-20 relative shadow-md rounded-lg border-2 border-black flex items-center justify-center overflow-hidden`}>
                                    <Image src={`/clothes/shoes_men_1.webp`} alt={`Fourth box`} fill={true} className={`object-cover`}/>
                                </div>

                                <div className={`p-2 rounded-full absolute right-0 -translate-y-1/2 translate-x-1/2 bg-green-300`}>
                                    <FaHeart className={`text-green-950`}/>
                                </div>
                            </div>

                            {/*  Bottom dress  */}
                            <div className={`absolute bottom-4 left-[10%] lg:left-[20%]`}>
                                <div
                                    className={`w-24 h-24 relative shadow-md rounded-lg border-2 border-black flex items-center justify-center overflow-hidden`}>
                                    <Image src={`/clothes/top_women_2.webp`} alt={`Fifth box`} fill={true} className={`object-cover`}/>
                                </div>

                                <div className={`p-2 rounded-full absolute right-0 -translate-y-1/2 translate-x-1/2 bg-gray-300`}>
                                    <FaMinus className={`text-gray-950`}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Discover Original Brands & Unique Creators  */}
                    <div className={`w-full py-10 flex md:justify-between max-md:flex-col gap-10`}>
                        {/*  Benefit description  */}
                        <div className={`w-full md:w-3/5`}>
                            <FeatureText
                                title={`Discover Original Brands & Unique Creators`}
                                description={`Step beyond the mainstream. Glance brings you inspiration by handpicking looks and original creators you will hardly find anywhere else. Discover new favorites and fresh, curated styles that feel crafted just for you.`} />
                        </div>

                        {/*Illustration  */}
                        <div className={`relative w-full max-md:max-w-[500px] md:w-2/5 h-80 flex gap-5 max-md:left-1/2 max-md:-translate-x-1/2`}>
                            {/*  Card 1  */}
                            <div className={`max-md:w-1/2 w-full lg:w-1/2 h-full`}>
                                <div className={`w-full max-md:h-64 h-full lg:h-64 p-3 flex flex-col shadow-xl rounded-lg border-2 border-black bg-white`}>
                                    <p className={`font-bold text-xl`}>
                                        The Quiet Life
                                    </p>

                                    <p className={`mb-3 text-sm`}>
                                        Featured
                                    </p>

                                    <div className={`w-full relative grow rounded-md overflow-hidden`}>
                                        <Image src={`/featured/the_quiet_life_2.jpg`} alt={`Featured image 1`} fill={true} className={`object-cover`} objectPosition={`top`} />
                                    </div>
                                </div>
                            </div>

                            {/*  Card 2  */}
                            <div className={`max-md:w-1/2 w-full lg:w-1/2 h-full relative md:hidden lg:inline`}>
                                <div className={`w-full h-64 p-3 absolute bottom-0 flex flex-col shadow-xl rounded-lg border-2 border-black bg-white`}>
                                    <p className={`font-bold text-xl`}>
                                        #FR2
                                    </p>

                                    <p className={`mb-3 text-sm`}>
                                        Recommended for you
                                    </p>

                                    <div className={`w-full relative grow rounded-md overflow-hidden`}>
                                        <Image src={`/featured/fxxkingrabbits_3.jpg`} alt={`Featured image 1`} fill={true} style={{ objectFit: "cover", objectPosition: "50% 75%" }} />
                                        {/*<Image src={`/featured/fxxkingrabbits_2.jpg`} alt={`Featured image 1`} fill={true} style={{ objectFit: "cover", objectPosition: "50% 30%" }} />*/}
                                        {/*<Image src={`/featured/fxxkingrabbits_4.jpg`} alt={`Featured image 1`} fill={true} style={{ objectFit: "cover", objectPosition: "50% 40%" }} />*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Scout, Your Personal Style Assistant  */}
                    <div className={`w-full py-10 flex md:justify-between max-md:flex-col gap-10`}>
                        {/*  Benefit description  */}
                        <div className={`w-full md:w-3/5`}>
                            <FeatureText
                                title={`Scout, Your Personal Style Assistant`}
                                description={`Searching for the perfect outfit for a special occasion? Scout is here to help. From weddings to milestone moments, this intuitive style assistant finds standout pieces that make you shine.\nNo endless scrolling required.`} />
                        </div>

                        {/*  Illustration  */}
                        <div className={`relative w-full max-md:max-w-[500px] md:w-2/5 h-80 max-md:left-1/2 max-md:-translate-x-1/2 bg-orange-200`}></div>
                    </div>

                    {/*  Unlimited Choices, Global Reach  */}
                    <div className={`w-full py-10 flex md:justify-between max-md:flex-col gap-10`}>
                        {/*  Benefit description  */}
                        <div className={`w-full md:w-3/5`}>
                            <FeatureText
                                title={`Unlimited Choices, Global Reach`}
                                description={`Glance connects you with diverse inventories from trusted suppliers worldwide, so you’re never limited by stock shortages. With global delivery, it’s easy to find and access exactly what you need, when you need it.`}/>
                        </div>

                        {/*  Illustration  */}
                        <div className={`relative w-full max-md:max-w-[500px] md:w-2/5 h-36 md:h-80 max-md:left-1/2 max-md:-translate-x-1/2 flex flex-col md:justify-center items-center gap-2`}>
                            <div className={`w-full max-w-[320px] lg:w-[90%] xl:w-[70%] pl-1 pr-2 lg:pr-10 py-1 max-[400px]:translate-x-0 max-md:-translate-x-5 lg:-translate-x-5 flex gap-3 rounded-lg shadow-xl border-2 border-black overflow-hidden bg-white`}>
                                <div className={`w-20 h-full relative bg-green-300`}>
                                    <Image src={`/clothes/jacket_men_1.webp`} alt={`Tshirt men`} fill={true}
                                           objectFit={`cover`}/>
                                </div>

                                <div className={`flex flex-col justify-center`}>
                                    <div className={`flex gap-2 items-center`}>
                                        <Image src={`/flags/australia.svg`} alt={`Australian flag`} width={32}
                                               height={1}/>
                                        <p className={`font-bold`}>
                                            Australia
                                        </p>
                                    </div>

                                    <div className={`flex gap-2 items-center`}>
                                        <div className={`w-2 h-2 rounded-full bg-green-300`}>
                                            <div className={`w-2 h-2 rounded-full animate-ping bg-green-300`}></div>
                                        </div>

                                        <p className={`text-xs text-gray-500`}>
                                            Available
                                        </p>
                                    </div>

                                    <p className={`text-xs text-gray-500`}>
                                        Estimated shipping time: 5-7 days
                                    </p>
                                </div>
                            </div>

                            <div className={`w-full max-w-[320px] lg:w-[90%] xl:w-[70%] pl-1 pr-2 lg:pr-10 py-1 max-[400px]:translate-x-0 max-md:translate-x-5 lg:translate-x-5 flex gap-3 rounded-lg shadow-xl border-2 border-black overflow-hidden bg-white`}>
                                <div className={`w-20 h-full relative bg-green-300`}>
                                    <Image src={`/clothes/cap_men_1.webp`} alt={`Tshirt men`} fill={true}
                                           objectFit={`cover`}/>
                                </div>

                                <div className={`flex flex-col justify-center`}>
                                    <div className={`flex gap-2 items-center`}>
                                        <Image src={`/flags/new_zealand.svg`} alt={`New Zealand flag`} width={32}
                                               height={1}/>
                                        <p className={`font-bold`}>
                                            New Zealand
                                        </p>
                                    </div>

                                    <div className={`flex gap-2 items-center`}>
                                        <div className={`w-2 h-2 rounded-full bg-green-300`}>
                                            <div className={`w-2 h-2 rounded-full animate-ping bg-green-300`}></div>
                                        </div>

                                        <p className={`text-xs text-gray-500`}>
                                            Available
                                        </p>
                                    </div>

                                    <p className={`text-xs text-gray-500`}>
                                        Estimated shipping time: 7 days
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Fashion in Green  */}
                    <div className={`w-full mt-10 lg:pl-10 lg:pr-5 max-lg:px-5 py-5 flex max-lg:flex-col max-lg:items-center lg:justify-between lg:gap-10 bg-green-300 rounded-xl border-2 border-green-950`}>
                        {/*  Benefit description  */}
                        <div className={`w-full lg:w-3/5 lg:pt-10`}>
                            {/*  Switcher  */}
                            <div className={`mb-5 hidden lg:flex items-center gap-5`}>
                                <div className={`w-16 h-8 p-1 relative rounded-full bg-green-950`}>
                                    <div className={`w-6 h-6 absolute right-1 rounded-full bg-white`}></div>
                                </div>
                            </div>

                            <h3 className={`mb-10 flex items-center max-lg:justify-center gap-4 text-3xl font-bold text-green-950`}>
                                <FaEarthEurope/> Fashion in Green
                            </h3>
                            <p className={`text-lg text-green-950 max-lg:text-center`}>
                                At Glance, sustainability is part of our mission. Our Green Mode highlights eco-friendly
                                and
                                responsibly-made products, allowing you to make mindful choices with every purchase.
                                Glance
                                lets you track and reduce your footprint, making sustainable shopping easy.
                            </p>
                        </div>

                        {/*  Illustration  */}
                        <div className={`max-[500px]:hidden w-fit max-lg:mt-10 lg:w-2/5 h-full px-4 py-2 rounded-lg shadow-xl bg-white`}>
                            {/*  Header: Critères éco-responsables  */}
                            <div className={`w-full py-3 mb-3`}>
                                <p className={`font-bold mb-1`}>
                                    Colorful Standard - Organic Cotton Sweatshirt
                                </p>

                                <div className={`flex gap-3`}>
                                    <p className={`flex items-center gap-2 text-xs xl:text-sm`}>
                                        <FaLeaf className={`text-green-800`}/>
                                        100% Eco-Friendly Materials
                                    </p>
                                    |
                                    <p className={`flex items-center gap-2 text-xs xl:text-sm`}>
                                        <FaCow className={`text-green-800`}/>
                                        Vegan
                                    </p>
                                    |
                                    <p className={`flex items-center gap-2 text-xs xl:text-sm`}>
                                        <FaLocationDot className={`text-green-800`}/>
                                        Made in Portugal
                                    </p>
                                </div>
                            </div>

                            {/*  Image, Origine, Labels, Labels  */}
                            <div className={`pb-3 flex gap-3`}>
                                {/*  Image  */}
                                <div className={`w-48 h-48 relative bg-white rounded-lg overflow-hidden`}>
                                    <Image src={`/clothes/top_men_4.webp`} alt={`Apparel picture`} fill={true}
                                           className={`object-cover`}/>
                                </div>

                                {/*  Composition, Labels  */}
                                <div className={`w-full max-w-[300px] px-5 pb-1 flex flex-col justify-between`}>
                                    <div>
                                        <p className={`font-bold mb-1`}>
                                            Composition
                                        </p>
                                        <ul className={`ml-5 list-disc text-sm`}>
                                            <li>
                                                100% Organic Cotton
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className={`font-bold mb-1`}>
                                            Labels
                                        </p>
                                        <ul className={`ml-5 list-disc text-sm`}>
                                            <li>
                                                Standard 100 by OEKO-TEX &reg;
                                            </li>
                                            <li>
                                                Peta
                                            </li>
                                        </ul>
                                    </div>

                                    <p className={`text-xs`}>
                                        This product was made in a workshop in Portugal that complies with our <span className={`underline cursor-pointer`}>ethical charter</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  FAQ  */}
            <section className={`mt-40`}>
                <h2 className={`mb-20 text-center text-4xl font-bold`}>
                    Frequently Asked Questions
                </h2>

                <div className={`w-full sm:w-2/3 lg:w-1/2 max-w-[700px] px-3 rounded-lg bg-gray-100 relative left-1/2 -translate-x-1/2 border-[1px] border-gray-300`}>
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
                            <AccordionTrigger>How does it make recommendations ?</AccordionTrigger>
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
            <section className={`w-full my-60 h-80 relative`}>
                {/*  Background Bubbles (From left to right)  */}
                <div className={`w-72 h-72 absolute left-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-left max-xl:hidden`}></div>
                <div className={`w-52 h-52 sm:w-72 sm:h-72 absolute top-10 left-1/2 -translate-x-1/2 xl:left-[40%] bg-main mix-blend-multiply filter blur-2xl rounded-full animate-blur-center xl:animate-blur-center-xl`}></div>
                <div className={`w-72 h-72 absolute right-[20%] bg-second mix-blend-multiply filter blur-2xl rounded-full animate-blur-right max-xl:hidden`}></div>

                <div className={`relative top-1/2 -translate-y-1/2`}>
                    <h2 className={`mb-10 text-center text-4xl font-bold`}>
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
        </div>
    );
}