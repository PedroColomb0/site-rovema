import Image from 'next/image';
import sac from '../assets/SAC.png';
import news from '../assets/NEWS.png';
import curriculo from '../assets/CURRICULO.png';

export default function ContactLinksSection() {
  const links = [
    {
      image: sac,
      title: 'SAC',
      description: 'Serviço de Atendimento ao Consumidor',
      href: '#',
    },
    {
      image: news,
      title: 'Acesse o Jornal Rovema',
      description: 'E fique bem informado',
      href: '#',
    },
    {
      image: curriculo,
      title: 'Mande seu currículo',
      description: 'Para nosso banco de talentos',
      href: '#',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <div
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              key={index}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <Image
                  src={link.image}
                  alt={link.title}
                  width={64}
                  height={64}
                />
              </div>
              {/* Title */}
              <a
                href={link.href}
                className="text-xl font-semibold text-blue-900 hover:underline transition"
              >
                {link.title}
              </a>
              {/* Description */}
              <p className="text-gray-600 mt-2">{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
