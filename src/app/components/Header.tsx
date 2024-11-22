import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo-grupo-rovema.png';

export default function Header() {
  return (
    <header className="bg-white text-blue-900 py-4 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image src={logo} alt="Logo Grupo Rovema" width={150} height={50} />
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            {['Home', 'O Grupo', 'Atuação', 'Empresas', 'Trabalhe Conosco', 'Contato'].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-blue-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {/* Indique Certo Button */}
          <a
            href="#"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition shadow-md"
          >
            Indique Certo!
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition shadow-md"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
