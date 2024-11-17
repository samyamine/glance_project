'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import {getImageSamples} from "@/lib/utils";

export default function HeroImages() {
    // const numClothImages = 4;
    const [images, setImages] = useState<string[]>([
        "/clothes/shoes_men_1.webp",
        "/clothes/jeans_women_1.webp",
        "/clothes/top_women_4.webp",
        "/clothes/shoes_men_3.webp",
    ]);
    //
    // useEffect(() => {
    //     console.log("HEY");
    //     const updateImages = () => {
    //         console.log("Let's change images")
    //         const new_images = getImageSamples(numClothImages, images)
    //         setImages(new_images);
    //     };
    //
    //     // Appel initial pour éviter un src vide
    //     updateImages();
    //
    //     const interval = setInterval(updateImages, 3000);
    //
    //     console.log("IMAGES INSIDE USE EFFECT")
    //     console.log(images);
    //
    //     return () => clearInterval(interval);
    // }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <div className={`w-1/3 h-[calc(100vh-96px)] relative flex justify-between items-center gap-5`}>
            <div className={`w-1/2 h-full flex flex-col justify-center`}>
                <div className={`w-full h-2/5 -translate-y-7 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>
                    {images.map((src, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top left`} fill={true} style={{ objectFit: 'cover' }}/>
                        </div>
                    ))}
                </div>

                <div className={`w-full h-2/5 -translate-y-7 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>
                    {images.map((src, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top left`} fill={true} style={{ objectFit: 'cover' }}/>
                        </div>
                    ))}
                </div>





                {/*<div*/}
                {/*    className={`w-full h-2/5 -translate-y-7 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>*/}
                {/*    <Image*/}
                {/*        src={images[0]}*/}
                {/*        // src={`/logos/brands/allsaints.png`}*/}
                {/*        alt={`Top women`}*/}
                {/*        fill={true}*/}
                {/*        style={{ objectFit: 'cover' }}*/}
                {/*        // objectFit={`cover`}*/}
                {/*        className={`transition-transform duration-700 ease-in-out transform translate-y-[-100%] bg-red-300`}/>*/}
                {/*        /!*className={`transition ease-in-out duration-200`}/>*!/*/}
                {/*</div>*/}
                {/*<div className={`w-full h-2/5 -translate-y-7 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>*/}
                {/*    <Image*/}
                {/*        src={images[1]}*/}
                {/*        alt={`Top women`}*/}
                {/*        fill={true}*/}
                {/*        style={{ objectFit: 'cover' }}*/}
                {/*        // objectFit={`cover`}*/}
                {/*        // className={`transition-transform duration-700 ease-in-out transform translate-y-[-100%]`}/>*/}
                {/*        className={``}/>*/}
                {/*</div>*/}
            </div>
            <div className={`w-1/2 h-full flex flex-col justify-center`}>
                <div
                    className={`w-full h-2/5 translate-y-3 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>
                    {images.map((src, index) => (
                        <div key={index}
                             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top left`} fill={true} style={{objectFit: 'cover'}}/>
                        </div>
                    ))}
                </div>

                <div
                    className={`w-full h-2/5 translate-y-3 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>
                    {images.map((src, index) => (
                        <div key={index}
                             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={src} alt={`Image top left`} fill={true} style={{objectFit: 'cover'}}/>
                        </div>
                    ))}
                </div>

                {/*<div*/}
                {/*    className={`w-full h-2/5 translate-y-3 mb-5 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>*/}
                {/*    <Image*/}
                {/*        src={images[2]}*/}
                {/*        alt={`Top women`}*/}
                {/*        fill={true}*/}
                {/*        style={{objectFit: 'cover'}}*/}
                {/*        // objectFit={`cover`}*/}
                {/*        // className={`transition-transform duration-700 ease-in-out transform translate-y-[-100%]`}/>*/}
                {/*        className={``}/>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className={`w-full h-2/5 translate-y-3 relative shadow-lg rounded-lg border-2 border-black overflow-hidden`}>*/}
                {/*    <Image*/}
                {/*        src={images[3]}*/}
                {/*        alt={`Top women`}*/}
                {/*        fill={true}*/}
                {/*        style={{objectFit: 'cover'}}*/}
                {/*        // objectFit={`cover`}*/}
                {/*        // className={`transition-transform duration-700 ease-in-out transform translate-y-[-100%]`}/>*/}
                {/*        className={``}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}