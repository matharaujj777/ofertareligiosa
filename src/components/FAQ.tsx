import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como recebo os livros?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download dos 35 livros em formato PDF. O acesso é imediato e vitalício."
    },
    {
      question: "Posso imprimir quantas vezes quiser?", 
      answer: "Sim! Você pode imprimir sempre que quiser, para uso pessoal ou nas atividades da igreja. Com o acesso vitalício, você tem liberdade total para usar o material."
    },
    {
      question: "Qual a faixa etária recomendada?",
      answer: "De 3 a 12 anos. Os livros foram pensados para várias idades e níveis de aprendizado, com diferentes graus de complexidade para acompanhar o desenvolvimento das crianças."
    },
    {
      question: "Como funcionam os bônus mensais do pacote Premium?",
      answer: "Você receberá 2 novos livros por mês durante 12 meses, totalizando 24 livros extras com temas bíblicos especiais, incluindo datas comemorativas e histórias sazonais."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos livros de colorir cristãos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              TIREI MINHAS DÚVIDAS, QUERO COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;