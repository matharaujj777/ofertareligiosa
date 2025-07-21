import React from 'react';
import { Shield, Star, Home, Heart, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-32 bg-red-500 rounded-full transform -rotate-12"></div>
        <div className="absolute top-32 left-16 w-2 h-28 bg-orange-500 rounded-full transform rotate-12"></div>
        <div className="absolute top-16 left-22 w-2 h-36 bg-yellow-500 rounded-full transform -rotate-6"></div>
        <div className="absolute top-40 left-28 w-2 h-24 bg-green-500 rounded-full transform rotate-18"></div>
        <div className="absolute top-24 left-34 w-2 h-30 bg-purple-500 rounded-full transform -rotate-15"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Column - Visual */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative pencils */}
              <div className="absolute -left-16 top-0 hidden lg:flex flex-col space-y-4">
                <div className="w-3 h-24 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-24 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-24 bg-green-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-24 bg-blue-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-24 bg-purple-500 rounded-full shadow-lg"></div>
              </div>

              {/* Main book mockup */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">LIVRO PARA COLORIR</h3>
                  <p className="text-lg text-gray-600">COM DEVOCIONAL INFANTIL</p>
                </div>
                
                {/* Book illustration mockup */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-20 bg-amber-200 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-xl">👨‍🦳</span>
                      </div>
                      <div className="w-12 h-16 bg-pink-200 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-lg">👧</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-2">
                      <span className="text-lg">👑</span>
                      <span className="text-lg">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Security bar */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">🔒 Compra 100% segura e protegida</span>
            </div>

            {/* Main title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                35 Livros de Colorir 
                <span className="text-yellow-300"> Cristãos</span> para Fortalecer a Fé das Crianças de Forma 
                <span className="text-yellow-300"> Divertida</span> e 
                <span className="text-yellow-300"> Inspiradora</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transforme momentos em família, na escola ou na igreja com atividades que unem fé, criatividade e aprendizado
              </p>
            </div>

            {/* Benefits icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center text-white">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-blue-800" />
                </div>
                <span className="text-sm font-medium">Células</span>
              </div>
              <div className="flex flex-col items-center text-white">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <Home className="w-8 h-8 text-blue-800" />
                </div>
                <span className="text-sm font-medium">Escola Dominical</span>
              </div>
              <div className="flex flex-col items-center text-white">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-blue-800" />
                </div>
                <span className="text-sm font-medium">Devocional Familiar</span>
              </div>
              <div className="flex flex-col items-center text-white">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-blue-800" />
                </div>
                <span className="text-sm font-medium">Pedagogia</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center mx-auto lg:mx-0">
              QUERO VER AS OFERTAS ESPECIAIS
              <span className="ml-2 text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;