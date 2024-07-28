import { ImageCard } from "./ImageCard"
import image_01 from "../../public/img/media/image_01.jpeg";
import image_02 from "../../public/img/media/image_02.jpeg";
import image_07 from "../../public/img/media/image_10.jpeg";
import image_12 from "../../public/img/media/image_12.jpeg";
import image_09 from "../../public/img/media/image_09.jpeg";
import image_11 from "../../public/img/media/image_11.jpeg";

const BannerImages = () => <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-2 mt-4 mb-3">
    <ImageCard bannerImg={image_01} />
    <ImageCard bannerImg={image_02} />
    <ImageCard bannerImg={image_07} />
    <ImageCard bannerImg={image_12} />
    <ImageCard bannerImg={image_11} />
    <ImageCard bannerImg={image_09} />
</div>


export default BannerImages;