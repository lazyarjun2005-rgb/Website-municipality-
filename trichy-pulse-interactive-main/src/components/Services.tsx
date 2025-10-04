import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Trash2, Home, Droplet, FileText, ClipboardList, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Waste Management",
    description: "Efficient waste collection and disposal services",
  },
  {
    icon: Home,
    title: "Property Tax",
    description: "Online property tax payment and assessment",
  },
  {
    icon: Droplet,
    title: "Water Supply",
    description: "24/7 water supply management and billing",
  },
  {
    icon: FileText,
    title: "Building Permits",
    description: "Apply for building plan approvals online",
  },
  {
    icon: ClipboardList,
    title: "Birth/Death Certificate",
    description: "Register and download certificates online",
  },
  {
    icon: MessageSquare,
    title: "Grievance Redressal",
    description: "Lodge complaints and track resolution",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Comprehensive municipal services for the citizens of Tiruchirappalli
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
