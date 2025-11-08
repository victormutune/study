import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. John Doe",
      role: "Principal Investigator",
      institution: "University of Dodoma",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Dr. Jane Smith",
      role: "Research Coordinator",
      institution: "University of Dodoma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Prof. Michael Johnson",
      role: "Senior Researcher",
      institution: "University of Dodoma",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Dr. Sarah Williams",
      role: "Research Fellow",
      institution: "University of Dodoma",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Meet Our Team</h1>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Strengthening Teachers, Transforming Education
          </p>

          <Tabs defaultValue="dodoma" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="dodoma" className="text-base">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                University of Dodoma
              </TabsTrigger>
              <TabsTrigger value="arusha" className="text-base">
                Arusha Technical College
              </TabsTrigger>
              <TabsTrigger value="graz" className="text-base">
                University of Graz
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dodoma">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1 text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                      <p className="text-xs text-primary">{member.institution}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="arusha">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Team members from Arusha Technical College coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="graz">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Team members from University of Graz coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Collaborative Excellence</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our diverse team of researchers, educators, and innovators work together across three continents 
            to advance educational outcomes through evidence-based solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
