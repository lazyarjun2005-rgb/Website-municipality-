import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Phone, Mail } from "lucide-react";

const leaders = [
  {
    name: "Thiru. M.K. Stalin",
    title: "Hon'ble Chief Minister",
    subtitle: "Government of Tamil Nadu",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/stalin.jpeg?raw=true",
  },
  {
    name: "Dr. M. Karunanidhi",
    title: "Former Chief Minister",
    subtitle: "(1924 - 2018)",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/mk.jpeg?raw=true",
  },
];

const administration = [
  {
    name: "Mu. Anbalagan, M.A",
    title: "Hon'ble Mayor",
    message: "With a sense of purpose, striving for progress and community pride, I welcome you to the City of Tiruchirappalli. Our administration is committed to serve everyone at the highest level possible with focus on a healthy and sustainable environment.",
    phone: "9629027775",
    office: "0431-2415393",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/trichymayor.jpg?raw=true",
  },
  {
    name: "Dr. V. Saravanan, IAS",
    title: "Commissioner",
    message: "As the Municipal Commissioner, I am dedicated to transforming Tiruchirappalli into a model smart city. Our focus remains on efficient public service delivery, sustainable development, and citizen welfare.",
    phone: "0431-2414411",
    email: "commissioner@trichycorp.gov.in",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/collector.jpg?raw=true",
  },
];

const Leadership = () => {
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
    <section id="leadership" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-4">Leadership</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* State Leadership */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">{leader.title}</p>
                <h3 className="text-2xl font-bold text-primary mb-2">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Municipal Administration */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="text-3xl font-bold text-primary mb-4">Municipal Administration</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {administration.map((admin, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <p className="text-sm text-muted-foreground mb-1">{admin.title}</p>
                  <h3 className="text-2xl font-bold text-primary mb-4">{admin.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{admin.message}</p>
                  <div className="space-y-2 text-sm">
                    {admin.office && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>Office: {admin.office}</span>
                      </div>
                    )}
                    {admin.phone && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>Mobile: {admin.phone}</span>
                      </div>
                    )}
                    {admin.email && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{admin.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
