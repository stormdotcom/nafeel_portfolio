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

export default function Home() {
  return (
    <Container>
      <Hero />
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
      <BannerImages />

      <SectionTitle
        title="Social Media Video Marketing"
      >
      </SectionTitle>
      <VideoList />
    </Container>
  );
}
