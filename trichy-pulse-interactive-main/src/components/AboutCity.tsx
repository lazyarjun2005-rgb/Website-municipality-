import { useEffect, useRef, useState } from "react";
import { Users, Map, Building2, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "10.7 Lakhs", label: "Population" },
  { icon: Map, value: "167.23 km²", label: "Area" },
  { icon: Building2, value: "65", label: "Wards" },
  { icon: Calendar, value: "1866", label: "Established" },
];

const AboutCity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCountersStarted(true), 300);
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
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-4">About Tiruchirappalli</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tiruchirappalli, also known as Trichy, is a major tier II city in Tamil Nadu and the administrative 
            headquarters of Tiruchirappalli district. It is the fourth largest municipal corporation in Tamil Nadu 
            and also the fourth largest urban agglomeration in the state.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 ${
                countersStarted ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* City Overview */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold text-primary mb-6">City Overview</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tiruchirappalli is situated almost at the geographic center of Tamil Nadu. The city is an important 
              educational hub, home to several nationally recognized institutes including NIT Trichy, BHEL, and 
              various medical colleges.
            </p>
            <p>
              The city has a rich cultural heritage dating back to the Sangam period. It served as the early capital 
              of the Cholas, which later fell to the Pandyas, Pallavas, Vijayanagar Empire, Nayaks, Carnatic state, 
              and the British.
            </p>
            <p>
              Known as the "Gateway to South India," Tiruchirappalli is a major industrial and commercial center. 
              The city is famous for its cigars, textiles, and artificial diamonds. It's also developing as an IT hub 
              with several technology parks.
            </p>
          </div>

          <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
            <h4 className="font-bold text-primary mb-3">Key Highlights:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Major pilgrimage destination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Educational and industrial hub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Strategic transportation center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Rich cultural and historical significance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Smart City Mission participant</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCity;
