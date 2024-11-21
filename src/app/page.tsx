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

              import sac from "./assets/SAC.png";
              import news from "./assets/NEWS.png";
              import curriculo from "./assets/CURRICULO.png";

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


              {/* Seção de Vídeo do YouTube */}
              <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                  <h2 className="text-4xl font-bold mb-8">Veja Nosso Último Vídeo</h2>
                  {/* Vídeo do YouTube */}
                  <div className="w-full lg:w-2/3 h-64 lg:h-96 mx-auto overflow-hidden rounded-lg shadow-lg mb-6">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/BNY-8JgSnJc"
                      title="Último Vídeo no YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  {/* Botão de Ação */}
                  <div className="mt-6">
                    <a
                      href="https://www.youtube.com/@GrupoRovemaOficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-white transition"
                    >
                      Veja Todos os Vídeos
                    </a>
                  </div>
                </div>
              </section>

                      
                    {/* Seção Antes do Footer */}
<section className="bg-gray-100 py-16">
  <div className="container mx-auto px-6 lg:px-20">
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
      {/* SAC */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={sac}
          alt="SAC"
          width={64}
          height={64}
          className="mb-4"
        />
        <a 
          href="#" 
          className="text-blue-900 font-bold hover:underline transition"
        >
          SAC
        </a>
        <p className="text-gray-600">
          Serviço de Atendimento ao Consumidor
        </p>
      </div>
      {/* Jornal Rovema */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={news}
          alt="Jornal Rovema"
          width={64}
          height={64}
          className="mb-4"
        />
        <a 
          href="#" 
          className="text-blue-900 font-bold hover:underline transition"
        >
          Acesse o Jornal Rovema
        </a>
        <p className="text-gray-600">
          E fique bem informado
        </p>
      </div>
      {/* Currículo */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={curriculo}
          alt="Currículo"
          width={64}
          height={64}
          className="mb-4"
        />
        <a 
          href="#" 
          className="text-blue-900 font-bold hover:underline transition"
        >
          Mande seu currículo
        </a>
        <p className="text-gray-600">
          Para nosso banco de talentos
        </p>
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto px-6 lg:px-20">
    {/* Top Section */}
    <div className="lg:flex lg:justify-between lg:items-center mb-12">
      {/* Logo and Tagline */}
      <div className="lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
        <Image
          src={logo}
          alt="Grupo Rovema Logo"
          width={200}
          height={80}
          className="mx-auto lg:mx-0"
        />
        <p className="text-gray-400 mt-4">
          <span className="text-yellow-400 font-semibold">
            Empresa Comprometida com a Sustentabilidade
          </span>
        </p>
      </div>

      {/* Contact Information */}
      <div className="lg:w-1/3 text-sm text-gray-400 text-center lg:text-left space-y-4">
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <svg
            className="w-5 h-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.365 3.279a5 5 0 10-8.73 0L3 21h18L16.365 3.279z"
            />
          </svg>
          <span>Av. Calama, 1383, São João Bosco - Porto Velho/RO</span>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <svg
            className="w-5 h-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v10a2 2 0 002 2h2m10-10H7"
            />
          </svg>
          <span>Telefone: +55 69 3216-9600</span>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <svg
            className="w-5 h-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 8V7a4 4 0 00-4-4H7a4 4 0 00-4 4v1m0 8v1a4 4 0 004 4h10a4 4 0 004-4v-1m-2-5l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <a
            href="mailto:contato@gruporovema.com.br"
            className="hover:text-yellow-400 transition"
          >
            contato@gruporovema.com.br
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:w-1/3 text-sm text-center lg:text-right space-y-4">
        <a
          href="#"
          className="block hover:text-yellow-400 transition"
        >
          Políticas de Privacidade
        </a>
        <a
          href="#"
          className="block hover:text-yellow-400 transition"
        >
          Registre uma Solicitação - LGPD
        </a>
        <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition">
          Definições de Cookies
        </button>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 pt-8">
      {/* Social Media */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 2.2A2.2 2.2 0 0019.8 0H4.2A2.2 2.2 0 002 2.2V19.8A2.2 2.2 0 004.2 22h15.6A2.2 2.2 0 0022 19.8V2.2zM8.2 19.2H4.8V9h3.4v10.2zm-1.7-11.6a2 2 0 110-4 2 2 0 010 4zM19.2 19.2h-3.4v-4.9c0-1.2-.4-2.1-1.5-2.1-1.2 0-1.7.8-1.7 2.1v4.9h-3.4V9h3.4v1.4c.4-.7 1.5-1.7 3.4-1.7 2.5 0 4.2 1.5 4.2 4.7v6.8z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.56a9.94 9.94 0 01-2.87.79 5 5 0 002.18-2.73 10.03 10.03 0 01-3.19 1.24 5 5 0 00-8.55 4.57A14.27 14.27 0 011.67 3.15a5 5 0 001.54 6.69 4.94 4.94 0 01-2.28-.63v.06a5 5 0 004.02 4.9 4.93 4.93 0 01-2.27.08 5.03 5.03 0 004.66 3.47 10 10 0 01-6.2 2.13A10.37 10.37 0 010 19.54a14.22 14.22 0 007.7 2.26c9.2 0 14.2-7.62 14.2-14.22v-.64A10.22 10.22 0 0024 4.56z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.4 0 12c0 5.3 3.3 9.8 8 11.4v-8H5.7v-3.4h2.3v-2.6c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.1 2.1.1v2.5h-1.5c-1.2 0-1.5.6-1.5 1.4v1.9h2.8l-.5 3.4h-2.3V24c4.8-1.6 8.1-6 8.1-11.4C24 5.4 18.6 0 12 0z" />
          </svg>
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-400">
        &copy; 2024 Grupo Rovema. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>

                  </div>
                );
              }
