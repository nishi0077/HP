// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "株式会社ASITIS",
      image: "/images/marketing/2.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-2",
      description: "銀座Xiaoma",
      image: "/images/marketing/3.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-3",
      description: "CyberAgent",
      image: "/images/marketing/4.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-4",
      description: "SEGA",
      image: "/images/marketing/5.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-5",
      description: "株式会社ACTLAND",
      image: "/images/marketing/6.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-6",
      description: "株式会社ReBORNGROUP",
      image: "/images/marketing/7.png",
      className: "h-24 w-auto",
    },
    {
      id: "logo-7",
      description: "小学館",
      image: "/images/marketing/8.png",
      className: "h-24 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl text-white">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            plugins={[AutoScroll({ 
              playOnInit: true,
              speed: 0.5,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: false,
            })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="mx-4 flex shrink-0 items-center justify-center min-w-[200px]">
                    {logo.image ? (
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={200}
                        height={100}
                        className={logo.className}
                        loading="lazy"
                      />
                    ) : (
                      <div className={logo.className}>
                        {logo.description}
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
