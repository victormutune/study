import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-foreground">About STEP-STUDY</h1>
          <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            A collaborative research initiative dedicated to strengthening teacher capacity and advancing 
            education outcomes through evidence-based solutions and international partnerships.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Strengthening Teachers, Transforming Education through collaborative initiatives, 
                innovative training programs, and evidence-based solutions that bridge the gap 
                between theory and practice in educational settings across Tanzania and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading international research initiative that transforms education systems 
                through empowered teachers, innovative pedagogical approaches, and sustainable 
                partnerships that create lasting impact in educational transformation across Africa.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Achievements</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Measuring our impact through meaningful partnerships and educational transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { number: "50+", label: "Research Publications" },
              { number: "1000+", label: "Teachers Trained" },
              { number: "25+", label: "Educational Programs" },
              { number: "3", label: "Partner Countries" },
            ].map((stat, index) => (
              <Card key={index} className="bg-primary text-primary-foreground border-none shadow-lg hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Partner Institutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            "University of Dodoma",
            "Arusha Technical College",
            "University of Graz"
          ].map((partner, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">{partner}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
