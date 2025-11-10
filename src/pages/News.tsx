import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

// Gallery Images
import gallery1 from "@/assets/images/gallery/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5-new.jpg";

const News = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIsGallery, setLightboxIsGallery] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);

    const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const newsItems = [
    {
      id: 1,
      title: "STEP-STUDY Research Findings Published in International Journal",
      excerpt:
        "Our latest research on teacher professional development has been published in the Journal of Educational Research, highlighting innovative approaches to curriculum implementation.",
      date: "2024-01-15",
      category: "Research",
      image: "/placeholder.svg?height=200&width=400&text=Research+Publication",
    },
    {
      id: 2,
      title: "International Workshop on Competence-Based Training Held in Arusha",
      excerpt:
        "A successful three-day workshop brought together educators from Tanzania and Austria to share best practices in competence-based curriculum development.",
      date: "2024-01-10",
      category: "Workshop",
      image: "/placeholder.svg?height=200&width=400&text=Workshop+Arusha",
    },
    {
      id: 3,
      title: "New Partnership Agreement Signed with UNESCO-UNEVOC",
      excerpt:
        "STEP-STUDY expands its global reach through a strategic partnership with UNESCO-UNEVOC, enhancing technical and vocational education initiatives.",
      date: "2024-01-05",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=400&text=UNESCO+Partnership",
    },
    {
      id: 4,
      title: "STEP-STUDY Team Collaboration Updates",
      excerpt:
        "Follow our latest project updates and team collaborations on LinkedIn. Stay connected with our research progress and educational initiatives.",
      date: "2024-01-20",
      category: "Social Media",
      image: "/images/step-study-logo.png",
      externalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7353068360751820800",
    },
  ];

  const openLightbox = (index: number, isGallery = false) => {
    setCurrentImageIndex(index);
    setLightboxIsGallery(isGallery);
    setLightboxOpen(true);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIsGallery(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const len = lightboxIsGallery ? galleryImages.length : newsItems.length;
      return (prev + 1) % len;
    });
    setZoomLevel(1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const len = lightboxIsGallery ? galleryImages.length : newsItems.length;
      return (prev - 1 + len) % len;
    });
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const currentLightboxSrc = lightboxIsGallery
    ? galleryImages[currentImageIndex]
    : newsItems[currentImageIndex]?.image;
  const currentLightboxAlt = lightboxIsGallery
    ? `Gallery Image ${currentImageIndex + 1}`
    : newsItems[currentImageIndex]?.title || "";

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">
            Latest News & Updates
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Stay informed about our latest research findings, workshops, partnerships, and achievements
            in educational transformation.
          </p>

          <Tabs defaultValue="news" className="max-w-6xl mx-auto mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div 
                      className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                      onClick={() => !item.externalLink && openLightbox(index)}
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className={`w-full h-full ${
                          item.category === "Social Media" ? "object-contain p-4" : "object-cover"
                        } group-hover:scale-110 transition-transform duration-300`}
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                        <h4 className="font-bold text-lg mb-2 text-center line-clamp-2">{item.title}</h4>
                        <p className="text-sm text-center line-clamp-3 mb-3">{item.excerpt}</p>
                        {!item.externalLink && (
                          <div className="flex items-center gap-2 text-xs">
                            <ZoomIn className="w-4 h-4" />
                            <span>Click to view</span>
                          </div>
                        )}
                      </div>

                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            item.category === "Research"
                              ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                              : item.category === "Workshop"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
                              : item.category === "Partnership"
                              ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                          }`}
                        >
                          {item.category}
                        </Badge>
                      </div>
                      {item.externalLink && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 rounded-full p-2">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      {item.externalLink ? (
                        <Button asChild size="sm" className="w-full">
                          <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                            View on LinkedIn
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Photo Gallery</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Explore moments from our workshops, research activities, and collaborative meetings that
                  showcase the STEP-STUDY project in action. Click any image to view it in full screen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="aspect-video overflow-hidden rounded-lg hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => openLightbox(index, true)}
                  >
                    <img
                      src={src}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
            <button
              onClick={zoomOut}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>
            <div className="bg-white/10 rounded-full px-4 py-2 text-white text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>
            <button
              onClick={zoomIn}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] overflow-auto">
            <img
              src={currentLightboxSrc}
              alt={currentLightboxAlt}
              className="transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center text-white bg-black/50 rounded-lg px-6 py-3 max-w-2xl">
            <h3 className="font-bold text-lg mb-1">{newsItems[currentImageIndex].title}</h3>
            <p className="text-sm text-white/80">
              {currentImageIndex + 1} / {newsItems.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
