import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/trichyrockfort1.jpeg";
import heroImageA from "@/assets/trichysrirangam.jpeg";
import heroImageB from "@/assets/trichyriver.jpg";
const slides = [
  {
    title: "Let's all Together.. Keep the City Cleaner !",
    subtitle: "We join hands to make the City a Cleaner, Greener, Livable Tiruchirappalli",
    image: heroImage,
  },
  {
    title: "Smart City Mission",
    subtitle: "Transforming Tiruchirappalli into a world-class smart city with sustainable development",
    image: heroImageA,
  },
  {
    title: "Gateway to South India",
    subtitle: "A major industrial, educational, and cultural hub of Tamil Nadu",
    image: heroImageB,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/90 to-[hsl(var(--primary))]/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))]/90 text-white animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Red Triangle Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
        <svg className="w-full h-full" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 L360,0 L720,48 L1080,0 L1440,48 L1440,48 L0,48 Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;
