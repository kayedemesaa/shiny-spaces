import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-clean-home.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Hero = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking request received!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setBookingData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    setOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Cleaning Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Make Your Home
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Shiny Spaces
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Experience the difference of professional cleaning. We bring freshness and comfort back to your home with meticulous attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Your Cleaning
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Book Your Cleaning</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBookingSubmit} className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <Select value={bookingData.service} onValueChange={(value) => setBookingData({ ...bookingData, service: value })} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Regular Cleaning</SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                        <SelectItem value="moveinout">Move In/Out Cleaning</SelectItem>
                        <SelectItem value="postconstruction">Post-Construction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requirements or areas of focus..."
                      rows={3}
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-elegant">
                    Submit Booking Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-secondary transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
