import Image from "next/image";

export default function SuggestionCard({title, description, image, ping = false}: {title: string; description: string, image: string, ping?: boolean}) {
    return (
        <div className={`w-full h-full p-3 relative flex flex-col rounded-lg border-2 border-black bg-white`}>
            <p className={`font-bold text-xl`}>
                {title}
            </p>

            <p className={`mt-1 mb-3 text-sm`}>
                {description}
            </p>

            {/*  FIXME: Put adapted images  */}
            <div className={`w-full relative grow rounded-md overflow-hidden`}>
                <Image src={image} alt={`Featured image 1`} fill={true} className={`object-contain`} objectPosition={`center`}/>
            </div>

            <div className={`w-full mt-3 flex justify-end`}>
                <div className={`shadow-none bg-white text-black text-sm font-semibold cursor-default`}>
                    Discover all &#8594;
                </div>
            </div>

            <div className={`${!ping && "hidden"} w-4 h-4 rounded-full absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 bg-red-500`}>
                <div className={`w-full h-full rounded-full bg-red-500 animate-ping`}></div>
            </div>
        </div>
    );
}
