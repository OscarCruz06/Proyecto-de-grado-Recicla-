import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const materials = [
  {
    type: "Plástico",
    container: "Caneca Azul",
    color: "#2196F3",
    borderColor: "#1976D2",
    instructions: "Botellas, bolsas limpias, tapas, empaques rígidos. Todo debe ir limpio y seco. Los materiales reciclables van en la caneca azul."
  },
  {
    type: "Papel/Cartón",
    container: "Caneca Azul",
    color: "#2196F3",
    borderColor: "#1976D2",
    instructions: "Hojas, cuadernos, revistas, cajas limpias. Debe estar limpio y seco. Aplana las cajas de cartón. Va en la caneca azul de reciclables."
  },
  {
    type: "Vidrio",
    container: "Caneca Azul",
    color: "#2196F3",
    borderColor: "#1976D2",
    instructions: "Frascos y botellas limpias. Enjuaga y elimina restos de comida. No incluyas espejos, bombillas o cristales rotos. Va en la caneca azul."
  },
  {
    type: "Metal",
    container: "Caneca Azul",
    color: "#2196F3",
    borderColor: "#1976D2",
    instructions: "Latas de aluminio y acero, envases metálicos. Aplasta las latas para ahorrar espacio. Retira tapas y enjuaga antes de reciclar. Caneca azul."
  },
  {
    type: "Tetrapak",
    container: "Caneca Azul",
    color: "#2196F3",
    borderColor: "#1976D2",
    instructions: "Envases de leche, jugos y productos tetrapack. Deben estar limpios y secos. Va en la caneca azul de reciclables."
  },
  {
    type: "Orgánico",
    container: "Caneca Verde",
    color: "#4CAF50",
    borderColor: "#388E3C",
    instructions: "Restos de comida, cáscaras de frutas y verduras, desechos de jardinería, cáscaras de huevo, borra de café. Solo residuos biodegradables."
  },
  {
    type: "No reciclable",
    container: "Caneca Negra",
    color: "#424242",
    borderColor: "#212121",
    instructions: "Papel higiénico, toallas higiénicas, pañales, colillas de cigarrillo, empaques contaminados con comida, icopor sucio. Residuos no aprovechables."
  },
  {
    type: "Peligroso",
    container: "Caneca Roja",
    color: "#F44336",
    borderColor: "#D32F2F",
    instructions: "Medicamentos vencidos, pilas, bombillos, aerosoles, envases de químicos, agujas. Llevar a puntos de recolección autorizados."
  }
];

const Scan = () => {
  const navigate = useNavigate();
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  const handleScan = () => {
    const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
    setSelectedMaterial(randomMaterial);
    setScanning(true);
    
    // Show scanning animation for 2 seconds, then show result
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-eco-green text-white p-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/home")}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold">Escanear Material</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Camera View - Phone Shape */}
        <div className="flex justify-center">
          <div className="relative w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] shadow-2xl border-8 border-gray-900 p-4">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
            
            {/* Camera display */}
            <div className="w-full h-full bg-gradient-to-br from-eco-green-light/20 to-eco-green/10 rounded-[30px] flex items-center justify-center relative overflow-hidden">
              {!scanning && !scanned ? (
                <div className="text-center">
                  <Camera className="w-16 h-16 text-eco-green mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Apunta al material a escanear</p>
                </div>
              ) : scanning ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated scanning frame */}
                  <div className="w-40 h-40 border-4 border-eco-green rounded-lg animate-scan-pulse relative">
                    {/* Scanning line animation */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-eco-green to-transparent animate-scan-line shadow-glow"></div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-eco-green"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-eco-green"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-eco-green"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-eco-green"></div>
                  </div>
                  
                  {/* Scanning text */}
                  <div className="absolute bottom-8 text-center">
                    <p className="text-eco-green font-semibold animate-pulse">Analizando...</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Scan Button */}
        {!scanning && !scanned && (
          <Button
            onClick={handleScan}
            className="w-full h-14 text-lg bg-eco-green hover:bg-eco-green/90 hover-glow"
          >
            <Camera className="w-6 h-6 mr-2" />
            Escanear
          </Button>
        )}

        {/* Result */}
        {scanned && !scanning && (
          <div className="space-y-6 animate-fade-in">
            {/* Success Icon and Title */}
            <div className="flex flex-col items-center text-center space-y-3 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center border-4 border-eco-green shadow-glow">
                <svg className="w-8 h-8 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-foreground">¡Material identificado!</h2>
              <div 
                className="px-6 py-2 rounded-full text-white font-semibold shadow-lg"
                style={{ backgroundColor: selectedMaterial.borderColor }}
              >
                {selectedMaterial.type}
              </div>
            </div>

            {/* Material Info Card */}
            <Card 
              className="p-6 rounded-2xl border-none shadow-lg text-white hover-scale"
              style={{ backgroundColor: selectedMaterial.borderColor }}
            >
              <h3 className="text-lg font-bold mb-2">Material identificado</h3>
              <p className="text-2xl font-bold mb-3">{selectedMaterial.type}</p>
              <p className="text-sm opacity-90">
                Depositar en: {selectedMaterial.container}
              </p>
            </Card>

            {/* Instructions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-eco-green flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Instrucciones de reciclaje</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {selectedMaterial.instructions}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => {
                  setScanned(false);
                  setScanning(false);
                }}
                variant="outline"
                className="flex-1 hover-scale"
              >
                Escanear otro material
              </Button>
              <Button
                onClick={() => navigate("/map")}
                className="flex-1 bg-eco-green hover:bg-eco-green/90 hover-glow"
              >
                Ver puntos cercanos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scan;
