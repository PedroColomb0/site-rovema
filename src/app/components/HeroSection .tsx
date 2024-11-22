'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';

export interface Banner {
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
}

interface HeroSectionProps {
  banners: Banner[];
}

export default function HeroSection({ banners }: HeroSectionProps) {
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const banner = banners[currentBanner];

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-400 to-blue-600 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-20">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
            {banner.title}
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
            {banner.description}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition-all">
            {banner.buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 rounded-3xl overflow-hidden shadow-xl relative"
          style={{
            maxHeight: '400px',
          }}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            layout="responsive"
            width={920}
            height={400}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentBanner
                ? 'bg-white scale-110 shadow-md'
                : 'bg-gray-300 hover:bg-white'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
