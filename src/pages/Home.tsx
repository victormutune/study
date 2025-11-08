import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600')",
        }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Strengthening Teacher Capacity
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
        
        {/* Date/Time Widget */}
        <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-md rounded-lg p-4 text-white border border-white/20">
          <div className="text-3xl font-bold">
            {new Date().toLocaleTimeString('en-US', { hour12: false })}
          </div>
          <div className="text-sm opacity-90">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="text-xs opacity-75">
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

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
