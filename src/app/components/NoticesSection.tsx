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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Últimas Notícias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
