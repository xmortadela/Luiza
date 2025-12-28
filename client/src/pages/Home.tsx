import { useState, useEffect } from "react";
import { X } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Minimalismo Funcional com Urgência Psicológica
 * - Estrutura ultra-limpa, sem distrações
 * - Botão fixo sempre visível para máxima conversão
 * - Indicador de status para criar urgência
 * - Performance extrema: carregamento instantâneo
 */

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // ============================================
  // CLOAKER: REDIRECIONA DESKTOP / LIBERA MOBILE
  // ============================================
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      );

    if (!isMobile) {
      window.location.href =
        "https://www.westwing.com.br/guiar/decoracao-de-natal/";
    }
  }, []);

  // ============================================
  // EDITAR AQUI: Configurações da Landing Page
  // ============================================
  const config = {
    // Título principal - EDITAR AQUI
    title: "Faço Lives Para Salvar a Minha Vó",
    
    // Subtítulo - EDITAR AQUI
    subtitle: "Leia toda a minha história e entenda por que eu decidi tomar essa atitude!",
    
    // Texto do botão fixo - EDITAR AQUI
    buttonText: "ENTRAR NA LIVE",
    
    // Texto do indicador de status - EDITAR AQUI
    statusText: "Online Agora!",
    
    // Seções de conteúdo - EDITAR AQUI
    sections: [
      {
        title: "Entenda...",
        description: "Eu me chamo Luiza e moro em Itapema no estado de Santa Catarina, sou um catarinense loirinha, baixinha de 19 anos de idade e ainda sou virgem, o ano de 2025 foi uma luta para mim, perdi meu avô em março desse ano e foi uma grande dor para mim, sempre fomos muito apegados, ele morava junto com minha vó no mesmo prédio que minha família, porém no segundo andar e nós no sexto andar, todos os dias ia me buscar as 23:50h no ponto de ônibus, sempre muito cuidado e carinhoso, sofri muito, quando ele partiu eu jurei que nunca mais ia deixar que minha família passasse por isso, perder alguém por falta de dinheiro. Depois que tudo passou, após alguns meses, eu ainda continuava na mesma, na verdade, eu não sei exatamente o que fazer para ajudar minha família com todos esses problemas financeiros, nós éramos ricos, muito bem de vida, até a fabrica de foguetes do meu avô explodir e causar uma tragédia gigantesca no Rio Grande do Sul, ele e meu pai que eram sócios foram a falência da noite para o dia, com milhões de indenizações para pagar, processos na justiça."
      },
      {
        title: "Minha Família...",
        description: "Nós sempre fomos pessoas boas, ajudamos muito em nossa cidade, os pobres os mais necessitados, toda minha família é muito amada na cidade, mas agora estamos no fundo do poço, somos pessoas honestas e meu avô e meu pai pagaram todos, tudo que precisava ser pago para deixar o nome limpo na justiça e na sociedade, são pessoas de idade que prezam por seu nome, além de usar todo dinheiro que tinham ainda tiveram que tomar emprestado com banco para pagar tudo que precisava, mas enfim, todos indenizados, por mais que não vai trazer a vida das pessoas de volta, fizemos nosso papel, foi uma tragedia, minha vó entrou em depressão, e meu avô morreu logo em seguida, acredito que foi de tanto desgosto e pressão que vinha sentindo, o que era muito feliz, da noite para o dia ficou muito triste, eu nunca pude fazer nada em relação a isso, pense bem, o que uma menina de 19 anos com a família falida consegue fazer?"
      },
      {
        title: "Tomei Uma Atitude...",
        description: "Mas aconteceu uma coisa que fez eu reagir, no dia 7 de dezembro desse ano de 2025 minha vó foi diagnosticada com câncer e precisa de uma cirurgia que o SUS não dá e o valor para fazer é 90 mil reais, eu fiquei desesperada, não vou permitir minha vó partir assim igual meu avô na desgraça eu preciso fazer algo, eu vou fazer algo, foi então que no dia 11 desse mês de dezembro de 2025, 4 dias depois eu tomei uma atitude e paguei para um rapaz criar esse site para mim poder fazer minhas lives e salvar a vida da minha vó. Faço Lives para salvar a minha vó, sou novinha, 19 anos de idade, pequeninha, loira, tenho o arco do cupido na boca bem desenhadinho, meus olhos são castanhos claros, meu pé é tamanho 34/35, sou bem bebezinha, voz fofa e doce, faço lives de pijama e com ursinhos, se você não se satisfazer vai ter um botão que pode solicitar seu dinheiro de volta, mas se você gostar eu peço que volte para ajudar a minha Vó. Vou fazer lives somente até juntar o valor da cirurgia, após eu nunca mais vou fazer isso na minha vida, é só uma atitude de socorro."
      }
    ],
    
    // Opções de ação no modal - EDITAR AQUI
    actions: [
      {
        label: "Opção 1",
        // ============================================
        // EDITAR URL AQUI: Substitua por sua URL real
        // ============================================
        url: "https://www.google.com"
      },
      {
        label: "Opção 2",
        // ============================================
        // EDITAR URL AQUI: Substitua por sua URL real
        // ============================================
        url: "https://www.google.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO SECTION - Imagem + Título
          ============================================ */}
      <section className="pt-8 pb-12 px-4 text-center">
        {/* Imagem Hero - EDITAR AQUI: Substitua por sua imagem */}
        <div className="mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 to-red-100 aspect-square max-w-xs mx-auto">
          <img
            src="https://i.ibb.co/F4TsDmjG/image-1.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {config.title}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-8 max-w-sm mx-auto">
          {config.subtitle}
        </p>
      </section>

      {/* ============================================
          CONTEÚDO PRINCIPAL - Seções
          ============================================ */}
      <section className="px-4 pb-24 space-y-8">
        {config.sections.map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </section>

      {/* ============================================
          BOTÃO FIXO NA BASE - Sempre Visível
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        {/* Indicador de Status */}
        <div className="flex items-center justify-center gap-2 pt-3 pb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-green-600">
            {config.statusText}
          </span>
        </div>

        {/* Botão de Ação */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-4 px-4 text-center transition-all duration-200 active:scale-95"
        >
          {config.buttonText}
        </button>
      </div>

      {/* ============================================
          MODAL DE AÇÕES - Overlay com Opções
          ============================================ */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50 animate-in fade-in">
          <div className="w-full bg-white rounded-t-2xl p-6 space-y-4 animate-in slide-in-from-bottom">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Título do Modal */}
            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              Escolha uma opção
            </h3>

            {/* Botões de Ação */}
            <div className="space-y-3">
              {config.actions.map((action, index) => (
                <a
                  key={index}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-4 px-4 rounded-lg text-center transition-all duration-200 active:scale-95"
                >
                  {action.label}
                </a>
              ))}
            </div>

            {/* Botão Cancelar */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
