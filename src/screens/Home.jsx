import MainNav from "@/components/menu/main-nav";
import Announcement from "../components/home/Announcement";
import Banner from "../components/home/Banner";
import BannerBottom from "../components/home/BannerBottom";
import BestDeals from "../components/home/BestDeals";
import BestSelling from "../components/home/BestSelling";
import EveryVision from "../components/home/EveryVision";
import Follow from "../components/home/Follow";
import Footer from "../components/home/Footer";
import Newsletter from "../components/home/Newsletter";
import Ordering from "../components/home/Ordering";
import PickStyle from "../components/home/PickStyle";
import Questions from "../components/home/Questions";
import ReviewSlider from "../components/home/Reviews";
import ThreeBanner from "../components/home/ThreeBanner";
import Tryon from "../components/home/Tryon";
import TwoBanner from "../components/home/TwoBanner";

export default function Home(){

    return (
        <>
            
            <Announcement/>
            <MainNav/>
            <Banner/>
            <BannerBottom/>
            <EveryVision/>
            <BestDeals/>
            <BestSelling/>
            <ThreeBanner/>
            <TwoBanner/>
            <PickStyle/>
            <Ordering/>
            <Tryon/>
            <ReviewSlider/>
            <Follow/>
            <Questions/>
            <Newsletter/>
            <Footer/>
        </>
    )
}