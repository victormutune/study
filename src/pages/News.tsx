import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      category: "Research",
      title: "New Study on Teacher Training Methods",
      excerpt: "Our latest research reveals innovative approaches to professional development...",
      date: "November 5, 2025",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600"
    },
    {
      category: "Workshop",
      title: "Regional Teacher Training Workshop",
      excerpt: "Successfully conducted a 3-day workshop with 150 teachers from 5 regions...",
      date: "November 1, 2025",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=600"
    },
    {
      category: "Partnership",
      title: "New Collaboration with International Partners",
      excerpt: "Expanding our network with universities in Europe and Africa...",
      date: "October 28, 2025",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Latest News & Updates</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Stay informed about our latest research findings, workshops, partnerships, and achievements 
            in educational transformation.
          </p>

          <Tabs defaultValue="news" className="max-w-4xl mx-auto mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge 
                        className={`mb-3 ${
                          item.category === 'Research' ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' :
                          item.category === 'Workshop' ? 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300' :
                          'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                        }`}
                      >
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.excerpt}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1520607162000 + i * 1000}-${Math.random().toString(36).substr(2, 9)}?w=400`}
                      alt={`Gallery image ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default News;
