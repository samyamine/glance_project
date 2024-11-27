"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/*  Nav Bar  */}
            <div className={`w-full h-20 md:h-24 px-4 md:px-16 lg:px-24 fixed top-0 flex justify-center z-40 bg-white`}>
                <div className={`w-full h-full max-w-[1440px] flex justify-between items-center`}>
                    <div className={`w-full md:hidden`}>
                        <div onClick={() => setIsOpen(!isOpen)} className={`w-7 h-[27px] relative cursor-pointer`}>
                            <div className={`w-7 h-[3px] absolute top-0 rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen && "transform rotate-[135deg] top-[12px]"}`}></div>
                            <div className={`w-7 h-[3px] absolute top-[12px] rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen && "transform translate-x-7 opacity-0"}`}></div>
                            <div className={`w-7 h-[3px] absolute rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? "transform rotate-[-135deg] top-[12px]" : "top-[24px]"}`}></div>
                        </div>
                    </div>
                    <Link href={`/`} className={`max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2`} onClick={closeMenu}>
                        <Image src={`/logos/logo_1.svg`} alt={`Glance`} width={180} height={1}/>
                    </Link>

                    <nav className={`max-md:hidden`}>
                        <ul className={`flex gap-3`}>
                            <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:bg-gray-100`}>
                                <Link href={`/`} className={`px-3 py-2 flex items-center`}>
                                    Home
                                </Link>
                            </li>
                            <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:bg-gray-100`}>
                                <Link href={`/about`} className={`px-3 py-2 flex items-center`}>
                                    About
                                </Link>
                            </li>
                            <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:bg-gray-100`}>
                                <Link href={`/contact`} className={`px-3 py-2 flex items-center`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Link href={`https://tally.so/r/3j0rj9`} target={"_blank"}>
                        <Button className={`px-8 py-6 text-lg shadow-none rounded-full max-md:hidden`}>
                            Join waitlist
                        </Button>
                    </Link>
                </div>
            </div>

            {/*  Drop down menu  */}
            <div className={`md:hidden w-full h-full z-30 flex flex-col fixed transition-all duration-300 ease-in-out bg-black ${isOpen ? "visible bg-opacity-60" : "invisible bg-opacity-0"}`}>
                <nav className={`w-full px-4 pb-3 absolute bg-white transition-all duration-300 ease-in-out ${isOpen ? "top-20" : "-top-[100%]"}`}>
                    <ul>
                        <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:underline underline-offset-4 active:underline`}>
                            <Link href={`/`} className={`px-3 py-2 flex items-center`} onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:underline underline-offset-4 active:underline`}>
                            <Link href={`/about`} className={`px-3 py-2 flex items-center`} onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className={`text-lg cursor-pointer rounded-lg duration-200 hover:underline underline-offset-4 active:underline`}>
                            <Link href={`/contact`} className={`px-3 py-2 flex items-center`} onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>

                        <Button className={`mt-3 px-8 py-6 text-lg shadow-none rounded-full`}>
                            Join waitlist
                        </Button>
                    </ul>
                </nav>

                <div onClick={() => setIsOpen(false)} className={`w-full flex-grow`}></div>
            </div>
        </>
    );
}
