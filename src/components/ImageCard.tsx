import React from "react";
import Image, { StaticImageData } from "next/image";
interface ImageCardProps {
    bannerImg: StaticImageData
}

export const ImageCard: React.FC<ImageCardProps> = ({ bannerImg }) => {
    return (
        <div className=" dark:bg-gray-800 flex justify-center">
            <div className="relative h-48 w-[12rem]  flex-justify-center overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="absolute p-14 inset-0 transition-transform duration-300 transform hover:scale-105">
                    <Image src={bannerImg} alt="Social Media Banner" layout="fill" />
                </div>
            </div>
        </div>
    );
};


