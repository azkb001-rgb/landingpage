import { useEffect, useState, useRef } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { 
  TriangleAlert, 
  Zap, 
  BrainCircuit, 
  Star, 
  Briefcase, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  CircleCheckBig,
  Crown,
  Sparkles,
  Scissors,
  ChevronDown
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const videoRef = useRef(null);
  
  const testimonials = ["/images/1.webp", "/images/2.webp", "/images/3.webp", "/images/4.webp"];
  
  const faqData = [
    {
      question: "Isso é confiável mesmo? É o GPT-5 oficial?",
      answer: "Sim! Oferecemos acesso ao GPT-5 Pro com todas as funcionalidades avançadas. É totalmente seguro e confiável."
    },
    {
      question: "O que está incluído exatamente?",
      answer: "Você terá acesso completo ao GPT-5 Pro, com respostas ilimitadas, processamento mais rápido e recursos avançados."
    },
    {
      question: "Como funciona o acesso depois da compra?",
      answer: "Após o pagamento, você recebe as instruções de acesso imediatamente por email. É só seguir o passo a passo."
    },
    {
      question: "Funciona em todos os dispositivos?",
      answer: "Sim! Funciona em computador, celular, tablet - qualquer dispositivo com acesso à internet."
    },
    {
      question: "Se o GPT atualizar, eu recebo a nova versão?",
      answer: "Sim! Você sempre terá acesso às versões mais atualizadas durante seu período de assinatura."
    },
    {
      question: "Tem garantia e suporte?",
      answer: "Oferecemos garantia total e suporte via email. Se não ficar satisfeito, devolvemos seu dinheiro."
    }
  ];
  
  const names = ["João Silva", "Maria Santos", "Carlos Oliveira", "Ana Costa", "Pedro Lima", "Juliana Ferreira", "Roberto Alves", "Camila Rodrigues", "Fernando Souza", "Patrícia Mendes", "Lucas Barbosa", "Rafaela Cardoso", "Bruno Martins", "Letícia Pereira", "Gabriel Nascimento", "Mariana Ribeiro"];
  const states = ["São Paulo - SP", "Rio de Janeiro - RJ", "Minas Gerais - MG", "Bahia - BA", "Paraná - PR", "Rio Grande do Sul - RS", "Pernambuco - PE", "Ceará - CE", "Santa Catarina - SC", "Goiás - GO", "Maranhão - MA", "Pará - PA", "Paraíba - PB", "Espírito Santo - ES", "Piauí - PI", "Alagoas - AL"];
  const products = ["GPT-5 Pro - 3 Meses", "Pacote Completo GPT-5 Pro"];

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const initializeVideo = () => {
    console.log("Wistia player initialized");
  };

  const createNotification = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    
    const notification = {
      id: Date.now(),
      name,
      state,
      product
    };
    
    setNotifications(prev => [...prev, notification]);

    // Remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  useEffect(() => {
    // Initialize video autoplay
    initializeVideo();
    
    // Auto-advance testimonials every 5 seconds
    const testimonialInterval = setInterval(nextTestimonial, 5000);

    // Create notifications every 8-15 seconds
    const notificationInterval = setInterval(() => {
      createNotification();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Animated particles background */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Notifications */}
      <div className="fixed bottom-20 left-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="notification-slide-in px-4 py-2 rounded-lg shadow-lg max-w-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <div className="text-sm font-semibold">
                <strong>{notification.name}</strong> de <strong>{notification.state}</strong><br />
                acabou de comprar <strong>{notification.product}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="w-full">
        <div className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center font-bold py-2 px-4">
          <p className="whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl">
            Desconto só <span className="neon-text">HOJE</span> nessa página
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-center pt-12 bg-black pb-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter leading-none mb-2 text-white">
            Tenha o poder do<br />
            <span className="neon-text">GPT-5 PRO</span> <span className="text-white">na</span><br />
            palma da sua mão!
          </h1>
        </section>

        {/* Video Section */}
        <section className="px-4 pt-8 bg-black">
          <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl">
            <wistia-player 
              media-id="1k4qnksz3u" 
              aspect="0.5625"
              className="w-full h-auto rounded-lg"
              style={{ outline: 'none' }}
            />
          </div>
        </section>

        {/* Subtitle */}
        <section className="text-center py-4 px-4 max-w-3xl mx-auto bg-black">
          <h2 className="text-lg md:text-xl leading-snug font-normal text-white">
            Chega de espera! Agora você<br />
            tem respostas imediatas com<br />
            mais precisão e profundidade!<br />
            <span className="neon-text font-bold text-2xl">A partir de R$19,90</span>
          </h2>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-24 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase text-white">
              O GPT-5 PRO<br />
              <span className="neon-text">É PARA VOCÊ QUE:</span>
            </h2>
            
            <div className="flex flex-col md:flex-row md:gap-12 items-center">
              <div className="w-full md:w-1/2 flex-shrink-0">
                <img
                  src="/images/01.webp"
                  alt="Pessoa frustrada com computador"
                  className="rounded-lg mb-8 md:mb-0 mx-auto shadow-lg border border-green-500/20"
                  width="500"
                  height="500"
                />
              </div>
              
              <ul className="space-y-4 w-full md:w-1/2 text-base">
                <li className="flex items-start gap-3">
                  <TriangleAlert className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 icon-glow" />
                  <span className="text-gray-300">
                    <span className="text-red-400 font-semibold">Fica frustrado</span> com a lentidão ou indisponibilidade do serviço gratuito.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TriangleAlert className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 icon-glow" />
                  <span className="text-gray-300">
                    <span className="text-red-400 font-semibold">Recebe respostas rasas</span> que não atendem suas necessidades.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TriangleAlert className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 icon-glow" />
                  <span className="text-gray-300">
                    <span className="text-red-400 font-semibold">Perde tempo</span> (e <span className="text-red-400 font-semibold">dinheiro</span>) procurando soluções alternativas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TriangleAlert className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 icon-glow" />
                  <span className="text-gray-300">
                    <span className="text-red-400 font-semibold">Lida com interrupções</span> nos seus fluxos de trabalho por limitações da versão básica.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 sm:py-12 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-lg md:text-xl font-bold text-center mb-6 uppercase neon-text">
              Com o GPT-5 Pro você ganha:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="futuristic-card flex items-start gap-4 p-6 rounded-lg">
                <Zap className="h-8 w-8 icon-glow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-md font-bold neon-text mb-1">Acesso Imediato e Sem Filas</h3>
                  <p className="text-sm text-gray-300">Use o serviço sem atrasos, sempre que precisar.</p>
                </div>
              </div>
              
              <div className="futuristic-card flex items-start gap-4 p-6 rounded-lg">
                <BrainCircuit className="h-8 w-8 icon-glow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-md font-bold neon-text mb-1">Respostas Rápidas e Precisas</h3>
                  <p className="text-sm text-gray-300">Otimize seu tempo com o processamento em tempo real do GPT-5.</p>
                </div>
              </div>
              
              <div className="futuristic-card flex items-start gap-4 p-6 rounded-lg">
                <Star className="h-8 w-8 icon-glow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-md font-bold neon-text mb-1">Recursos Avançados</h3>
                  <p className="text-sm text-gray-300">Tenha acesso a funcionalidades exclusivas para tarefas complexas.</p>
                </div>
              </div>
              
              <div className="futuristic-card flex items-start gap-4 p-6 rounded-lg">
                <Briefcase className="h-8 w-8 icon-glow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-md font-bold neon-text mb-1">Flexibilidade Total</h3>
                  <p className="text-sm text-gray-300">Ideal para profissionais, estudantes e empresas que precisam de mais poder.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-8 sm:pt-12 px-4 bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase text-white">
            DEPOIMENTOS
          </h2>
          
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((src, index) => (
                  <div key={index} className="min-w-full">
                    <div className="p-1">
                      <img
                        src={src}
                        alt={`Depoimento ${index + 1}`}
                        className="rounded-lg shadow-lg w-full"
                        width="300"
                        height="600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2 sm:left-[-50px] bg-gray-700 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2 sm:right-[-50px] bg-gray-700 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              PERGUNTAS FREQUENTES
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left bg-gray-700 hover:bg-gray-600 flex justify-between items-center"
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-green-400 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-800 text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
