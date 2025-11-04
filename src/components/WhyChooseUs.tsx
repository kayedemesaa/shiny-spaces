import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule with easy online booking"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll re-clean for free, no questions asked"
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Background-checked staff with extensive cleaning expertise"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Sparkle Clean?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional service that exceeds your expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group hover:bg-gradient-hero transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
