import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Leaf, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recyclingHistory = [
  { id: 1, material: "Plástico", weight: "2.5 kg", points: 50, date: "15 Nov 2025", icon: "🧴" },
  { id: 2, material: "Vidrio", weight: "3.2 kg", points: 65, date: "13 Nov 2025", icon: "🍾" },
  { id: 3, material: "Papel", weight: "1.8 kg", points: 35, date: "10 Nov 2025", icon: "📄" },
  { id: 4, material: "Metal", weight: "4.0 kg", points: 80, date: "08 Nov 2025", icon: "🥫" },
  { id: 5, material: "Cartón", weight: "5.5 kg", points: 110, date: "05 Nov 2025", icon: "📦" },
  { id: 6, material: "Plástico", weight: "1.2 kg", points: 25, date: "02 Nov 2025", icon: "🧴" },
  { id: 7, material: "Vidrio", weight: "2.8 kg", points: 55, date: "30 Oct 2025", icon: "🍾" },
  { id: 8, material: "Papel", weight: "3.5 kg", points: 70, date: "28 Oct 2025", icon: "📄" },
  { id: 9, material: "Orgánico", weight: "6.0 kg", points: 45, date: "25 Oct 2025", icon: "🍃" },
  { id: 10, material: "Metal", weight: "2.1 kg", points: 42, date: "22 Oct 2025", icon: "🥫" },
  { id: 11, material: "Plástico", weight: "3.8 kg", points: 75, date: "20 Oct 2025", icon: "🧴" },
  { id: 12, material: "Cartón", weight: "4.2 kg", points: 85, date: "18 Oct 2025", icon: "📦" },
  { id: 13, material: "Vidrio", weight: "1.5 kg", points: 30, date: "15 Oct 2025", icon: "🍾" },
  { id: 14, material: "Papel", weight: "2.9 kg", points: 58, date: "12 Oct 2025", icon: "📄" },
  { id: 15, material: "Metal", weight: "5.3 kg", points: 105, date: "10 Oct 2025", icon: "🥫" },
];

const Rewards = () => {
  const navigate = useNavigate();
  const totalPoints = recyclingHistory.reduce((sum, item) => sum + item.points, 0);
  const totalWeight = recyclingHistory.reduce((sum, item) => sum + parseFloat(item.weight), 0);

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
        <h1 className="text-xl font-bold">Historial y Recompensas</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-gradient-to-br from-eco-green/10 to-eco-green-light/20">
            <Trophy className="w-8 h-8 text-eco-yellow mb-2" />
            <p className="text-2xl font-bold text-foreground">{totalPoints}</p>
            <p className="text-sm text-muted-foreground">Puntos totales</p>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-eco-green-light/20 to-eco-green/10">
            <Leaf className="w-8 h-8 text-eco-green mb-2" />
            <p className="text-2xl font-bold text-foreground">{totalWeight.toFixed(1)} kg</p>
            <p className="text-sm text-muted-foreground">Material reciclado</p>
          </Card>
        </div>

        {/* Impact Card */}
        <Card className="p-5 bg-gradient-to-r from-eco-green/5 to-eco-green-light/10">
          <h3 className="font-bold text-foreground mb-2">Tu impacto ambiental 🌍</h3>
          <p className="text-sm text-muted-foreground">
            Has reciclado <span className="font-semibold text-eco-green">{totalWeight.toFixed(1)} kg</span> de materiales este mes.
            ¡Sigue así y ayuda a reducir la huella de carbono!
          </p>
        </Card>

        {/* History */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Historial de reciclaje</h2>
          <div className="space-y-3">
            {recyclingHistory.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.material}</h3>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-eco-green">+{item.points} pts</p>
                    <p className="text-sm text-muted-foreground">{item.weight}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
