'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { StaticImageData } from 'next/image';

export interface Empresa {
    image: StaticImageData; 
    link: string;
  }

interface CompaniesSectionProps {
  empresas: Empresa[];
}

export default function CompaniesSection({ empresas }: CompaniesSectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Nossas Empresas
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {empresas.map((empresa, index) => (
            <SwiperSlide key={index}>
              <a href={empresa.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-40 bg-white">
                    <Image
                      src={empresa.image}
                      alt="Empresa"
                      layout="intrinsic"
                      width={200}
                      height={120}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
