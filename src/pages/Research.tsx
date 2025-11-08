import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Research Progress</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive overview of STEP-STUDY research activities, milestones, and achievements across Tanzania
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Updated Daily</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">5 Research Zones</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">51+ Researchers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Access Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90"
          >
            Access Tools Coming Soon
            <span className="ml-2">⏰</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              title: "Total Projects",
              value: "52",
              color: "bg-blue-50 dark:bg-blue-950/30",
              icon: "📊"
            },
            { 
              title: "Active Researchers",
              value: "51+",
              color: "bg-green-50 dark:bg-green-950/30",
              icon: "👥"
            },
            { 
              title: "Research Zones",
              value: "5",
              color: "bg-purple-50 dark:bg-purple-950/30",
              icon: "📍"
            },
            { 
              title: "Completion Rate",
              value: "78%",
              color: "bg-orange-50 dark:bg-orange-950/30",
              icon: "✅"
            },
          ].map((stat, index) => (
            <Card key={index} className={`${stat.color} border-none`}>
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.title}</div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Impact & Achievements</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore our key milestones and ongoing initiatives in transforming education through research and collaboration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <div className="text-sm text-primary mb-2 font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  15+ Publications
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Research Publications</h3>
                <p className="text-muted-foreground">
                  Contributing to the global knowledge base with peer-reviewed research on teacher education 
                  and curriculum development in East Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <div className="text-sm text-accent mb-2 font-medium bg-accent/10 rounded-full px-3 py-1 inline-block">
                  Workshop Series
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Teacher Training</h3>
                <p className="text-muted-foreground">
                  Comprehensive professional development programs empowering over 1000 teachers 
                  with innovative pedagogical approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <div className="text-sm text-purple-600 mb-2 font-medium bg-purple-100 dark:bg-purple-950/30 rounded-full px-3 py-1 inline-block">
                  Partnership
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">International Collaboration</h3>
                <p className="text-muted-foreground">
                  Building sustainable partnerships across three countries to create lasting 
                  impact in educational transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
