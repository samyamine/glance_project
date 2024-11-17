import Image from "next/image";
import {EHorizontalDirection} from "@/app/utils/enums";

export default function Slider({ direction, paths }: { direction: EHorizontalDirection, paths: Array<string>}) {

    const list = (
        <ul className={`h-16 flex ${direction === EHorizontalDirection.Left ? "animate-infinite-scroll-left" : "animate-infinite-scroll-right"}`}>
            {paths.map((path, idx) => (
                <li key={idx} className={`w-48 mx-10 relative`}>
                    <Image src={path} alt={`image`} style={{ objectFit: 'contain' }} fill={true}
                           className={`max-w-none`}/>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={`w-full inline-flex ${direction === EHorizontalDirection.Right ? "justify-end" : ""} flex-nowrap overflow-hidden`}>
            {list}
            {list}
            {list}
        </div>
    );
}
