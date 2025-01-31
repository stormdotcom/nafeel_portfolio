import React from "react";
import Image, { StaticImageData } from "next/image";


interface ImageCardProps {
    bannerImg: StaticImageData;
}

export const WideImage: React.FC<ImageCardProps> = ({ bannerImg }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className="relative h-64 w-full overflow-hidden ">
                <div className="absolute p-14 inset-0 transition-transform duration-300 transform hover:scale-105">
                    <Image src={bannerImg} alt="Social Media Banner" layout="fill" objectFit="fit" />
                </div>
            </div>
        </div>
    );
};


