import Image from 'next/image';
import React from 'react';
import image1 from "../../public/img/celina_01.jpg"
import image2 from "../../public/img/celina_02.jpg"
import image3 from "../../public/img/hero_page.jpg"

const UIUx = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            <div className="relative w-[200px] h-screen overflow-hidden rounded-2xl bg-gray-100">
                <Image src={image1} alt="Image_1" width={200} />
            </div>

            <div className="relative w-[200px] h-screen overflow-hidden rounded-2xl bg-gray-100">
                <Image src={image2} alt="Image_1" width={200} />
            </div>

            <div className="relative w-[200px] h-screen overflow-hidden rounded-2xl bg-gray-100">
                <Image src={image3} alt="Image_1" width={200} />
            </div>
        </div>
    )
}

export default UIUx;

