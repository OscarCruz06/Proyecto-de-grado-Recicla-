import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, User, Mail, Award, History, LogOut, Settings } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Materiales reciclados", value: "24", icon: History },
    { label: "Puntos totales", value: "1,245", icon: Award },
    { label: "Este mes", value: "12 kg", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-gray via-white to-secondary/10 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-b-3xl shadow-medium">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/home")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-2xl font-bold">Mi Perfil</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 shadow-soft">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-1">Ana Verde</h2>
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
            Ciudadano
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 text-center border-0 shadow-soft">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <Card className="p-6 border-0 shadow-soft space-y-4">
          <h3 className="font-semibold text-foreground mb-4">Información de contacto</h3>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-eco-gray rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Correo</p>
              <p className="text-sm font-medium text-foreground">Ana.verde@gmail.com</p>
            </div>
          </div>

        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-14 justify-start gap-4 border-2"
            onClick={() => navigate("/rewards")}
          >
            <Award className="w-5 h-5 text-primary" />
            <span className="font-medium">Historial de recompensas</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-14 justify-start gap-4 border-2"
            onClick={() => navigate("/settings")}
          >
            <Settings className="w-5 h-5 text-primary" />
            <span className="font-medium">Configuración</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-14 justify-start gap-4 border-2 border-destructive/50 text-destructive hover:bg-destructive/10"
            onClick={() => navigate("/login")}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Cerrar sesión</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
