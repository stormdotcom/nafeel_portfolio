import React from 'react'
import image01 from "../../public/img/printed/image_01.jpeg";
import image02 from "../../public/img/printed/image_02.jpeg";
import image03 from "../../public/img/printed/image_03.jpeg";
import image04 from "../../public/img/printed/image_04.jpeg";

import { ImageCard } from './ImageCard';
import { WideImage } from './WideImage';
const PrintedMediaImages = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mt-4 mb-3">
            <WideImage bannerImg={image01} />
            <WideImage bannerImg={image02} />
            <WideImage bannerImg={image03} />
            <WideImage bannerImg={image04} />
        </div>
    )
}

export default PrintedMediaImages