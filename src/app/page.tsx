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


export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-4xl text-center font-extrabold text-gray-700 dark:text-white">
            Design Tools
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {DESIGN_TOOLS.map((item, idx) => {
              return (
                <div key={idx} className="pt-2 text-gray-400 dark:text-gray-400">
                  <div className="relative py-2">
                    {renderIcon({ icon: item.icon })}
                  </div>
                  <h3 className="text-black font-bold text-2xl">{item.proficiency}</h3>
                  <p className="mt-3">{item.title}</p>
                </div>
              )
            })}
          </div >


        </div>
      </Container>
      <Container>
        {/* <SectionTitle
        preTitle="Nafeel"
        title=" Why should you use this landing page"
      >
        Nafeel is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}



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


        {/* UI-UX */}
        <SectionTitle
          title="UI/UX"
        >
        </SectionTitle>
        <UIUx />

        {/* social Media Video Marketing */}
        <SectionTitle
          title="Social Media Video Marketing"
        >
        </SectionTitle>
        <VideoList />
      </Container>
    </>

  );
}
