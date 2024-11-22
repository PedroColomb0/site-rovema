export default function Divisor() {
    return (
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h3 className="text-4xl font-extrabold tracking-wide">
            Mais de 20 Anos de Sucesso
          </h3>
          <p className="text-lg mt-2 opacity-90">
            Conquistando resultados com inovação, qualidade e confiança.
          </p>
  
          {/* Statistics */}
          <div className="mt-8 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-extrabold text-yellow-400">15</span>
              <p className="text-lg mt-2 uppercase tracking-wide">Empresas</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-extrabold text-yellow-400">30+</span>
              <p className="text-lg mt-2 uppercase tracking-wide">Prêmios</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-extrabold text-yellow-400">500+</span>
              <p className="text-lg mt-2 uppercase tracking-wide">Colaboradores</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  