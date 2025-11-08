import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const heroSlides = [
    {
      title: "Strengthening Teacher Capacity",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600"
    },
    {
      title: "Empowering Educational Excellence",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600"
    },
    {
      title: "Building Future Leaders",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600"
    },
    {
      title: "Research-Driven Innovation",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600"
    },
    {
      title: "Global Partnership Network",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Carousel 
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="relative h-[600px] overflow-hidden"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <section 
                className="relative h-[600px] bg-cover bg-center overflow-hidden"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 animate-zoom bg-cover bg-center"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <h1 className="text-6xl font-bold mb-8 leading-tight overflow-hidden whitespace-nowrap inline-block">
                      <span className="inline-block animate-typing border-r-4 border-white pr-1">
                        {slide.title}
                      </span>
                    </h1>
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                      <Link to="/research">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Explore Our Research
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                      <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                        <Play className="mr-2 w-5 h-5" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Date/Time Widget */}
        <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-md rounded-lg p-4 text-white border border-white/20 z-10">
          <div className="text-3xl font-bold">
            {currentTime.toLocaleTimeString('en-US', { hour12: false })}
          </div>
          <div className="text-sm opacity-90">
            {currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="text-xs opacity-75">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Research Excellence</h3>
              <p className="text-muted-foreground">Evidence-based educational solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Teacher Empowerment</h3>
              <p className="text-muted-foreground">Professional development programs</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-l-4 border-l-primary hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Global Collaboration</h3>
              <p className="text-muted-foreground">International partnerships</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Impact in Numbers</h2>
          <p className="text-center mb-12 opacity-90 max-w-3xl mx-auto">
            Measuring our success through meaningful partnerships, research excellence, and educational transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "3", label: "Partner Institutions" },
              { number: "50+", label: "Research Projects" },
              { number: "1000+", label: "Teachers Trained" },
              { number: "25+", label: "Publications" },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
