import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import smartCityImage from "@/assets/trichyrockfort1.jpeg";

const SmartCity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
              Tiruchirappalli
            </h2>
            <p className="text-2xl text-[hsl(var(--accent))] mb-6">Smart City</p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              Tiruchirappalli Is Also Known As Trichy
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tiruchirappalli Municipal Corporation is the sixth-largest municipal corporation in the state of Tamil Nadu. 
              The name Tiruchirappalli has been composed of three Tamil words i.e. 'Thiru – Nel – Veli' meaning Sacred Paddy Hedge. 
              The city is a major hub for education, commerce, and industry, known for its rich cultural heritage and strategic importance.
            </p>
            <Button 
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white px-8 py-6 text-lg"
            >
              EXPLORE NOW!
            </Button>
          </div>

          {/* Image with animations */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-[hsl(var(--primary))] rounded-2xl -z-10 transform rotate-3"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[hsl(var(--accent))] rounded-2xl -z-20 transform -rotate-3"></div>
              
              {/* Main image */}
              <img
                src={smartCityImage}
                alt="Tiruchirappalli Smart City"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCity;
