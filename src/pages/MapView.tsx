import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, ArrowLeft, Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const recyclingPoints = [
  { id: 1, name: "EcoPunto Central", address: "Calle 45 #23-12, Centro", materials: "Plástico, Vidrio, Papel" },
  { id: 2, name: "Punto Verde Norte", address: "Av. 68 #125-30, Suba", materials: "Todo tipo de materiales" },
  { id: 3, name: "ReciclaYa Sur", address: "Carrera 30 #8-50, San Cristóbal", materials: "Electrónicos, Metal" },
  { id: 4, name: "Centro Ambiental", address: "Calle 100 #15-20, Usaquén", materials: "Papel, Cartón, Plástico" },
  { id: 5, name: "EcoStation Chapinero", address: "Carrera 7 #53-43, Chapinero", materials: "Todo tipo de materiales" },
  { id: 6, name: "Punto Limpio Kennedy", address: "Calle 38 Sur #78-50, Kennedy", materials: "Vidrio, Metal, Plástico" },
  { id: 7, name: "ReciclaPlus Fontibón", address: "Carrera 100 #22-80, Fontibón", materials: "Papel, Vidrio, Electrónicos" },
  { id: 8, name: "EcoHub Engativá", address: "Calle 80 #112-30, Engativá", materials: "Todo tipo de materiales" },
  { id: 9, name: "Verde Vida Teusaquillo", address: "Carrera 27 #39-52, Teusaquillo", materials: "Plástico, Papel, Cartón" },
  { id: 10, name: "Recicla Fácil Bosa", address: "Calle 57 Sur #88B-20, Bosa", materials: "Vidrio, Metal, Papel" },
];

const MapView = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const filteredPoints = recyclingPoints.filter(point =>
    point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    point.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    point.materials.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewMap = () => {
    setShowDialog(true);
    setTimeout(() => {
      setShowDialog(false);
    }, 3000);
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
        <h1 className="text-xl font-bold">Puntos de Reciclaje</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Map Preview */}
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-eco-green-light/30 to-eco-green/20 relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            <div className="text-center z-10">
              <MapPin className="w-16 h-16 text-eco-green mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground mb-1">Vista del mapa</p>
              <p className="text-xs text-muted-foreground">Puntos de reciclaje cercanos a tu ubicación</p>
            </div>
          </div>
          <div className="p-4">
            <Button onClick={handleViewMap} className="w-full bg-eco-green hover:bg-eco-green/90">
              Ver mapa interactivo
            </Button>
          </div>
        </Card>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por material o ubicación..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Points List */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            {filteredPoints.length} puntos encontrados
          </h2>
          
          {filteredPoints.map((point) => (
            <Card key={point.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-eco-green/10 p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-eco-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{point.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{point.address}</p>
                      <p className="text-xs text-eco-green font-medium">{point.materials}</p>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-eco-green hover:bg-eco-green/90">
                  Ir
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mapa interactivo</DialogTitle>
            <DialogDescription className="text-center py-4">
              Pronto estará disponible
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapView;
