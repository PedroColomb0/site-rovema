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
    <section
      className="relative w-full"
      style={{
        background: 'linear-gradient(135deg, #f8ca32 30%, #5981f7 100%)',
        color: '#fff',
        padding: '30px',
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-20">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {banner.title}
          </h1>
          <p className="text-lg mb-6">{banner.description}</p>
          <button className="bg-white text-[#5981f7] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#f8ca32] hover:text-white transition">
            {banner.buttonText}
          </button>
        </div>
        <div
          style={{
            height: '400px',
            width: '920px',
            borderRadius: '30px',
            overflow: 'hidden',
          }}
          className="bg-white shadow-lg relative"
        >
          <Image
            src={banner.image}
            alt={banner.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
}
