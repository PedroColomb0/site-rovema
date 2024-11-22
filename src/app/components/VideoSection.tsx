export default function VideoSection() {
    return (
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Veja Nosso Último Vídeo</h2>
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
          <a
            href="https://www.youtube.com/@GrupoRovemaOficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-white transition"
          >
            Veja Todos os Vídeos
          </a>
        </div>
      </section>
    );
  }
  