import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const YouTubeVideos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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

  const videos = [
    {
      id: "1",
      title: "my trichy challenge accepted",
      thumbnail: "https://i.ytimg.com/vi_webp/NDr4B9TOHVo/hqdefault.webp",
      url: "https://youtu.be/NDr4B9TOHVo",
      description: "Exploring Tiruchirappalli's transformation into a smart city"
    },
    {
      id: "2",
      title: "voice of citizen",
      thumbnail: "https://i.ytimg.com/vi_webp/pH-5s3beK1s/hqdefault.webp",
      url: "https://youtu.be/pH-5s3beK1s",
      description: "A complete responsibility to municipal services"
    },
    {
      id: "3",
      title: "KK Nagar Park",
      thumbnail: "https://i.ytimg.com/vi_webp/90J4tyJSMbA/hqdefault.webp",
      url: "https://youtu.be/90J4tyJSMbA",
      description: "Preserving Trichy's places"
    },
    {
      id: "4",
      title: "Smart Park",
      thumbnail: "https://i.ytimg.com/vi_webp/ktgvuvg6rSs/hqdefault.webp",
      url: "https://youtu.be/ktgvuvg6rSs",
      description: "Our innovative approach to keeping the city clean"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Watch Our Videos</h2>
          <p className="text-white/80 text-lg">Stay updated with the latest initiatives and developments</p>
        </div>

        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transition-all duration-500"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: isVisible ? `slideInFromLeft 0.8s ease-out ${index * 0.2}s both` : 'none'
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]">
                      {/* Thumbnail */}
                      <div className="relative h-[200px] bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary))]">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-[hsl(var(--accent))] ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="bg-white p-5">
                        <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {video.description}
                        </p>
                      </div>

                      {/* Animated border */}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/50 rounded-xl transition-all pointer-events-none" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white text-[hsl(var(--primary))]" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white text-[hsl(var(--primary))]" />
          </Carousel>
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://www.youtube.com/@TrichyCorporation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[hsl(var(--primary))] px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--accent))] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Videos
            <Play className="h-5 w-5" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default YouTubeVideos;
