import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, Video } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Research Publications",
      icon: FileText,
      count: "25+ Documents",
      description: "Peer-reviewed research papers and articles"
    },
    {
      title: "Training Materials",
      icon: BookOpen,
      count: "50+ Resources",
      description: "Comprehensive teacher training materials"
    },
    {
      title: "Video Tutorials",
      icon: Video,
      count: "15+ Videos",
      description: "Educational videos and workshop recordings"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Resources</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Access our comprehensive collection of research publications, training materials, and educational resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{resource.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{resource.count}</p>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Browse
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
