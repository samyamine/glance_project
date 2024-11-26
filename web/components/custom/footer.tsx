import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <div className={`w-full px-4 md:px-16 lg:px-24 py-10 bg-black text-white flex max-sm:flex-col max-sm:gap-10 sm:justify-between items-center`}>
            <div>
                <p className={`max-sm:text-sm text-lg max-sm:text-center`}>
                    Made by <a href={`https://github.com/ouiam-ib`} className={`duration-200 underline-offset-4 hover:underline`}>Ouiam</a> & <a href={`https://github.com/samyamine`} className={`duration-200 underline-offset-4 hover:underline`}>Samy</a>
                </p>
                <nav className={`mt-3`}>
                    <ul className={`flex gap-3`}>
                        <li>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Join the team :)
                            </Link>
                        </li>
                        <p className={`sm:hidden`}>-</p>
                        <li className={`sm:hidden`}>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Twitter
                            </Link>
                        </li>
                        <p className={`sm:hidden`}>-</p>
                        <li className={`sm:hidden`}>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Instagram
                            </Link>
                        </li>
                        <p className={`sm:hidden`}>-</p>
                        <li className={`sm:hidden`}>
                            <a href={`mailto:samy.amine@epita.fr`}
                               className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Email
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav className={`mt-1 max-sm:hidden`}>
                    <ul className={`flex gap-3`}>
                        <li>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <a href={`mailto:samy.amine@epita.fr`}
                               className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Email
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`flex flex-col items-center gap-2`}>
                <p className={`text-xs`}>
                    &copy; 2024 Glance
                </p>
                <Link href={`/`}>
                    <Image src={`/logos/logo_2.png`} alt={`Glance`} width={180} height={1} className={`max-sm:hidden`} />
                    <Image src={`/logos/logo_2.png`} alt={`Glance`} width={120} height={1} className={`sm:hidden`} />
                </Link>
            </div>
        </div>
    );
}
