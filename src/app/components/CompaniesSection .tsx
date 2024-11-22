'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">Nossas Empresas</h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore as empresas que formam o Grupo Rovema. Cada uma delas representa inovação, qualidade e dedicação ao cliente.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {empresas.map((empresa, index) => (
            <SwiperSlide key={index}>
              <a
                href={empresa.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={empresa.image}
                      alt="Empresa"
                      layout="intrinsic"
                      width={200}
                      height={120}
                      objectFit="contain"
                      className="group-hover:opacity-95 transition-opacity duration-300"
                    />
                  </div>
                  {/* Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saiba Mais
                    </h3>
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
