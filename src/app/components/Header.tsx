import Image from 'next/image';
import logo from '../assets/logo-grupo-rovema.png';

export default function Header() {
  return (
    <header className="bg-white text-blue-900 py-4 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Image src={logo} alt="Logo Grupo Rovema" width={150} height={50} />
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            {['Home', 'O Grupo', 'Atuação', 'Empresas', 'Trabalhe Conosco', 'Contato'].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
