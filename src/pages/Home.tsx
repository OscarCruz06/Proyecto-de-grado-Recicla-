import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, MapPin, MessageCircle, History, Lightbulb, User, Gift, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Home = () => {
  const navigate = useNavigate();
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-eco-green-light/20 to-background pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-eco-green to-eco-green/80 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-1">¡Hola, Ana Verde! 👋</h1>
            <p className="text-sm opacity-90">Sigamos cuidando el planeta</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-sm font-semibold">⭐ 420 puntos</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Invite Friends Card */}
        <Card className="p-4 bg-gradient-to-r from-eco-yellow/10 to-eco-green-light/10 border-eco-green/20">
          <div className="flex items-start gap-3">
            <div className="bg-eco-green/10 p-2 rounded-full">
              <Share2 className="w-5 h-5 text-eco-green" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground/80 mb-2">
                ¡Comparte el conocimiento! Cada persona que recicla correctamente hace una diferencia
              </p>
              <Button
                onClick={() => setShowInviteDialog(true)}
                size="sm"
                className="bg-eco-green hover:bg-eco-green/90"
              >
                Invitar amigos
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Acciones principales</h2>
          
          <Button
            onClick={() => navigate("/scan")}
            className="w-full h-20 text-lg bg-gradient-to-r from-eco-green to-eco-green/70 hover:from-eco-green/90 hover:to-eco-green/60 shadow-lg"
          >
            <Camera className="w-8 h-8 mr-3" />
            Escanear Material
          </Button>

          <Button
            onClick={() => navigate("/map")}
            className="w-full h-20 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
          >
            <MapPin className="w-8 h-8 mr-3" />
            Puntos de Reciclaje
          </Button>

          <Button
            onClick={() => navigate("/chat")}
            className="w-full h-20 text-lg bg-gradient-to-r from-eco-green to-eco-green/70 hover:from-eco-green/90 hover:to-eco-green/60 shadow-lg"
          >
            <MessageCircle className="w-8 h-8 mr-3" />
            Contactar Reciclador
          </Button>
        </div>

        {/* Quick Access */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Acceso rápido</h2>
          
          <div className="flex justify-center gap-4">
            <Card
              className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow bg-eco-green/10 border-eco-green/20 hover-scale"
              onClick={() => navigate("/rewards")}
            >
              <History className="w-8 h-8 text-eco-green mb-1" />
              <p className="text-xs font-medium text-eco-green">Historial</p>
            </Card>

            <Card
              className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow bg-eco-green/10 border-eco-green/20 hover-scale"
              onClick={() => navigate("/tips")}
            >
              <Lightbulb className="w-8 h-8 text-eco-green mb-1" />
              <p className="text-xs font-medium text-eco-green">Tips</p>
            </Card>

            <Card
              className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow bg-eco-green/10 border-eco-green/20 hover-scale"
              onClick={() => navigate("/profile")}
            >
              <User className="w-8 h-8 text-eco-green mb-1" />
              <p className="text-xs font-medium text-eco-green">Perfil</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Invite Dialog */}
      <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invitar amigos</DialogTitle>
            <DialogDescription className="text-center py-4">
              👉 ¡Pronto podrás invitar a tus amigos a cuidar el planeta contigo! 🌱💚
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
