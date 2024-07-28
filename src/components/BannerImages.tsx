import { ImageCard } from "./ImageCard"
import image_01 from "../../public/img/media/image_01.jpeg";
import image_06 from "../../public/img/media/image_02.jpeg";
import image_07 from "../../public/img/media/image_10.jpeg";

const BannerImages = () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
    <ImageCard bannerImg={image_01} />
    <ImageCard bannerImg={image_06} />
    <ImageCard bannerImg={image_07} />
</div>


export default BannerImages;