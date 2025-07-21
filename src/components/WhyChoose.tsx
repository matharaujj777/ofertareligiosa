import React from 'react';
import { CheckCircle, Star, Users, Heart } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Criados com base em valores cristãos",
      description: "Cada ilustração foi desenvolvida com cuidado para transmitir ensinamentos bíblicos de forma lúdica"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Desenvolvem fé, atenção e criatividade",
      description: "Combina diversão artística com aprendizado espiritual profundo e desenvolvimento cognitivo"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Adaptados para todas as idades (3 a 12 anos)",
      description: "Diferentes níveis de complexidade para acompanhar o crescimento e desenvolvimento das crianças"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Formato PDF: imprime quantas vezes quiser",
      description: "Acesso vitalício com liberdade total para imprimir e usar em casa, igreja ou escola"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            O que torna nossos livros tão especiais?
          </h2>
          <p className="text-xl text-gray-600">
            Descubra os benefícios únicos que fazem a diferença na educação cristã das crianças
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;