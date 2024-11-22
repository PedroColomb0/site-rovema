import Image from 'next/image';
import logo from '../assets/logo-grupo-rovema.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12">
          {/* Logo and About */}
          <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start space-y-4">
              {/* Imagem 1 */}
              <Image
                src={logo}
                alt="Grupo Rovema Logo"
                width={200}
                height={80}
                className="mx-auto lg:mx-0"
              />
              {/* Imagem 2 */}
              <Image
                src={logo}
                alt="Grupo Rovema Logo"
                width={200}
                height={80}
                className="mx-auto lg:mx-0 opacity-80"
              />
            </div>
            <p className="mt-4 text-sm">
              Desenvolvendo soluções inovadoras para um futuro sustentável.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:w-1/3 text-sm space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-yellow-400 font-semibold uppercase text-sm">
                Contato
              </h3>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span>📍 Av. Calama, 1383, São João Bosco - Porto Velho/RO</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span>
                  📞 Telefone:{" "}
                  <a
                    href="tel:+556932169600"
                    className="hover:text-yellow-400 transition"
                  >
                    +55 69 3216-9600
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <a
                  href="mailto:contato@gruporovema.com.br"
                  className="hover:text-yellow-400 transition"
                >
                  ✉ contato@gruporovema.com.br
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-yellow-400 font-semibold uppercase text-sm">
                Links úteis
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition block"
                  >
                    Políticas de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition block"
                  >
                    LGPD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition block"
                  >
                    Definições de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Actions */}
          <div className="lg:w-1/3 text-center lg:text-right space-y-6">
            <div className="space-y-2">
              <h3 className="text-yellow-400 font-semibold uppercase text-sm">
                Siga-nos
              </h3>
              <div className="flex justify-center lg:justify-end space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <button
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition"
            >
              Definições de Cookies
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; 2024 Grupo Rovema. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
