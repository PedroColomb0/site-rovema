export default function VideoSection() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold mb-4">Veja Nosso Último Vídeo</h2>
        <p className="text-base lg:text-lg mb-8 max-w-xl mx-auto text-gray-200">
          Descubra as iniciativas e projetos do Grupo Rovema. Assista agora e inspire-se com nossas conquistas!
        </p>

        {/* Vídeo Incorporado */}
        <div className="relative w-full lg:w-2/3 mx-auto aspect-[16/9] overflow-hidden rounded-lg shadow-lg mb-8">
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
        <a
          href="https://www.youtube.com/@GrupoRovemaOficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-500 hover:text-white transition-all shadow-md"
        >
          Veja Todos os Vídeos
        </a>
      </div>
    </section>
  );
}
