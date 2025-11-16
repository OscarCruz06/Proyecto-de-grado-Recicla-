import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tips = [
  {
    id: 1,
    icon: "♻️",
    title: "Separa desde casa",
    description: "Clasifica tus residuos en diferentes contenedores según su tipo. Esto facilita el proceso de reciclaje y aumenta la eficiencia.",
  },
  {
    id: 2,
    icon: "🍾",
    title: "Vidrio infinito",
    description: "¿Sabías que una botella de vidrio tarda 4000 años en degradarse? Pero la buena noticia es que se puede reciclar infinitas veces sin perder calidad.",
  },
  {
    id: 3,
    icon: "💧",
    title: "Limpia antes de reciclar",
    description: "Enjuaga los envases de plástico y vidrio antes de reciclarlos. Los residuos de comida pueden contaminar todo el lote de reciclaje.",
  },
  {
    id: 4,
    icon: "📦",
    title: "Aplana el cartón",
    description: "Dobla y aplana las cajas de cartón para ahorrar espacio en los contenedores. Esto permite reciclar más material en cada recolección.",
  },
  {
    id: 5,
    icon: "🌱",
    title: "Compostaje en casa",
    description: "Los residuos orgánicos representan el 50% de la basura doméstica. Crear compost en casa reduce desechos y genera abono natural para plantas.",
  },
  {
    id: 6,
    icon: "🔋",
    title: "Pilas y baterías",
    description: "Nunca tires pilas a la basura común. Contienen metales pesados tóxicos. Llévalas a puntos de recolección especializados.",
  },
  {
    id: 7,
    icon: "👕",
    title: "Ropa y textiles",
    description: "La industria textil es una de las más contaminantes. Dona la ropa que no uses o llévala a centros de reciclaje textil. ¡Dale una segunda vida!",
  },
  {
    id: 8,
    icon: "🛍️",
    title: "Reduce el plástico",
    description: "Usa bolsas reutilizables para tus compras. Una bolsa de plástico tarda hasta 400 años en degradarse y contamina océanos y vida marina.",
  },
  {
    id: 9,
    icon: "💡",
    title: "Electrónicos responsables",
    description: "Los dispositivos electrónicos contienen materiales valiosos y tóxicos. Recíclalos en puntos especializados, no los tires a la basura.",
  },
  {
    id: 10,
    icon: "🌍",
    title: "Cada acción cuenta",
    description: "Si cada persona reciclara solo una lata al mes, se ahorraría suficiente energía para iluminar 18 millones de hogares durante un año.",
  },
];

const Tips = () => {
  const navigate = useNavigate();

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
        <h1 className="text-xl font-bold">Tips Ecológicos</h1>
      </div>

      <div className="p-6">
        {/* Intro Card */}
        <Card className="p-5 mb-6 bg-gradient-to-r from-eco-green/10 to-eco-green-light/20">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-8 h-8 text-eco-yellow flex-shrink-0" />
            <div>
              <h2 className="font-bold text-foreground mb-2">Aprende a reciclar mejor</h2>
              <p className="text-sm text-muted-foreground">
                Pequeñas acciones generan grandes cambios. Descubre cómo puedes hacer la diferencia.
              </p>
            </div>
          </div>
        </Card>

        {/* Tips Grid */}
        <div className="space-y-4">
          {tips.map((tip) => (
            <Card key={tip.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">{tip.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
