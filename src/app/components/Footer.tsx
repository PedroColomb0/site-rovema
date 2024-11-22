import Image from 'next/image';
import logo from '../assets/logo-grupo-rovema.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:flex lg:justify-between lg:items-center mb-12">
          <div className="lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
            <Image src={logo} alt="Grupo Rovema Logo" width={200} height={80} className="mx-auto lg:mx-0" />
            <p className="text-gray-400 mt-4">
              <span className="text-yellow-400 font-semibold">
                Empresa Comprometida com a Sustentabilidade
              </span>
            </p>
          </div>
          <div className="lg:w-1/3 text-sm text-gray-400 text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span>Av. Calama, 1383, São João Bosco - Porto Velho/RO</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span>Telefone: +55 69 3216-9600</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <a href="mailto:contato@gruporovema.com.br" className="hover:text-yellow-400 transition">
                contato@gruporovema.com.br
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 text-sm text-center lg:text-right space-y-4">
            <a href="#" className="block hover:text-yellow-400 transition">Políticas de Privacidade</a>
            <a href="#" className="block hover:text-yellow-400 transition">LGPD</a>
            <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition">
              Definições de Cookies
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 Grupo Rovema. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
