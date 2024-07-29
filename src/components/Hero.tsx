import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.jpeg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 mt-3">
            <h1 className="text-4xl xs:text-md font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              DIGITAL MARKETING
              SPECIALIST
            </h1>
            <h6 className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 xs:text-md">
              SEO Analyst | UI UX Designer | PPC | Email Marketing
            </h6>
            <div className="flex flex-col sm:flex-row items-center justify-around mb-3 space-y-3 md:space-y-0 md:flex-row md:space-x-6">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-indigo-500" />
                <p className="text-gray-700 dark:text-white font-bold">nafeeln2211@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-indigo-500" />
                <p className="text-gray-700 dark:text-white font-bold">8075659792</p>
              </div>
            </div>
            <div className="mt-[12rem]">

            </div>
            <div className="flex flex-col items-start  space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.linkedin.com/in/nafeel-nazumudeen-83060b146/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md flex items-center justify-between"
              >
                <div className="pr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.73V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9.045h3.56v11.407zM5.34 7.497a2.062 2.062 0 01-2.07-2.054c0-1.134.928-2.055 2.07-2.055s2.07.921 2.07 2.055c0 1.133-.929 2.054-2.07 2.054zM20.45 20.452h-3.56v-5.639c0-1.345-.026-3.078-1.88-3.078-1.88 0-2.17 1.468-2.17 2.986v5.731h-3.56V9.045h3.42v1.558h.049c.475-.898 1.637-1.843 3.37-1.843 3.603 0 4.27 2.37 4.27 5.451v6.241z" />
                  </svg>
                </div>
                <span className="xs:text-xs text-md">Connect with Me</span>
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

    </>
  );
}


