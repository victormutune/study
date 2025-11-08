import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Get Started</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Join our community of educators and researchers working to transform education in Tanzania and beyond
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">For Researchers</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Access research databases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Collaborate on projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Publish findings</span>
                  </li>
                </ul>
                <Link to="/login">
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">For Teachers</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Professional development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Training workshops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Teaching resources</span>
                  </li>
                </ul>
                <Link to="/login">
                  <Button className="w-full bg-primary">Register Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">For Partners</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Institutional collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Funding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">Joint initiatives</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full" variant="outline">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
