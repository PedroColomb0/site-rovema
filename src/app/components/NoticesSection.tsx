'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface Banner {
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
}

interface NoticesSectionProps {
  banners: Banner[];
}

export default function NoticesSection({ banners }: NoticesSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Últimas Notícias
        </h2>

        {/* Grid of Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {banner.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  {banner.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition self-start"
                >
                  Veja a notícia completa &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-blue-700 transition"
          >
            Veja todas as notícias
          </a>
        </div>
      </div>
    </section>
  );
}
