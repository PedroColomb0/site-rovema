"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import correto para Swiper 8+

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner2.jpg";
import logo from "./assets/logo-grupo-rovema.png";

// Logo empresas
import rovemaEnergia from "./assets/rovema-energia.png";
import autovemaFiat from "./assets/autovema-fiat.png";
import rovemaLocadora from "./assets/autovema-fiat.png";
import madeiraSeguros from "./assets/autovema-fiat.png";
import RovemaVeiculoseMaquinas from "./assets/autovema-fiat.png";
import uzziPay from "./assets/autovema-fiat.png";
import sustenNutri from "./assets/autovema-fiat.png";
import rovemaDistribuidora from "./assets/autovema-fiat.png";
import uzziEnergy from "./assets/autovema-fiat.png";
import rovemaAgoraNegocios from "./assets/autovema-fiat.png";
import autovemaPegeout from "./assets/autovema-fiat.png";
import autovemaCitroen from "./assets/autovema-fiat.png";
import rovemaBank from "./assets/autovema-fiat.png";

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

  const empresas = [
    {
      image: rovemaEnergia,
      link: "https://www.rovemaenergia.com.br",
    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",

    },
    {
      image: autovemaFiat,
      link: "https://www.rovemaenergia.com.br",
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
            <button className="bg-white text-[#5981f7] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#f8ca32] hover:text-white transition">
              {banners[currentBanner].buttonText}
            </button>
          </div>

          {/* Imagem */}
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

      {/* Seção de Notícias */}
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

      {/* Divisor Estilizado */}
      <div className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Mais de 20 Anos de Sucesso</h3>
          <div className="mt-4 flex justify-center space-x-6">
            <div>
              <span className="text-5xl font-bold">15</span>
              <p>Empresas</p>
            </div>
            <div>
              <span className="text-5xl font-bold">30+</span>
              <p>Prêmios</p>
            </div>
            <div>
              <span className="text-5xl font-bold">500+</span>
              <p>Colaboradores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Nossas Empresas */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nossas Empresas
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30} // Espaço entre os quadrados
            slidesPerView={4} // Exibe 4 quadrados ao mesmo tempo
            slidesPerGroup={1} // Avança 1 empresa por vez
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 quadrado por vez em telas menores
              640: { slidesPerView: 2 }, // 2 quadrados por vez em telas médias
              1024: { slidesPerView: 4 }, // 4 quadrados por vez em telas grandes
            }}
          >
            {empresas.map((empresa, index) => (
              <SwiperSlide key={index}>
                <a
                  href={empresa.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-center h-40 bg-white">
                      <Image
                        src={empresa.image}
                        alt={""}
                        layout="intrinsic"
                        width={200}
                        height={120}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
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
