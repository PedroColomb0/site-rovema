import Image from 'next/image';
import sac from '../assets/SAC.png';
import news from '../assets/NEWS.png';
import curriculo from '../assets/CURRICULO.png';

export default function ContactLinksSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
          {[{ image: sac, title: 'SAC', description: 'Serviço de Atendimento ao Consumidor' },
            { image: news, title: 'Acesse o Jornal Rovema', description: 'E fique bem informado' },
            { image: curriculo, title: 'Mande seu currículo', description: 'Para nosso banco de talentos' }].map((link, index) => (
              <div className="flex flex-col items-center text-center" key={index}>
                <Image src={link.image} alt={link.title} width={64} height={64} className="mb-4" />
                <a href="#" className="text-blue-900 font-bold hover:underline transition">
                  {link.title}
                </a>
                <p className="text-gray-600">{link.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
