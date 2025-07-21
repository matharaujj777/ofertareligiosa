import React from 'react';
import { Check, Star, Crown, Users } from 'lucide-react';

const PricingPackages = () => {
  const basicFeatures = [
    "35 Livros de Colorir em PDF",
    "Temas Bíblicos Variados", 
    "Acesso Vitalício",
    "Suporte por WhatsApp",
    "Garantia incondicional de 7 dias"
  ];

  const premiumBonuses = [
    {
      title: "2 Novos livros/mês (durante 12 meses)",
      originalPrice: "R$ 69/ano",
      description: "Receba conteúdo novo mensalmente com temas sazonais"
    },
    {
      title: "Vídeos de Histórias Bíblicas", 
      originalPrice: "R$ 27,00",
      description: "Complemento audiovisual para enriquecer o aprendizado"
    },
    {
      title: "15 Versículos Ilustrados",
      originalPrice: "R$ 19,00", 
      description: "Arte inspiracional para decorar e memorizar"
    },
    {
      title: "Calendário Bíblico Semanal",
      originalPrice: "R$ 35,00",
      description: "Organização cristã para toda a família"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Escolha o pacote ideal para sua família ou ministério
          </h2>
          <p className="text-xl text-gray-600">
            Conteúdo de qualidade para fortalecer a fé com criatividade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">Pacote Básico</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                A porta de entrada para momentos especiais
              </h3>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-3">R$ 47,00</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -79%
                  </span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-2">R$ 10,00</div>
                <p className="text-green-600 font-semibold">Você economiza R$ 37,00</p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              QUERO O PACOTE BÁSICO
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 border-2 border-orange-300 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-4">
                <Crown className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Pacote Premium</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                A experiência completa com bônus exclusivos
              </h3>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-3">R$ 256,00</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -93%
                  </span>
                </div>
                <div className="text-5xl font-bold text-orange-600 mb-2">R$ 17,00</div>
                <p className="text-orange-600 font-semibold">Você economiza R$ 239,00</p>
              </div>
            </div>

            {/* Included from Basic */}
            <div className="mb-6">
              <p className="text-lg font-bold text-gray-800 mb-4">TUDO DO PACOTE BÁSICO +</p>
            </div>

            {/* Premium Bonuses */}
            <div className="space-y-4 mb-8">
              {premiumBonuses.map((bonus, index) => (
                <div key={index} className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800">
                        BÔNUS {index + 1}: {bonus.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        (preço original {bonus.originalPrice})
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {bonus.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mb-4">
              QUERO O PACOTE PREMIUM
            </button>

            {/* Social proof */}
            <div className="text-center">
              <div className="inline-flex items-center text-orange-600 text-sm">
                <Users className="w-4 h-4 mr-2" />
                <span className="font-semibold">✔️ Mais de 500 famílias já escolheram este pacote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;