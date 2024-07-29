import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";
import BannerImages from "@/components/BannerImages";
import VideoList from "@/components/VideoList";
import UIUx from "@/components/UIUx";
import PrintedMediaImages from "@/components/PrintedMediaImages";
import { DESIGN_TOOLS } from "@/contants";
import { renderIcon } from "@/components/Icons";
import Resume from "@/components/Resume";


export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="flex flex-col justify-center" >
          <div className="text-4xl text-center font-extrabold text-gray-700 dark:text-white">
            Design Tools
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 text-center">
            {DESIGN_TOOLS.map((item, idx) => {
              return (
                <div key={idx} className="pt-2 text-gray-400 dark:text-gray-400 w-full sm:w-1/2 md:w-1/6">
                  <div className=" py-2 flex justify-center">
                    <div>
                      {renderIcon({ icon: item.icon })}
                    </div>
                  </div>
                  <h3 className="text-grey-600 font-bold text-2xl">{item.proficiency}</h3>
                  <p className="mt-3">{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      <Container>
        {/* <SectionTitle
        preTitle="Nafeel"
        title=" Why should you use this landing page"
      >
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
        <div id="bio">
          <Resume />
        </div>
        <div className="text-center mt-4">
          <p className="text-lg font-bold  dark:text-white text-indigo-600">PORTFOLIO</p>
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white">My Work</h1>
        </div>
        <div>

        </div>
        <div id="banners">
          <SectionTitle
            title="Social Media Banners"
            subTitle="Capture attention and boost engagement with sleek social media banners. Ideal for promoting your brand, events, and offers."
          >
          </SectionTitle>

          {/* Printed*/}
          <BannerImages />
          <SectionTitle
            title="Printed Media Banners"
          >
          </SectionTitle>
          <PrintedMediaImages />
        </div>

        {/* UI-UX */}

        <SectionTitle
          title="UI/UX"
        >
        </SectionTitle>
        <div id="uiux" className="flex justify-evenly">
          <UIUx />
        </div>

        {/* social Media Video Marketing */}
        <div id="video">
          <SectionTitle
            title="Social Media Video Marketing" >
          </SectionTitle>
          <VideoList />
        </div >
      </Container>

    </>

  );
}
