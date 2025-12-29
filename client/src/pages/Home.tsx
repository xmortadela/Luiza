import { useState } from "react";
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
  // EDITAR AQUI: Configurações da Landing Page
  // ============================================
  const config = {
    // Título principal - EDITAR AQUI
    title: "Seu Título Principal Aqui",
    
    // Subtítulo - EDITAR AQUI
    subtitle: "Descrição breve e impactante do seu oferta",
    
    // Texto do botão fixo - EDITAR AQUI
    buttonText: "CLIQUE AQUI AGORA",
    
    // Texto do indicador de status - EDITAR AQUI
    statusText: "Online Agora!",
    
    // Seções de conteúdo - EDITAR AQUI
    sections: [
      {
        title: "Seção 1",
        description: "Coloque aqui o primeiro benefício ou descrição"
      },
      {
        title: "Seção 2",
        description: "Coloque aqui o segundo benefício ou descrição"
      },
      {
        title: "Seção 3",
        description: "Coloque aqui o terceiro benefício ou descrição"
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
