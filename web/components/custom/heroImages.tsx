'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import {getImageSamples} from "@/lib/utils";

export default function HeroImages() {
    const number_images = 4;

    // FIXME: Set images
    // const [images, setImages] = useState<Array<Array<string>>>([
    //     ["/clothes/shoes_men_1.webp"],
    //     ["/clothes/jeans_women_1.webp"],
    //     ["/clothes/top_women_4.webp"],
    //     ["/clothes/shoes_men_3.webp"],
    // ]);

    // FIXME: Finish outfits
    const images: Array<Array<string>> = [
    ["/outfits/outfit_1_1.webp", "/outfits/outfit_2_1.jpg", "/outfits/outfit_3_1.jpg", "/outfits/outfit_4_1.avif", "/outfits/outfit_5_1.jpg", "/outfits/outfit_6_1.webp", "/outfits/outfit_7_1.avif", "/outfits/outfit_8_1.webp", "/outfits/outfit_9_1.webp", "/outfits/outfit_10_1.webp"],
        ["/outfits/outfit_1_2.webp", "/outfits/outfit_2_2.webp", "/outfits/outfit_3_2.jpg", "/outfits/outfit_4_2.avif", "/outfits/outfit_5_2.jpg", "/outfits/outfit_6_2.webp", "/outfits/outfit_7_2.avif", "/outfits/outfit_8_2.webp", "/outfits/outfit_9_2.webp", "/outfits/outfit_10_2.webp"],
        ["/outfits/outfit_1_3.webp", "/outfits/outfit_2_3.webp", "/outfits/outfit_3_3.jpg", "/outfits/outfit_4_3.webp", "/outfits/outfit_5_3.jpg", "/outfits/outfit_6_3.webp", "/outfits/outfit_7_3.webp", "/outfits/outfit_8_3.webp", "/outfits/outfit_9_3.webp", "/outfits/outfit_10_3.webp"],
        ["/outfits/outfit_1_4.webp", "/outfits/outfit_2_4.jpg", "/outfits/outfit_3_4.jpg", "/outfits/outfit_4_4.webp", "/outfits/outfit_5_4.webp", "/outfits/outfit_6_4.webp", "/outfits/outfit_7_4.webp", "/outfits/outfit_8_4.webp", "/outfits/outfit_9_4.webp", "/outfits/outfit_10_4.webp"],
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     if (images[0].length === 1) {
    //         setImages(getImageSamples(number_images));
    //     }
    //
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000);
    //
    //     return () => clearInterval(interval);
    // }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images[0].length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className={`w-full h-[calc(100vh-96px)] relative flex justify-between items-center gap-5`}>
            <div className={`w-1/2 h-full flex flex-col justify-center`}>
                <div className={`w-full h-2/5 -translate-y-7 mb-5 relative shadow-xl rounded-lg border-2 border-black overflow-hidden`}>
                    {images[0].map((src, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-700 delay-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top left`} fill={true} style={{ objectFit: 'cover' }}/>
                        </div>
                    ))}
                </div>

                <div className={`w-full h-2/5 -translate-y-7 mb-5 relative shadow-xl rounded-lg border-2 border-black overflow-hidden`}>
                    {images[1].map((src, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image bottom left`} fill={true} style={{ objectFit: 'cover' }}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-1/2 h-full flex flex-col justify-center`}>
                <div
                    className={`w-full h-2/5 translate-y-3 mb-5 relative shadow-xl rounded-lg border-2 border-black overflow-hidden`}>
                    {images[2].map((src, index) => (
                        <div key={index}
                             className={`absolute inset-0 transition-opacity duration-700 delay-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top right`} fill={true} style={{objectFit: 'cover'}}/>
                        </div>
                    ))}
                </div>

                <div
                    className={`w-full h-2/5 translate-y-3 mb-5 relative shadow-xl rounded-lg border-2 border-black overflow-hidden`}>
                    {images[3].map((src, index) => (
                        <div key={index}
                             className={`absolute inset-0 transition-opacity duration-700 delay-200 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image bottom right`} fill={true} style={{objectFit: 'cover'}}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}