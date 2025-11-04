import { Home, Building2, SparklesIcon, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Regular Cleaning",
    description: "Keep your home consistently fresh with our regular cleaning service. Perfect for busy households.",
    features: ["Dusting & vacuuming", "Kitchen & bathroom cleaning", "Floor mopping", "Trash removal"]
  },
  {
    icon: SparklesIcon,
    title: "Deep Cleaning",
    description: "A thorough, detailed clean that reaches every corner. Ideal for seasonal refreshes or special occasions.",
    features: ["Detailed surface cleaning", "Inside appliances", "Baseboards & vents", "Behind furniture"]
  },
  {
    icon: Building2,
    title: "Move In/Out Cleaning",
    description: "Starting fresh or leaving spotless? We handle the cleaning so you can focus on the move.",
    features: ["Complete property clean", "Cabinet interiors", "Window cleaning", "Final walkthrough ready"]
  },
  {
    icon: Trash2,
    title: "Post-Construction",
    description: "Remove dust and debris after renovations. We prepare your space to be move-in ready.",
    features: ["Dust & debris removal", "Paint splash cleanup", "Window & fixture cleaning", "Floor polishing"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to deep cleaning, we offer comprehensive solutions for every need
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
