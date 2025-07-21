import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main guarantee section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-6">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <span className="text-2xl font-bold text-green-600">
                Garantia de 7 dias – Compra segura e sem riscos
              </span>
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              Se você não estiver satisfeito, devolvemos o valor integral. Sem burocracia.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    100% Garantido
                  </h3>
                  <p className="text-gray-600">
                    Satisfação total ou seu dinheiro de volta
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    🔐 Pagamento Seguro
                  </h3>
                  <p className="text-gray-600">
                    Transações protegidas e criptografadas
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    🛡️ SSL Protegido
                  </h3>
                  <p className="text-gray-600">
                    Seus dados estão seguros conosco
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
              <Lock className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                🔐 Pagamento Seguro
              </span>
            </div>
            
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                🛡️ SSL Protegido
              </span>
            </div>
            
            <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Garantia Total
              </span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Pronto para transformar os momentos em família?
              </h3>
              <p className="text-gray-600 mb-6">
                Junte-se a mais de 500 famílias que já escolheram nossos livros de colorir
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                COMEÇAR AGORA - COMPRA SEGURA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;