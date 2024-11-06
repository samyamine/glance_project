import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <div className={`w-full px-24 py-10 bg-black text-white flex justify-between items-center`}>
            <div>
                <p className={`text-lg`}>
                    Made by Samy Amine
                </p>
                <nav className={`mt-3`}>
                    <ul>
                        <li>
                            <Link href={`#`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
                                Join the team :)
                            </Link>
                        </li>
                    </ul>
                </nav>

                <nav className={`mt-1`}>
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
                            <a href={`mailto:samy.amine@epita.fr`} className={`text-sm duration-200 underline-offset-4 hover:underline`}>
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
                    <Image src={`/logos/Logo_2.png`} alt={`Glance`} width={180} height={1} />
                </Link>
            </div>
        </div>
    );
}
