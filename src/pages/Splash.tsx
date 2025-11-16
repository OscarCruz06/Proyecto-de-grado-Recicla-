import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-eco-green-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-white p-8 rounded-full shadow-medium">
            <Leaf className="w-24 h-24 text-primary animate-bounce" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Recicla<span className="text-accent">+</span>
          </h1>
          <p className="text-white/90 text-lg font-light px-8">
            Tecnología al servicio del reciclaje
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 w-12 h-1 bg-white/50 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Splash;
