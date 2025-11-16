import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Bell, Shield, Globe, HelpCircle, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: "Notificaciones",
      icon: Bell,
      items: [
        {
          label: "Notificaciones push",
          description: "Recibe alertas de puntos cercanos y recompensas",
          value: notifications,
          onChange: setNotifications,
        },
      ],
    },
    {
      title: "Privacidad",
      icon: Shield,
      items: [
        {
          label: "Compartir ubicación",
          description: "Permite encontrar puntos de reciclaje cercanos",
          value: true,
          onChange: () => {},
        },
      ],
    },
    {
      title: "Apariencia",
      icon: Globe,
      items: [
        {
          label: "Modo oscuro",
          description: "Activa el tema oscuro de la aplicación",
          value: darkMode,
          onChange: setDarkMode,
        },
      ],
    },
  ];

  const helpOptions = [
    {
      icon: HelpCircle,
      label: "Centro de ayuda",
      action: () => {},
    },
    {
      icon: Info,
      label: "Acerca de Recicla+",
      action: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-gray via-white to-secondary/10 pb-6">
      {/* Header */}
      <div className="bg-primary p-6 rounded-b-3xl shadow-medium">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-2xl font-bold">Configuración</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Settings Sections */}
        {settingsSections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-3">
              <section.icon className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">{section.title}</h3>
            </div>
            <Card className="p-4 border-0 shadow-soft space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between">
                  <div className="flex-1">
                    <Label className="font-medium text-foreground">{item.label}</Label>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <Switch checked={item.value} onCheckedChange={item.onChange} />
                </div>
              ))}
            </Card>
          </div>
        ))}

        {/* Help Options */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Soporte</h3>
          <div className="space-y-3">
            {helpOptions.map((option, index) => (
              <Card
                key={index}
                className="p-4 border-0 shadow-soft hover:shadow-medium transition-all cursor-pointer"
                onClick={option.action}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-eco-gray rounded-xl flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{option.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* App Version */}
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">Recicla+ v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2024 Recicla+. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
