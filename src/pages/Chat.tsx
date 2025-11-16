import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chatList = [
  { 
    id: 1, 
    name: "Carlos Reciclador", 
    lastMessage: "Perfecto, paso mañana por el material", 
    time: "10:30 AM",
    initials: "CR"
  },
  { 
    id: 2, 
    name: "María Sostenible", 
    lastMessage: "¿Aceptas cartón también?", 
    time: "Ayer",
    initials: "MS"
  },
  { 
    id: 3, 
    name: "Juan EcoAmigo", 
    lastMessage: "Gracias por la información", 
    time: "Ayer",
    initials: "JE"
  },
  { 
    id: 4, 
    name: "Laura Verde", 
    lastMessage: "¿Cuál es tu horario de recolección?", 
    time: "2 días",
    initials: "LV"
  },
  { 
    id: 5, 
    name: "Pedro Recicla+", 
    lastMessage: "Tengo varios kilos de plástico", 
    time: "3 días",
    initials: "PR"
  },
  { 
    id: 6, 
    name: "Ana Ecológica", 
    lastMessage: "¿Recoges vidrio en tu zona?", 
    time: "4 días",
    initials: "AE"
  },
  { 
    id: 7, 
    name: "Roberto Limpio", 
    lastMessage: "Excelente servicio, muy recomendado", 
    time: "1 semana",
    initials: "RL"
  },
];

const conversations: { [key: number]: Array<{ text: string; sent: boolean; time: string }> } = {
  1: [
    { text: "Hola, ¿recoges plástico?", sent: true, time: "10:15 AM" },
    { text: "Sí, recojo todo tipo de plástico reciclable", sent: false, time: "10:20 AM" },
    { text: "Tengo unos 5 kg, ¿cuándo puedes pasar?", sent: true, time: "10:25 AM" },
    { text: "Perfecto, paso mañana por el material", sent: false, time: "10:30 AM" },
  ],
  2: [
    { text: "Hola, vi tu perfil", sent: true, time: "Ayer" },
    { text: "Hola, ¿en qué te puedo ayudar?", sent: false, time: "Ayer" },
    { text: "¿Aceptas cartón también?", sent: true, time: "Ayer" },
  ],
  3: [
    { text: "¿Cuáles son tus tarifas?", sent: true, time: "Ayer" },
    { text: "Depende del material y cantidad", sent: false, time: "Ayer" },
    { text: "Gracias por la información", sent: true, time: "Ayer" },
  ],
  4: [
    { text: "Buenas tardes", sent: true, time: "2 días" },
    { text: "¿Cuál es tu horario de recolección?", sent: true, time: "2 días" },
  ],
  5: [
    { text: "Hola, necesito tu servicio", sent: true, time: "3 días" },
    { text: "Tengo varios kilos de plástico", sent: true, time: "3 días" },
  ],
  6: [
    { text: "Hola, estoy en el norte de la ciudad", sent: true, time: "4 días" },
    { text: "¿Recoges vidrio en tu zona?", sent: true, time: "4 días" },
  ],
  7: [
    { text: "Muchas gracias por el servicio", sent: true, time: "1 semana" },
    { text: "Excelente servicio, muy recomendado", sent: true, time: "1 semana" },
  ],
};

const Chat = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleBack = () => {
    if (selectedChat) {
      setSelectedChat(null);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-eco-green text-white p-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold">
          {selectedChat ? chatList.find(c => c.id === selectedChat)?.name : "Contactar Reciclador"}
        </h1>
      </div>

      {/* Chat List or Conversation */}
      {!selectedChat ? (
        <div className="flex-1 overflow-auto p-4 space-y-2">
          {chatList.map((chat) => (
            <Card
              key={chat.id}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-eco-green">
                  <AvatarFallback className="bg-eco-green text-white font-semibold">
                    {chat.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-foreground">{chat.name}</h3>
                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-3 bg-eco-green-light/5">
            {conversations[selectedChat]?.map((msg, index) => (
              <div key={index} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] ${msg.sent ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      msg.sent
                        ? 'bg-eco-green text-white rounded-br-sm'
                        : 'bg-white text-foreground rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <p className={`text-xs text-muted-foreground mt-1 ${msg.sent ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="bg-eco-green hover:bg-eco-green/90">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
