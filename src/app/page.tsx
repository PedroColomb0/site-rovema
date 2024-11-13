"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner2.jpg";
import logo from "./assets/logo-grupo-rovema.png";

export default function HomePage() {
  const banners = [
    {
      title: "Bem-vindo ao Grupo Rovema",
      description:
        "Oferecemos soluções inovadoras em veículos, seguros, finanças e muito mais.",
      buttonText: "Saiba Mais",
      image: banner1,
    },
    {
      title: "Soluções para o Futuro",
      description:
        "Transformando o mercado com tecnologia, inovação e eficiência.",
      buttonText: "Conheça Mais",
      image: banner2,
    },
    {
      title: "Experiência e Confiança",
      description: "Mais de 20 anos oferecendo as melhores soluções.",
      buttonText: "Explore",
      image: banner3,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Barra Superior */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between px-4">
          <span>Telefone: +55 69 1234-5678</span>
          <span>E-mail: contato@gruporovema.com.br</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white text-blue-900 py-4 shadow-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Image src={logo} alt="Logo Grupo Rovema" width={150} height={50} />
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  O Grupo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Atuação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{
          background: "linear-gradient(135deg, #f8ca32 30%, #5981f7 100%)",
          color: "#fff",
          padding: "30px",
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-20">
          {/* Texto e Botão */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {banners[currentBanner].title}
            </h1>
            <p className="text-lg mb-6">{banners[currentBanner].description}</p>
            <div className="mb-4">
              <span className="text-sm font-semibold bg-white text-[#f8ca32] py-1 px-3 rounded-full inline-block">
                Oferta Limitada
              </span>
            </div>
            <button className="bg-white text-[#5981f7] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#f8ca32] hover:text-white transition">
              {banners[currentBanner].buttonText}
            </button>
          </div>

          {/* Imagem com Divisão Redonda */}
          <div
            style={{
              height: "400px",
              width: "920px",
              borderRadius: "30px",
              overflow: "hidden",
            }}
            className="bg-white shadow-lg relative"
          >
            <Image
              src={banners[currentBanner].image}
              alt={banners[currentBanner].title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Grupo Rovema. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
