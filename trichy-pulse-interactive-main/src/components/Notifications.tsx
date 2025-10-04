import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, ChevronRight } from "lucide-react";

const notifications = [
  {
    type: "Tender",
    date: "28 Sep 2025",
    title: "Panjapur Truck Terminal Auction Contract Announcement",
  },
  {
    type: "Meeting",
    date: "27 Sep 2025",
    title: "Public Grievance Redressal Meeting Schedule",
  },
  {
    type: "Campaign",
    date: "26 Sep 2025",
    title: "Swachhata Hi Seva 2025 - Waste Segregation Campaign",
  },
  {
    type: "Notice",
    date: "25 Sep 2025",
    title: "Property Tax Payment Due Date Extended",
  },
  {
    type: "Project",
    date: "24 Sep 2025",
    title: "New Underground Drainage Project - Zone 5",
  },
  {
    type: "Event",
    date: "23 Sep 2025",
    title: "Tree Plantation Drive - Kallangadu Road",
  },
];

const Notifications = () => {
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
    <section id="notifications" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-4">Recent Notifications</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">Stay updated with latest announcements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {notifications.map((notification, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 bg-accent text-white text-xs rounded font-medium">
                      {notification.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{notification.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {notification.title}
                  </h3>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-secondary hover:text-secondary/80 group/btn"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            View All Notifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
