import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "João Santos",
      purchase: "Pacote Premium",
      content: "As crianças da célula ficaram encantadas. Material maravilhoso! Recomendo muito para outras famílias cristãs.",
      avatar: "👨",
      type: "whatsapp"
    },
    {
      name: "Sara Pereira",
      handle: "prof.sara.pereira",
      followers: "865 seguidores - 218 posts",
      content: "Uso com meus alunos na escola dominical. Eles amam! O resultado é incrível, as crianças ficam mais engajadas.",
      avatar: "👩‍🏫",
      type: "social"
    },
    {
      name: "Camila Rodrigues", 
      purchase: "Pacote Básico",
      content: "Comprei o Premium e foi um investimento incrível pra minha família. Vale muito a pena! Já imprimi vários para usar em casa.",
      avatar: "👩",
      type: "whatsapp"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mais de 300 famílias já estão usando e recomendando
          </h2>
          
          {/* Rating */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex text-yellow-400 text-2xl mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-700">
              4.9/5 - 347 avaliações
            </span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`rounded-2xl shadow-lg p-6 max-w-md mx-auto ${
                    testimonial.type === 'whatsapp' 
                      ? 'bg-green-100 border-l-4 border-green-500' 
                      : 'bg-white border-l-4 border-blue-500'
                  }`}>
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        {testimonial.purchase && (
                          <p className="text-sm text-gray-600">
                            comprou: {testimonial.purchase}
                          </p>
                        )}
                        {testimonial.handle && (
                          <div>
                            <p className="text-sm text-blue-600">@{testimonial.handle}</p>
                            <p className="text-xs text-gray-500">{testimonial.followers}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>

                    {/* Stars */}
                    <div className="flex text-yellow-400 text-sm mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;