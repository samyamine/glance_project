import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <div className={`w-full h-24 px-24 fixed top-0 flex justify-between items-center bg-white z-40`}>
            <Link href={`/`}>
                <Image src={`/logos/logo_1.svg`} alt={`Glance`} width={180} height={1} />
            </Link>

            <nav>
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
                        <Link href={`/`} className={`px-3 py-2 flex items-center`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <Button className={`px-8 py-6 text-lg shadow-none rounded-full`}>
            {/*<Button className={`px-8 py-6 text-lg shadow-none rounded-full bg-black`}>*/}
                Join waitlist
            </Button>
        </div>
    );
}
