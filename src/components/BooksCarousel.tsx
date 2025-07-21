import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BooksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      title: "Adão e Eva",
      description: "A história da criação com ilustrações de Adão, Eva, Deus e os animais do Éden",
      image: "🌳👫🐘🦁",
      preview: "Descubra a beleza da criação divina e o amor de Deus pela humanidade"
    },
    {
      title: "Pedro Discípulo", 
      description: "A jornada de Pedro com Jesus, incluindo a pesca milagrosa e lições de fé",
      image: "⛵👥🐟✨",
      preview: "Aprenda sobre fé, confiança e o chamado de Jesus para seguí-lo"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Conheça os Livros que Encantam Corações e Transformam Momentos
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Desenhos bíblicos feitos com carinho para proporcionar momentos de fé, aprendizado e união em família
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {books.map((book, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-8 m-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Book visual */}
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 mb-4">
                          <div className="text-6xl mb-4">{book.image}</div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {book.title}
                          </h3>
                        </div>
                      </div>

                      {/* Book details */}
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                          {book.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {book.description}
                        </p>
                        <p className="text-blue-600 font-semibold text-lg mb-6">
                          {book.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {books.map((_, index) => (
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

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            QUERO ACESSAR OS LIVROS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;